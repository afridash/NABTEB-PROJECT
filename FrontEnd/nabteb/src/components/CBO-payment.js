import React, { Component } from 'react'
import '../App.css'
import {Link} from 'react-router-dom'
import Paper from 'material-ui/Paper'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DashboardHeader from './Dashboard-header'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

export default class CBOPayment extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  showPageContent () {
    return (
      <div className='col-sm-10 col-sm-offset-1' style={{padding:10}}>
        <Paper zDepth={1}>
          <div className='row'>
            <div className='col-sm-12'>
              <h3 className='lead text-center text-info'>Payment Details</h3>
              <div style={{padding:10}}>
                <p><b>Centre Inspection: </b> #50,000</p>
                <p><b>Registration Charges: </b> #1,500</p>
                <p><b>Contractor Registration Form: </b> #500</p>
                <br />
                <br />
                <p style={{fontSize:18}}><b>Total: </b> #52,000</p>
                <div className='text-center'>
                  <Link to='#'>
                  <RaisedButton
                    labelStyle={{color:'white'}}
                    buttonStyle={{backgroundColor:'#2980b9', borderColor:'white'}}
                    label="Bank Payment"
                    onClick={()=>this.setState({showBank:!this.state.showBank})}
                  />
                </Link>&nbsp;&nbsp;
                  <Link to='#'>
                  <RaisedButton
                    labelStyle={{color:'white'}}
                      buttonStyle={{backgroundColor:'#2980b9', borderColor:'white'}}
                      label="Online payments"
                    />
                  </Link>
                </div>
              </div>
            </div>
            {this.state.showBank && <div className='col-sm-12'>
              <div className='col-sm-8 col-sm-offset-2'>
                <h5 className='text-danger'>Pay at one of our partner banks, enter the pin provided after payment</h5>
                <p>Partner Banks: </p>
                <li>Guarantee Trust Bank</li>
                <li>Zenith Bank </li>
                <li>Wema Bank</li>
                <li>Unity Bank</li>
                <TextField
                type='text'
                hintText="Enter Pin"
                fullWidth={true}
                name='pin'
                floatingLabelText="Generated Pin"
              />
              <div style={{margin:10}}>
                <RaisedButton
                  labelStyle={{color:'white'}}
                  buttonStyle={{backgroundColor:'#16a085', borderColor:'white'}}
                  label="Verify"
                  />
              </div>
              </div>
            </div>}
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
