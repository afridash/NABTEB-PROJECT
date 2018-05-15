import React, { Component } from 'react'
import '../App.css'
import {Link} from 'react-router-dom'
import Paper from 'material-ui/Paper'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DashboardHeader from './Dashboard-header'
import RaisedButton from 'material-ui/RaisedButton'
import SHA512 from "crypto-js/sha512"
import getSymbolFromCurrency from 'currency-symbol-map/'
export default class CBOPayment extends Component {
  constructor (props) {
    super(props)
    this.state = {
      userId:'',
      email:'',
      currency:''
    }
  }
  async componentWillMount () {
    var currency = getSymbolFromCurrency('NGN')
    var userId = await localStorage.getItem('userId')
    var email = await localStorage.getItem('email')
    this.setState({userId, email, currency})
    this.retrieveInfo(userId)
    this.setPaymentDetails(userId)
  }
  setPaymentDetails (userId) {
    var responseUrl = "http://localhost:3000/receipts/centers/"
    var merchantId = "2547916"
    var serviceTypeId = "4430731"
    var orderId = (Date.now()).toString()
    var apiKey = "1946"
    var total = (52000).toString()
    var hash = (SHA512(merchantId+serviceTypeId+orderId+total+responseUrl+apiKey).toString())
        this.setState({
          total:52000,
          hash:hash,
          orderId:orderId,
          responseUrl:responseUrl,
          serviceTypeId:serviceTypeId,
          merchantId:merchantId,
          apiKey:apiKey
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
    let {apiKey, merchantId, orderId, serviceTypeId, total} = this.state
    return (
      <div className='col-sm-10 col-sm-offset-1' style={{padding:10}}>
        <Paper zDepth={1}>
          <div className='row'>
            <div className='col-sm-12'>
              <h3 className='lead text-center text-info'>Centers</h3>
              <div style={{padding:10}}>
                <table className="table table-striped"  style={{fontFamily:"Times New Roman", fontSize:18}}>
                  <thead>
                    <tr>
                      <th>S/N</th>
                      <th>Name</th>
                      <th>Center Name</th>
                      <th>Center Address</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>{this.state.fullName}</td>
                      <td>Progress Commercial College </td>
                      <td>Oruruala Oguduasa. 01004 Commercial Isuikwato Along Akara to Aba on Major Road.</td>
                    <td>
                     <form id="result_form" action="http://www.remitademo.net/remita/ecomm/init.reg" target="_blank" ame="SubmitRemitaForm" method="POST">
                       <input name="merchantId" value={merchantId} type="hidden"/>
                       <input name="serviceTypeId" value={serviceTypeId} type="hidden"/>
                       <input name="orderId" value={orderId} type="hidden"/>
                       <input name="hash" value={(SHA512(merchantId+serviceTypeId+orderId+total+this.state.responseUrl+"1"+apiKey).toString())} type="hidden"/>
                       <input name="payerName" value={this.state.fullName} type="hidden"/>
                       <input name="payerEmail" value={this.state.email} type="hidden" />
                       <input name="payerPhone" value={this.state.phoneNumber} type="hidden" />
                       <input name="amt" value={this.state.total} type="hidden" />
                       <input name="responseurl" value={this.state.responseUrl+"1"} type="hidden" />
                       <RaisedButton
                         labelStyle={{color:'white'}}
                         buttonStyle={{backgroundColor:'#16a085', borderColor:'white'}}
                         label="Pay"
                         type ="submit"
                       />
                    </form>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Ibrahim Suleman</td>
                      <td>Lilac Comp. Voc. School</td>
                      <td>Aba 01005 Commercial. Aba North 13c Ukaegbu Road, Ogbor Hill, Aba.</td>
                      <td>
                        <form id="result_form" action="http://www.remitademo.net/remita/ecomm/init.reg" target="_blank" ame="SubmitRemitaForm" method="POST">
                       <input name="merchantId" value={merchantId} type="hidden"/>
                       <input name="serviceTypeId" value={serviceTypeId} type="hidden"/>
                       <input name="orderId" value={orderId} type="hidden"/>
                       <input name="hash" value={(SHA512(merchantId+serviceTypeId+orderId+total+this.state.responseUrl+"2"+apiKey).toString())} type="hidden"/>
                       <input name="payerName" value={this.state.fullName} type="hidden"/>
                       <input name="payerEmail" value={this.state.email} type="hidden" />
                       <input name="payerPhone" value={this.state.phoneNumber} type="hidden" />
                       <input name="amt" value={this.state.total} type="hidden" />
                       <input name="responseurl" value={this.state.responseUrl+"2"} type="hidden" />
                       <RaisedButton
                         labelStyle={{color:'white'}}
                         buttonStyle={{backgroundColor:'#16a085', borderColor:'white'}}
                         label="Pay"
                         type ="submit"
                       />
                       </form>
                  </td>
                    </tr>
                  </tbody>
                </table>
                <h3 className='lead text-center text-info'>Charges</h3>
                <table className="table table-striped"  style={{fontFamily:"Times New Roman", fontSize:18}}>
                  <thead>
                    <tr>
                      <th>S/N</th>
                      <th>Description</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Centre Inspection</td>
                      <td>{this.state.currency}50,000.00</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Registration Charges</td>
                      <td>{this.state.currency}1,500.00</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Contractor Registration Form</td>
                      <td>{this.state.currency}500.00</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td><b>Total </b></td>
                      <td><b>{this.state.currency}52,000.00</b></td>
                    </tr>
                  </tbody>
                </table>
                <div className='text-center'>
                  <img src={require("../images/remita.png")} alt='remita logo' />
                  <br/>
                  <Link to='/user/cbo'>
                  <RaisedButton
                    labelStyle={{color:'white'}}
                    buttonStyle={{backgroundColor:'#e74c3c', borderColor:'white'}}
                    label="Close"
                  />
                </Link>
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
      <MuiThemeProvider><DashboardHeader materials={true} children={this.showPageContent()} /></MuiThemeProvider>
    );
  }
}
