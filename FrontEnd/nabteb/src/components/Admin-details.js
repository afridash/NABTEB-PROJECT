import React, { Component } from 'react'
import '../App.css'
import {Link} from 'react-router-dom'
import Paper from 'material-ui/Paper'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import FileReaderInput from 'react-file-reader-input'
import DashboardHeader from './Dashboard-header'
import RaisedButton from 'material-ui/RaisedButton'
import getSymbolFromCurrency from 'currency-symbol-map/'
import CircularProgress from 'material-ui/CircularProgress'
import moment from 'moment'
export default class AdminDetails extends Component {
  constructor (props) {
    super(props)
    this.seriesId = this.props.match.params.series
    this.centerId = this.props.match.params.center
    this.userId = this.props.match.params.id
    this.state = {
      userId:'',
      currency:'',
      amtPaid:0,
      loading:true,
      email:'',
    }
  }
  async componentWillMount () {
    var userId = await localStorage.getItem('userId')
    var email = await localStorage.getItem('email')
    var currency = getSymbolFromCurrency('NGN')
    this.setState({userId, currency, email})
    this.retrievePersonalData(this.userId)
    this.retrieveExamInfo (this.userId)
    this.retrievePaymentInfo(this.userId)
    this.retrieveResults(this.userId)
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
  retrieveResults (userId) {
    fetch("http://localhost:8080/users/results/"+userId)
    .then(response => response.json())
    .then(results => {
        if (!results.status){
          this.setState(results)
        }
    }).catch(e => {
      alert(e)
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
  handleFile = (e, results) => {
    results.forEach(result => {
      const [e, file] = result; //Retrieve the picture that was selected
      this.setState({fileName:file.name, file:e.target.result, mime:file.type,upload:true})
    });
  }
  viewUploaded () {
    let pdfWindow = window.open("")
    pdfWindow.document.write("<iframe width='100%' height='100%' src='" + encodeURI(this.state.file)+"'></iframe>")
  }
  uploadResult () {
    var file = {
      id:this.userId,
      uploadedBy:this.state.email,
      uploadedOn:Date.now().toString(),
      file:this.state.file,
      fileName:this.state.fileName,
    }
    fetch("http://localhost:8080/users/results/create", {
      body: JSON.stringify(file), // must match 'Content-Type' header
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST',
    }).then(()=>{
      this.setState({
        uploadedOn:Date.now(),
        uploadedBy:this.state.email,
        upload:false
      })
    }).catch(error =>{
      alert(error)
    })
  }
  showPage () {
    return (
      <Paper zDepth={2}>
        <div className='row'>
          <div className='col-sm-12'>
            <div className='pull-right' style={{margin:20, backgroundColor:'red'}}>
            </div>
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
              <p style={{textAlign:'center', fontSize:22}}><b>Results</b></p>
              <p><b>Result: </b> {this.state.fileName} <span style={{fontSize:14, color:'#2980b9', cursor:'pointer'}} onClick={()=>this.viewUploaded()}>View</span>&nbsp;&nbsp;
              {this.state.upload && <span style={{fontSize:14, color:'#2980b9', cursor:'pointer'}} onClick={()=>this.uploadResult()}>Upload</span>}</p>
                <FileReaderInput as="url" id="my-file-input"
                  onChange={this.handleFile}>
                  <span style={{fontSize:16, color:'#2980b9', cursor:'pointer'}}>Choose Image</span>
                </FileReaderInput>
              <p><b>Uploaded By: </b>{this.state.uploadedBy}</p>
              <p><b>Uploaded On: </b> {moment(Number(this.state.uploadedOn)).format('LLL')}</p>
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
              <p><b>Transaction Amount: </b>{this.state.currency}{this.state.amtPaid.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}</p>
              <p><b>OrderId: </b> {this.state.orderId}</p>
              <p><b>Remita Retrieval Reference: </b> {this.state.referenceNumber}</p>
              <div className='text-center'>
                <Link to={'/user/admin/candidate/'+this.seriesId+"/"+this.centerId}>
                <RaisedButton
                  labelStyle={{color:'white'}}
                  buttonStyle={{backgroundColor:'#e74c3c', borderColor:'white'}}
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
      <MuiThemeProvider><DashboardHeader user='admin' materials={true} children={this.showPageContent()} /></MuiThemeProvider>
    );
  }
}
