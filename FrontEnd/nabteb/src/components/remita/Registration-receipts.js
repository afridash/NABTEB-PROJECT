import React, { Component } from 'react'
import '../../App.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import CircularProgress from 'material-ui/CircularProgress'
import SHA512 from "crypto-js/sha512"

const getUrlParams = url => `${url}?`.split('?')[1]
  .split('&').reduce((params, pair) =>((key, val) => key ? {...params, [key]: val} : params)
    (...`${pair}=`.split('=').map(decodeURIComponent)), {});
export default class RegistrationReceipt extends Component {
  constructor (props) {
    super(props)
    this.userId = this.props.match.params.id
    this.state = {
      orderID:'',
      userId:'',
      loading:true
    }
  }
  async componentWillMount () {
    this.getProgress()
    var params = getUrlParams(window.location.search)
    this.setState({orderId:params.orderID, userId:this.userId, rrr:params['RRR']})
    var apiKey = "1946"
    var hash = (SHA512(params['RRR'].toString()+apiKey+"2547916").toString())
    var proxyURL = 'https://cors-anywhere.herokuapp.com'
    fetch(proxyURL+"/http://www.remitademo.net/remita/ecomm/2547916/"+params['RRR']+"/"+hash+"/status.reg").then(response => response.json()).then(data => {
      this.setState({
        rrr:data['RRR'],
        message:data.message,
        amount:data.amount,
        statuscode:data.status,
        transactionTime:data.transactiontime
      })
      if (data.status === "00" || data.status === "01")
      this.updateProgress()
    })
  }
  getProgress () {
    fetch('http://localhost:8080/progress/'+this.userId).then(response => response.json()).then((user)=>{
        if (!user['status']){
          this.setState(user)
        }
        }).catch(error => {
          this.setState({error:'Information could not be saved',loading:false})
      })
  }
  updateProgress () {
    var data = {
      id:this.userId,
      finishedPayements:true,
      finishedPersonal:this.state.finishedPersonal,
      finishedBiometrics:this.state.finishedBiometrics,
      finishedExaminationsDetails:this.state.finishedExaminationsDetails,
      submitted:this.state.submitted
    }
    fetch("http://localhost:8080/progress/"+this.userId, {
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json'
      },
      method:'PUT',
    }).then(()=> {
      this.savePaymentDetails()
    }).catch(error => {
          this.setState({error:'Progress not updated',loading:false})
      })
  }
  savePaymentDetails () {
    var data = {
      id:this.userId,
      orderId:this.state.orderId,
      transactionTime:this.state.transactionTime,
      referenceNumber:this.state.rrr,
      message:this.state.message,
      amount:this.state.amount,
      status:this.state.statuscode
    }
    fetch("http://localhost:8080/registration/fees", {
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json'
      },
      method:'POST',
    }).then(()=> {
      this.setState({loading:false})
    }).catch(error => {

      })
  }
  showPageContent () {
    return (
      <div className='col-sm-10 col-sm-offset-1' style={{padding:10}}>
        {this.state.loading ? this.showSpinner() : this.showPage()}

      </div>
    )
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
      <div>
        {(()=>{
          if(this.state.statuscode === "00" || this.state.statuscode === "01")
          return (<div>
            <h2>Transaction Successful</h2>
            <p><b>Remita Retrieval Reference: </b>{this.state.rrr}</p>
            <p><b>Amount Paid: </b>{this.state.amount}</p>
          </div>)
          else if (this.state.statuscode === "021")
          return (
            <div>
              <h2>RRR Generated Successfully</h2>
              <p><b>Remita Retrieval Reference: </b>{this.state.rrr}></p>
            </div>
          )
          else return (
            <h2>Your Transaction was not Successful</h2>
          )
        })()}
        {(()=>{
          if (this.state.rrr)
          return   <p>Your Remita Retrieval Reference is <span><b>{this.state.rrr}</b></span><br /></p>
        })()}
        <p><b>Reason: </b>{this.state.message}</p>
      </div>
    )
  }
  render() {
    return (
      <MuiThemeProvider>
        {this.showPageContent()}
    </MuiThemeProvider>
    );
  }
}
