import React, { Component } from 'react'
import '../App.css'
import {Link} from 'react-router-dom'
import Paper from 'material-ui/Paper'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DashboardHeader from './Dashboard-header'
import RaisedButton from 'material-ui/RaisedButton'

export default class CBODashboard extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  showPageContent () {
    return (
      <div className='col-sm-10 col-sm-offset-1' style={{padding:10}}>
        <p className='lead'>Welcome, Susan</p>
        <div className='col-sm-12'>
          <div className='col-sm-6'>
              <div className='panel-body'>
                <Paper zDepth={3} rounded>
                  <div className='row'>
                    <div className='col-sm-12'>
                      <div style={{padding:10}}>
                        <p className='text-center'>Step 1: <span style={{fontWeight:'600'}}>Personal Data</span></p>
                          <i className='text-info'>Submit personal data such as name, and address. Click on start to begin.</i>
                          <div className='text-center' style={{margin:10}}>
                            <Link to='/user/cbo/details'>
                            <RaisedButton
                              labelStyle={{color:'white'}}
                                buttonStyle={{backgroundColor:'#2980b9', borderColor:'white'}}
                                label="Start"
                              />
                            </Link>
                          </div>
                      </div>
                    </div>
                  </div>
                </Paper>
            </div>
          </div>
          <div className='col-sm-6'>
              <div className='panel-body'>
                <Paper zDepth={3} rounded>
                  <div className='row'>
                    <div className='col-sm-12'>
                      <div style={{padding:10}}>
                        <p className='text-center'>Step 2: <span style={{fontWeight:'600'}}>Examination </span></p>
                          <i className='text-info'>View your examination series, centers and candidates registered. </i>
                          <div className='text-center' style={{margin:10}}>
                            <Link to='/user/cbo/examinations'>
                            <RaisedButton
                              labelStyle={{color:'white'}}
                                buttonStyle={{backgroundColor:'#2980b9', borderColor:'white'}}
                                label="View"
                              />
                            </Link>
                          </div>
                      </div>
                    </div>
                  </div>
                </Paper>
            </div>
          </div>
          <div className='col-sm-6'>
              <div className='panel-body'>
                <Paper zDepth={3} rounded>
                  <div className='row'>
                    <div className='col-sm-12'>
                      <div style={{padding:10}}>
                        <p className='text-center'>Step 3: <span style={{fontWeight:'600'}}>Centers</span></p>
                          <i className='text-info'>Submit center location. Click on view to begin.</i>
                          <div className='text-center' style={{margin:10}}>
                            <Link to='/user/center/status'>
                            <RaisedButton
                              labelStyle={{color:'white'}}
                                buttonStyle={{backgroundColor:'#2980b9', borderColor:'white'}}
                                label="View"
                              />
                            </Link>
                          </div>
                      </div>
                    </div>
                  </div>
                </Paper>
              </div>
          </div>
          <div className='col-sm-6'>
              <div className='panel-body'>
                <Paper zDepth={3} rounded>
                  <div className='row'>
                    <div className='col-sm-12'>
                      <div style={{padding:10}}>
                        <p className='text-center'>Step 4: <span style={{fontWeight:'600'}}>Payments</span></p>
                          <i className='text-info'>Make payments for submitted center.Click start to begin </i>
                          <div className='text-center' style={{margin:10}}>
                            <Link to='/user/center/payment'>
                            <RaisedButton
                              labelStyle={{color:'white'}}
                                buttonStyle={{backgroundColor:'#2980b9', borderColor:'white'}}
                                label="Start"
                              />
                            </Link>
                          </div>
                      </div>
                    </div>
                  </div>
                </Paper>
              </div>
          </div>

        </div>

      </div>
    )
  }
  render() {
    return (
      <MuiThemeProvider><DashboardHeader children={this.showPageContent()} /></MuiThemeProvider>
    );
  }
}
