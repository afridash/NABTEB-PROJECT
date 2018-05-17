import React, {Component} from 'react'
import Paper from 'material-ui/Paper'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DashboardHeader from './Dashboard-header'
import {Tabs, Tab} from 'material-ui/Tabs';
import RaisedButton from 'material-ui/RaisedButton'
import {Link} from 'react-router-dom'
import CircularProgress from 'material-ui/CircularProgress'
import getSymbolFromCurrency from 'currency-symbol-map/'
import moment from 'moment'
export default class AdminCandidateMaterial extends Component {
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
    var tempFees=[]
    fetch("http://localhost:8080/materials/fees").then(response =>response.json()).then(fees => {
      fees.forEach((fee)=> {
        fetch("http://localhost:8080/users/"+fee.id).then(response => response.json()).then(user=> {
          tempFees.push({referenceNumber:fee.referenceNumber, amount:fee.amount, transactionTime:fee.transactionTime, name:user.lastName + ", " + user.firstName, phoneNumber:user.phoneNumber})
          this.setState({fees:tempFees, loading:false, total:this.state.total + fee.amount})
        })
      })
      if (fees.length === 0) {
        this.setState({loading:false})
      }
    }).catch(error => {
      alert(error)
      this.setState({loading:false})
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
              <th>Name</th>
              <th>Phone Number</th>
              <th>Transaction Date</th>
              <th>Remital Retrival Reference </th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {this.state.fees.map((fee, key)=>
              <tr key={key}>
                <td>{key+1}</td>
                <td>{fee.name}</td>
                <td>{fee.phoneNumber}</td>
                <td>{moment(fee.transactionTime).format('LL')}</td>
                <td>{fee.referenceNumber}</td>
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
          <h3 className='text-info text-center'></h3>
          <Paper zDepth={1}>
            <div className='panel panel-default'>
              <div className='panel-heading'>
                <div className='text-info text-center'>
                  <input type='text' className='form-control' placeholder="Search..." style={{marginBottom:5, textAlign:'center', fontSize:18}} />
                </div>
              </div>
              <div className='panel-body'>
                 <Tabs>
                  <Tab label="Materials" style={{backgroundColor:'#16a085', fontSize:18}}>
                    {this.state.loading ? this.showSpinner() : this.showTable()}
                  </Tab>
                </Tabs>

              </div>
            </div>
          </Paper>
              <div className='text-center'>

            <Link to='/user/admin/payment'>
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
