import React, { Component } from 'react'
import '../App.css'
import {Link} from 'react-router-dom'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DashboardHeader from './Dashboard-header'
import TextField from 'material-ui/TextField'
import SHA512 from "crypto-js/sha512"
import getSymbolFromCurrency from 'currency-symbol-map/'

export default class Results extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showView:false,
      completedPayment:false
    }
  }
  async componentWillMount () {
    var userId = await localStorage.getItem('userId')
    var email = await localStorage.getItem('email')
    var naira = getSymbolFromCurrency('NGN')
    this.setState({userId, email, currency:naira})
    this.retrieveInfo(userId)
    this.retrievePaymentInfo(userId)
    this.retrieveResults(userId)
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
  retrievePaymentInfo (userId) {
    //Get user payment Information
    var url = 'http://localhost:8080/result/fees/'+userId
    fetch(url).then(response => response.json()).then((fees)=>{
      if (fees.referenceNumber !== undefined && fees.views <=5){
        this.setState({completedPayment:true, views:fees.views})
      }else this.setPaymentDetails(userId)
        }).catch(error => {
          this.setState({error:'Error loading information details',loading:false})
      })
  }
  setPaymentDetails () {
    var responseUrl = "http://localhost:3000/receipts/results/"+this.state.userId
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
          this.setState({phoneNumber:user.phoneNumber, email:this.state.email, fullName:user.lastName + ' ' + user.firstName})
        }
        }).catch(error => {
          this.setState({error:'Information could not be saved',loading:false})
      })
  }
  viewUploaded () {
    let pdfWindow = window.open("")
    pdfWindow.document.write("<iframe width='100%' height='100%' src='" + encodeURI(this.state.file)+"'></iframe>")
    this.updateViews(this.state.views+1)
    if (this.state.views < 5)
    this.setState({views:this.state.views+1})
    else this.setState({completedPayment:false})
  }
  updateViews (count) {
    var file = {
      count:count
    }
    fetch("http://localhost:8080/result/fees/update/"+this.state.userId+"/"+count, {
      body: JSON.stringify(file), // must match 'Content-Type' header
      headers: {
        'content-type': 'application/json'
      },
      method: 'PUT',
    }).then(()=> {
      console.log("DONE")
    }).catch(error => {
      alert(error)
    })
  }
  showPageContent () {
    return (
      <div className='col-sm-10 col-sm-offset-1' style={{padding:10}}>
        <p className='lead text-center text-info'>Instructions</p>
        <Paper zDepth={1}>
          <div className='row'>
            <div className='col-sm-12 '>
              <div style={{padding:10}}>
                <ul>
                  <li><p>Make a payment of <b>One Thousand (1,000) Naira</b> for PIN</p></li>
                  <li><p>View results a max of five (5) times per PIN</p></li>
                </ul>
                {this.state.completedPayment && <div>
                  <RaisedButton
                    labelStyle={{color:'white'}}
                      buttonStyle={{backgroundColor:'#2980b9', borderColor:'white'}}
                      label="View Result"
                      onClick={()=>this.viewUploaded()}
                    />
                    <i className='text-info'>You have viewed this result {this.state.views} time(s)</i>
                </div>}
                {!this.state.completedPayment && <div className='text-center'>
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
                </div>}
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
