import React, { Component } from 'react'
import '../App.css'
import {Link} from 'react-router-dom'
import Paper from 'material-ui/Paper'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DashboardHeader from './Dashboard-header'
import RaisedButton from 'material-ui/RaisedButton'

export default class BiometricsVerification extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  showPageContent () {
    return (
      <div className='col-sm-10 col-sm-offset-1' style={{padding:10}}>
        <Paper zDepth={2}>
          <div className='row'>
            <div className='col-sm-12'>
              <p className='lead text-center text-info'>Biometric Confirmation</p>
              <div style={{padding:10}}>
                <p><b>Biometric Status:</b> <span className='text-success'>Submitted</span></p>
                <p><b>Submitted At:</b> FitFarm Plc</p>
                <p><b>Time uploaded:</b> Wednesday, January 2017 5pm</p>
              </div>
              <div style={{margin:10}}>
                <Link to='/dashboard'>
                  <RaisedButton
                    labelStyle={{color:'white'}}
                    buttonStyle={{backgroundColor:'#16a085', borderColor:'white'}}
                    label="Accept"
                    />
                </Link>

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
