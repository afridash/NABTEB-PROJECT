import React, { Component } from 'react'
import '../App.css'
import {Link} from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DashboardHeader from './Dashboard-header'
import TextField from 'material-ui/TextField'
import SHA512 from "crypto-js/sha512"
import getSymbolFromCurrency from 'currency-symbol-map/'
export default class Materials extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currency:'',
      email:'',
      userId:''
    }
  }
  async componentWillMount () {
    var userId = await localStorage.getItem('userId')
    var email = await localStorage.getItem('email')
    var currency = getSymbolFromCurrency('NGN')
    this.setState({userId, email, currency})
    this.retrieveInfo(userId)
    this.setPaymentDetails(userId)
  }
  setPaymentDetails (userId) {
    var responseUrl = "http://localhost:3000/receipts/materials/"+userId
    var merchantId = "2547916"
    var serviceTypeId = "4430731"
    var orderId = (Date.now()).toString()
    var apiKey = "1946"
    var total = (1000).toString()
    var hash = (SHA512(merchantId+serviceTypeId+orderId+total+responseUrl+apiKey).toString())
        this.setState({
          total:1000,
          hash:hash,
          orderId:orderId,
          responseUrl:responseUrl,
          serviceTypeId:serviceTypeId,
          merchantId:merchantId
        })
  }
  retrieveInfo (userId) {
    //Get user information for payment platform
    var url = 'http://localhost:8080/users/'+userId
    fetch(url).then(response => response.json()).then((user)=>{
        if (!user['status']){
          this.setState({phoneNumber:user.phoneNumber, fullName:user.lastName + ' ' + user.firstName})
        }
        }).catch(error => {
          this.setState({error:'Information could not be saved',loading:false})
      })
  }
  showPageContent () {
    return (
      <div className='col-sm-10 col-sm-offset-1' style={{padding:10}}>
        <h5 className='lead text-center text-info'>Instructions</h5>
        <Paper zDepth={1}>
          <div className='row'>
            <div className='col-sm-12 '>
              <div style={{padding:10}}>
                <ul>
                  <li><p>Make payment for offline app access</p></li>
                  <li><p>Download the offline app here</p></li>
                  <li><p>Log in with NABTEB details</p></li>
                  <li><p>Practice past questions using the offline app</p></li>
                </ul>
                <div className='text-center'>
                  <form id="result_form" action="http://www.remitademo.net/remita/ecomm/init.reg" target="_blank" ame="SubmitRemitaForm" method="POST">
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
              </div>
            </div>
          </div>
        </Paper>
      </div>
    )
  }
  render() {
    return (
      <MuiThemeProvider><DashboardHeader children={this.showPageContent()} /></MuiThemeProvider>
    );
  }
}
