import React, { Component } from 'react'
import '../App.css'
import {Link} from 'react-router-dom'
import Paper from 'material-ui/Paper'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DashboardHeader from './Dashboard-header'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import SHA512 from "crypto-js/sha512"
import getSymbolFromCurrency from 'currency-symbol-map/'
export default class ExamPayments extends Component {
  constructor (props) {
    super(props)
    this.state = {
      userId:'',
      examValue:'',
      amount:0,
      percentage:0,
      total:0,
      email:'',
      charge:1500,
      phoneNumber:'',
      fullName:''
    }
  }
  async componentWillMount () {
    var userId = await localStorage.getItem('userId')
    var email = await localStorage.getItem('email')
    var finishedPayements = localStorage.getItem('finishedPayements')
    var fullName = await localStorage.getItem('fullName')
    var phoneNumber = await localStorage.getItem('phoneNumber')
    if (finishedPayements === 'true') {
      this.retrievePaymentInfo(userId)
      this.setState({completedPayment:true})
    }
    var naira = getSymbolFromCurrency('NGN')
    this.setState({userId, email, currency:naira, fullName, phoneNumber})
    this.retrieveExamInfo(userId)
  }
  componentWillUnmount () {
    localStorage.removeItem('finishedPayements')
  }
  retrievePaymentInfo (userId) {
    //Get user payment Information
    var url = 'http://localhost:8080/registration/fees/'+userId
    fetch(url).then(response => response.json()).then((fees)=>{
        this.setState({referenceNumber:fees.referenceNumber, orderId:fees.orderId, transactionTime:fees.transactionTime, amtPaid:fees.amount, transactionStatus:fees.status, message:fees.message})
        }).catch(error => {
          this.setState({error:'Error loading information details',loading:false})
      })
  }
  retrieveExamInfo (userId) {
    //Get exam details for pricing list
    var url = 'http://localhost:8080/users/exams/'+userId
    fetch(url).then(response => response.json()).then((user)=>{
      var amt = ''
      if (user.examType === "National Business Certificate" || user.examType === "National Technical Certificate")
      amt = 10000
      else if (user.examType === 'Advanced National Business Certificate' || user.examType === 'Advanced National Technical Certificate')
      amt = 12000
      else if (user.examType === "Common Entrance")
      amt = 1000
      else if (user.examType === 'Modular Trade Test')
      amt = 3000
      else amt = 0
      var percentage = (amt + 1500)*(2/100)
      var responseUrl = "http://localhost:3000/receipts/registration/"+this.state.userId
      var merchantId = "2547916"
      var serviceTypeId = "4430731"
      var orderId = (Date.now()).toString()
      var apiKey = "1946"
      var total = (amt+1500+percentage).toString()
      var hash = (SHA512(merchantId+serviceTypeId+orderId+total+responseUrl+apiKey).toString())
        if (user.state){
          this.setState({
            examValue:user.examType,
            amount:amt,
            percentage:percentage,
            total:amt+1500+percentage,
            hash:hash,
            orderId:orderId,
            responseUrl:responseUrl,
            serviceTypeId:serviceTypeId,
            merchantId:merchantId
          })
        }
        }).catch(error => {
          this.setState({error:'Network error, could not retrieve info',loading:false})
      })
  }
  showPageContent () {
    return (
      <div className='col-sm-10 col-sm-offset-1' style={{padding:10}}>
        <Paper zDepth={1}>
          <div className='row'>
            <div className='col-sm-12'>
              <h3 className='lead text-center text-info'>Payment Details</h3>
              <div style={{padding:10}}>
                <table className='table table-striped'>
                  <thead className='table-striped'>
                      <tr>
                        <td>
                          S/N
                        </td>
                        <td>
                          Description
                        </td>
                        <td>
                          Amount
                        </td>
                      </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>{this.state.examValue}</td>
                      <td>{this.state.currency} {this.state.amount.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Registration Pin/Services</td>
                      <td>{this.state.currency} {this.state.charge.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Gateway</td>
                      <td>{this.state.currency} {this.state.percentage.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td><b>Total</b></td>
                      <td><b>{this.state.currency} {this.state.total.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}</b></td>
                    </tr>
                  </tbody>
                </table>
                <br />
                <br />
                <div>
                  {this.state.completedPayment ? this.showPaymentDetails() : this.showPaymentAPI()}
                </div>
              </div>
            </div>
          </div>
        </Paper>
      </div>
    )
  }
  showPaymentDetails () {
    return (
      <div>
        <p><b>Transaction Status: </b> {this.state.message}</p>
        <p><b>OrderId: </b> #{this.state.orderId}</p>
        <p><b>Remita Retrieval Reference: </b> #{this.state.referenceNumber}</p>
        <div className='text-center'>
          <Link to='/dashboard'>
          <RaisedButton
            labelStyle={{color:'white'}}
            buttonStyle={{backgroundColor:'#e74c3c', borderColor:'white'}}
            label="Close"
          />
          </Link>
        </div>
      </div>
    )
  }
  showPaymentAPI () {
    return (
      <div className='text-center'>
        <form target="_blank" id='registration_form' action="http://www.remitademo.net/remita/ecomm/init.reg" name="SubmitRemitaForm" method="POST">
       <input name="merchantId" value={this.state.merchantId} type="hidden"/>
       <input name="serviceTypeId" value={this.state.serviceTypeId} type="hidden"/>
       <input name="orderId" value={this.state.orderId} type="hidden"/>
       <input name="hash" value={this.state.hash} type="hidden"/>
       <input name="payerName" value={this.state.fullName} type="hidden"/>
       <input name="payerEmail" value={this.state.email} type="hidden" />
       <input name="payerPhone" value={this.state.phoneNumber} type="hidden" />
       <input name="amt" value={this.state.total} type="hidden" />
       <input name="responseurl" value={this.state.responseUrl} type="hidden" />
         <RaisedButton
           labelStyle={{color:'white'}}
             buttonStyle={{backgroundColor:'#2980b9', borderColor:'white'}}
             label="Proceed"
             type ="submit"
             name="submit_btn"
           />
       </form>
       <img src={require("../images/remita.png")} alt='remita logo' />
      </div>
    )
  }
  render() {
    return (
      <MuiThemeProvider><DashboardHeader children={this.showPageContent()} /></MuiThemeProvider>
    );
  }
}
