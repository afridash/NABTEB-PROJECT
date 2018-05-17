import React, {Component} from 'react'
import Paper from 'material-ui/Paper'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import CircularProgress from 'material-ui/CircularProgress'
import DashboardHeader from './Dashboard-header'
import {Tabs, Tab} from 'material-ui/Tabs'
import RaisedButton from 'material-ui/RaisedButton'
import {Link} from 'react-router-dom'
import getSymbolFromCurrency from 'currency-symbol-map/'
import moment from 'moment'
export default class AdminPayment extends Component {
  constructor (props) {
    super(props)
    this.state = {
      fees:[],
      loading:true,
      currency:getSymbolFromCurrency('NGN'),
      total:0,
    }
  }
  componentWillMount () {
    fetch("http://localhost:8080/centers/fees").then(response =>response.json()).then(fees => {
      var tempFees=[]
      var total = 0
      fees.forEach((fee)=> {
          total += fee.amount
        fetch("http://localhost:8080/centers/"+fee.id).then(response => response.json()).then(center => {
          tempFees.push({referenceNumber:fee.referenceNumber,
            transactionTime:fee.transactionTime,
            amount:fee.amount,
            ownerName:center.ownerName,
            centerName:center.centerName,
            address:center.location})
          this.setState({fees:tempFees, loading:false, total})
        }).catch(error => {
          alert(error)
        })
      })
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
  showTable () {
    return (
      <div>
        <p style={{padding:10}} className='pull-right lead'>Total: {this.state.currency}{this.state.total.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}</p>
        <table class="table table-striped"  style={{fontFamily:"Times New Roman", fontSize:18}}>
          <thead>
            <tr>
              <th>S/N</th>
              <th>Center Owner</th>
              <th>Center Name</th>
              <th>Center Address</th>
              <th>Remita Retrieval Reference</th>
              <th>Date</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {this.state.fees.map((fee, key)=>
              <tr key={key}>
                <td>{key+1}</td>
                <td>{fee.ownerName}</td>
                <td>{fee.centerName}</td>
                <td>{fee.address}</td>
                <td>{fee.referenceNumber}</td>
                <td>{moment(fee.transactionTime).format('LL')}</td>
                <td>{this.state.currency}{fee.amount.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

    )
  }
  showPageContent(){
      return (
        <div className="col-sm-10 col-sm-offset-1">
          <h3 className='text-info text-center'>Payments</h3>
          <Paper zDepth={1}>
            <div className='panel panel-default'>
              <div className='panel-heading'>
                <div className='text-info text-center'>
                  <input type='text' className='form-control' placeholder="Search..." style={{marginBottom:5, textAlign:'center', fontSize:18}} />
                </div>
              </div>
              <div className='panel-body'>
                 <Tabs>
                        <Tab label="Centers" style={{backgroundColor:'#16a085'}}>
                          {this.state.loading ? this.showSpinner() : this.showTable()}
                        </Tab>
                        <Tab label="Candidates" style={{backgroundColor:'#16a085'}}>
                          <div className='panel-body'>
                              <ol style={{fontSize:22, fontFamily:'Times New Roman'}}>
                                <ul>
                                    <li><Link to ='/user/admin/payments/registrations'>Registration</Link></li>
                                    <li><Link to ='/user/admin/payments/results'>Results</Link></li>
                                    <li><Link to ='/user/admin/payments/materials'>Materials</Link></li>
                                </ul>
                              </ol>
                          </div>
                        </Tab>
                </Tabs>

              </div>
            </div>
          </Paper>
              <div className='text-center'>

            <Link to='/user/admin/dashboard'>
          <RaisedButton
            labelStyle={{color:'white'}}
            buttonStyle={{backgroundColor:'#b71c1c', borderColor:'white'}}
            label="Close"
          />
        </Link>
          </div>

        </div>
      );
  }
  render() {
    return (
      <MuiThemeProvider><DashboardHeader materials={true} children={this.showPageContent()} /></MuiThemeProvider>
    );
  }
}
