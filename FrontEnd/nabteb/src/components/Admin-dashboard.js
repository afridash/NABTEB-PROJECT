import React, { Component } from 'react'
import '../App.css'
import {Link} from 'react-router-dom'
import Paper from 'material-ui/Paper'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DashboardHeader from './Dashboard-header'
import RaisedButton from 'material-ui/RaisedButton'

export default class AdminDashboard extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  showPageContent () {
    return (
      <div className='col-sm-10 col-sm-offset-1' style={{padding:10}}>
        <p className='lead'></p>
        <div className='col-sm-12'>
          <div className='col-sm-6'>
              <div className='panel-body'>
                <Paper zDepth={3} rounded>
                  <div className='row'>
                    <div className='col-sm-12'>
                      <div style={{padding:10}}>
                        <p className='text-center'><span style={{fontWeight:'600'}}>Exam Series</span></p>
                          <i className='text-info'>View, edit, and add a new examination Series. Click start to begin </i>
                          <div className='text-center' style={{margin:10}}>
                            <Link to='/user/admin/series'>
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
                        <p className='text-center'><span style={{fontWeight:'600'}}>Examination Centers</span></p>
                          <i className='text-info'>Approve and reject examination centers. Click View to begin </i>
                          <div className='text-center' style={{margin:10}}>
                            <Link to='/user/admin/centers'>
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
        </div>

          <div className='col-sm-12'>
           <div className='col-sm-6'>
              <div className='panel-body'>
                <Paper zDepth={3} rounded>
                  <div className='row'>
                    <div className='col-sm-12'>
                      <div style={{padding:10}}>
                        <p className='text-center'><span style={{fontWeight:'600'}}>Scholars</span></p>
                          <i className='text-info'>Approve, View and reject Scholars. Click View to begin </i>
                          <div className='text-center' style={{margin:10}}>
                            <Link to='/user/admin/scholars'>
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
                        <p className='text-center'><span style={{fontWeight:'600'}}>Materials</span></p>
                          <i className='text-info'>Add examination Materials for programs for students .Click on View to begin.</i>
                          <div className='text-center' style={{margin:10}}>
                            <Link to='/user/admin/programs'>
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
        </div>
          {/* Add a button when you get to Registered candidate to upload their result */}
        <div className='col-sm-12'>
         <div className='col-sm-6'>
            <div className='panel-body'>
              <Paper zDepth={3} rounded>
                <div className='row'>
                  <div className='col-sm-12'>
                    <div style={{padding:10}}>
                      <p className='text-center'><span style={{fontWeight:'600'}}>Result</span></p>
                        <i className='text-info'>Upload student's examination result here. Click Start to begin </i>
                        <div className='text-center' style={{margin:10}}>
                          <Link to='/user/admin/series'>
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
                      <p className='text-center'><span style={{fontWeight:'600'}}>Payments</span></p>
                        <i className='text-info'>View payments from both centers and candidates .Click on View to begin.</i>
                        <div className='text-center' style={{margin:10}}>
                          <Link to='/user/admin/payment'>
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
