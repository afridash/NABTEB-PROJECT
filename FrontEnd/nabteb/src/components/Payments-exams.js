import React, { Component } from 'react'
import '../App.css'
import {Link} from 'react-router-dom'
import Paper from 'material-ui/Paper'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DashboardHeader from './Dashboard-header'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

export default class ExamPayments extends Component {
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
                <p><b>Selected Examination: </b> NTC (#10,000)</p>
                <p><b>Registration Pin/Services: </b> #1,500</p>
                <p><b>Gateway: </b> #100</p>
                <br />
                <br />
                <p style={{fontSize:18}}><b>Total: </b> #11,600</p>
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
                <li>Gaurantee Trust Bank</li>
                <li>Fidelity Bank Plc</li>
                <li>First Bank Plc</li>
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
      <MuiThemeProvider><DashboardHeader children={this.showPageContent()} /></MuiThemeProvider>
    );
  }
}
