import React, { Component } from 'react'
import '../App.css'
import {Link} from 'react-router-dom'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DashboardHeader from './Dashboard-header'
import TextField from 'material-ui/TextField'

export default class Results extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showView:false,
      showBank:false
    }
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
                  <li><p>Make payment for pin (Online/Bank)</p></li>
                  <li><p>View results a max of five (5) times</p></li>
                </ul>
                <div className='text-center'>
                  <Link to='#'>
                  <RaisedButton
                    labelStyle={{color:'white'}}
                    buttonStyle={{backgroundColor:'#2980b9', borderColor:'white'}}
                    label="Bank Payment"
                    onClick={()=>this.setState({showBank:!this.state.showBank})}
                  />
                  </Link>
                  &nbsp;&nbsp;
                  <Link to='#'>
                  <RaisedButton
                    labelStyle={{color:'white'}}
                    buttonStyle={{backgroundColor:'#2980b9', borderColor:'white'}}
                    label="Online payment"
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
