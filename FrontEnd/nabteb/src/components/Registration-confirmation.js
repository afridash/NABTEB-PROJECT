import React, { Component } from 'react'
import '../App.css'
import {Link} from 'react-router-dom'
import Paper from 'material-ui/Paper'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DashboardHeader from './Dashboard-header'
import RaisedButton from 'material-ui/RaisedButton'
import getSymbolFromCurrency from 'currency-symbol-map/'
import CircularProgress from 'material-ui/CircularProgress'
import moment from 'moment'
export default class RegistrationConfirmation extends Component {
  constructor (props) {
    super(props)
    this.state = {
      userId:'',
      currency:'',
      amtPaid:0,
      loading:true,
    }
  }
  async componentWillMount () {
    var userId = await localStorage.getItem('userId')
    var currency = getSymbolFromCurrency('NGN')
    this.setState({userId, currency})
    this.retrievePersonalData(userId)
    this.retrieveExamInfo (userId)
    this.retrievePaymentInfo(userId)
  }
  retrievePersonalData (userId) {
    var url = 'http://localhost:8080/users/'+userId
    fetch(url).then(response => response.json()).then((user)=>{
        if (!user['status']){
          this.setState(user)
          this.setState({profilePicture:user.passport, dob:moment(user.dob).format("ll")})
        }
        }).catch(error => {
          this.setState({error:'Encountered an error retrieving information',loading:false})
      })
  }
  retrieveExamInfo (userId) {
    //Get exam details for pricing list
    var url = 'http://localhost:8080/users/exams/'+userId
    fetch(url).then(response => response.json()).then((user)=>{
      this.setState(user)
      this.setState({examState:user.state})
    })
  }
  retrievePaymentInfo (userId) {
    //Get user payment Information
    var url = 'http://localhost:8080/registration/fees/'+userId
    fetch(url).then(response => response.json()).then((fees)=>{
        if (fees.orderId !== null && fees.orderId !== undefined) this.setState({referenceNumber:fees.referenceNumber, orderId:fees.orderId, transactionTime:fees.transactionTime, amtPaid:fees.amount, transactionStatus:fees.status, message:fees.message, loading:false})
        else this.setState({loading:false})
        }).catch(error => {
          this.setState({error:'Error loading information details',loading:false})
      })
  }
  showSpinner () {
    return (
      <div className="row text-center">
          <br/>
          <br/>
          <CircularProgress size={60} thickness={5} />
      </div>
    )
  }
  showPage () {
    return (
      <Paper zDepth={2}>
        <div className='row'>
          <div className='col-sm-12'>
            <p className='lead text-center text-info' style={{fontSize:25, fontWeight:400}}>Personal Data</p>
            <div style={{borderBottomStyle:'solid', borderWidth:'1px',margin: 20, padding:10}}>
              <div className='text-center'>
                <img src={this.state.profilePicture} className='img-thumbnail' style={{width:100, height:100}} />
              </div>
            <div style={{padding:10, fontSize:20, fontFamily:'Times New Roman'}}>
              <p><b>First Name: </b> {this.state.firstName} </p>
              <p><b>Middle Name: </b> {this.state.middleName}</p>
              <p><b>Surname: </b>{this.state.lastName}</p>
              <p><b>Gender: </b>{this.state.gender}</p>
              <p><b>D.O.B: </b>{this.state.dob}</p>
              <p><b>Phone Number: </b> {this.state.phoneNumber}</p>
              <p><b>State: </b>{this.state.state}</p>
              <p><b>LGA: </b>{this.state.lga}</p>
              <p><b>Address: </b>{this.state.address}</p>
              <p style={{textAlign:'center', fontSize:22}}><b>Next of Kin</b></p>
              <p><b>Full Name: </b> {this.state.kinFullName} </p>
              <p><b>Address: </b>{this.state.kinAddress}</p>
              <p><b>Phone Number: </b> {this.state.kinPhoneNumber}</p>
            </div>
            </div>
          </div>
          <div className='col-sm-12'>
            <p className='lead text-center text-info' style={{fontSize:25, fontWeight:400}}>Examination Details</p>
            <div style={{borderBottomStyle:'solid', borderWidth:'1px',margin: 20, padding:10}}>
            <div style={{padding:10, fontSize:20, fontFamily:'Times New Roman'}}>
              <p><b>State: </b> {this.state.examState} </p>
              <p><b>Local government: </b> {this.state.localGovernment}</p>
              <p><b>Exam Center: </b>{this.state.examCenter}</p>
              <p><b>Exam Type: </b>{this.state.examType}</p>
              <p><b>Exam Title: </b>{this.state.examTitle}</p>
            </div>
            </div>
          </div>
          <div className='col-sm-12'>
            <p className='lead text-center text-info' style={{fontSize:25, fontWeight:400}}>Biometric Data</p>
            <div style={{borderBottomStyle:'solid', borderWidth:'1px',margin: 20, padding:10}}>
            <div style={{padding:10, fontSize:20, fontFamily:'Times New Roman'}}>
              <p><b>Biometric Status:</b> <span className='text-success'>Submitted</span></p>
              <p><b>Submitted At:</b> FitFarm Plc</p>
              <p><b>Time uploaded:</b> Wednesday, January 2017 5pm</p>
            </div>

            </div>
          </div>
          <div className='col-sm-12'>
            <p className='lead text-center text-info' style={{fontSize:25, fontWeight:400}}>Payments</p>
            <div style={{margin: 20, padding:10}}>
            <div style={{padding:10, fontSize:20, fontFamily:'Times New Roman'}}>
              <p><b>Transaction Status: </b> {this.state.message}</p>
              <p><b>Transaction Amount: </b>{this.state.currency} {this.state.amtPaid.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}</p>
              <p><b>OrderId: </b> {this.state.orderId}</p>
              <p><b>Remita Retrieval Reference: </b> {this.state.referenceNumber}</p>
              <div className='text-center'>
                <Link to='/dashboard'>
                <RaisedButton
                  labelStyle={{color:'white'}}
                  buttonStyle={{backgroundColor:'#2980b9', borderColor:'white'}}
                  label="Close"
                />
              </Link>&nbsp;&nbsp;

              </div>
            </div>
            </div>
          </div>
        </div>
      </Paper>

    )
  }
  showPageContent () {
    return (
      <div className='col-sm-10 col-sm-offset-1' style={{padding:10}}>
        {this.state.loading ? this.showSpinner() : this.showPage()}
      </div>
    )
  }
  render() {
    return (
      <MuiThemeProvider><DashboardHeader children={this.showPageContent()} /></MuiThemeProvider>
    );
  }
}
