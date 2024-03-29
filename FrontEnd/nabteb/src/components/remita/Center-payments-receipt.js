import React, { Component } from 'react'
import '../../App.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import CircularProgress from 'material-ui/CircularProgress'
import SHA512 from "crypto-js/sha512"
import getSymbolFromCurrency from 'currency-symbol-map/'

const getUrlParams = url => `${url}?`.split('?')[1]
  .split('&').reduce((params, pair) =>((key, val) => key ? {...params, [key]: val} : params)
    (...`${pair}=`.split('=').map(decodeURIComponent)), {});
export default class CentersReceipt extends Component {
  constructor (props) {
    super(props)
    this.centerId = this.props.match.params.id
    this.state = {
      orderID:'',
      centerId:'',
      loading:true,
      currency:getSymbolFromCurrency("NGN")
    }
  }
  async componentWillMount () {
    var params = getUrlParams(window.location.search)
    this.setState({orderId:params.orderID, centerId:this.centerId, rrr:params['RRR']})
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
      if (data.status == "00" || data.status == "01" || data.status == "021")
        this.savePaymentDetails()
    })
  }
  savePaymentDetails () {
    var data = {
      id:this.centerId,
      orderId:this.state.orderId,
      transactionTime:this.state.transactionTime,
      referenceNumber:this.state.rrr,
      message:this.state.message,
      amount:this.state.amount,
      status:this.state.statuscode
    }
    fetch("http://localhost:8080/centers/fees", {
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json'
      },
      method:'POST',
    }).then(()=> {
      this.updateStatus()
    }).catch(error => {

      })
  }
  updateStatus () {
    fetch("http://localhost:8080/centers/"+this.centerId+"/update/pending").then(()=> {
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
          if(this.state.statuscode == "00" || this.state.statuscode == "01")
          return (<div>
            <h2>Transaction Successful</h2>
            <p><b>Remita Retrieval Reference: </b>{this.state.rrr}</p>
            <p><b>Amount Paid: </b>{this.state.currency}{this.state.amount.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}</p>
          </div>)
          else if (this.state.statuscode == "021")
          return (
            <div>
              <h2>RRR Generated Successfully</h2>
              <p><b>Remita Retrieval Reference: </b>{this.state.rrr}</p>
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
