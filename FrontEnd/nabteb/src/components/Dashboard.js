import React, { Component } from 'react'
import '../App.css'
import {Link} from 'react-router-dom'
import Paper from 'material-ui/Paper'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DashboardHeader from './Dashboard-header'
import RaisedButton from 'material-ui/RaisedButton'

export default class Dashboard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email:'',
      userId:''
    }
  }
  async componentWillMount () {
    var email = await localStorage.getItem('email')
    var userId = await localStorage.getItem('userId')
    this.setState({email, userId})
    this.retrieveInfo(userId)
  }
  retrieveInfo (userId) {
    var url = 'http://localhost:8080/progress/'+userId
    fetch(url).then(response => response.json()).then((user)=>{
        if (!user['status']){
          this.setState(user)
        }
        }).catch(error => {
          this.setState({error:'Information could not be saved',loading:false})
      })
  }
  showPageContent () {
    return (
      <div className='col-sm-10 col-sm-offset-1' style={{padding:10}}>
        <p className='lead'>Welcome, {this.state.email}</p>
        <div className='col-sm-12'>
          <p className='text-info text-center'>Fill out the different sections to complete registration. Biometrics must be submited through a verified registration center.</p>
          <div className='col-sm-6'>
              <div className='panel-body'>
                <Paper zDepth={3} rounded>
                  <div className='row'>
                    <div className='col-sm-12'>
                      <div style={{padding:10}}>
                        <p className='text-center'>Step 1: <span style={{fontWeight:'600'}}>Personal Data</span></p>
                          <i className='text-info'>Submit personal data such as name, and address. Click on start to begin.</i>
                          <div className='text-center' style={{margin:10}}>
                            {this.state.finishedPersonal ? <Link to='/user/details'>
                            <RaisedButton
                              labelStyle={{color:'white'}}
                                buttonStyle={{backgroundColor:'#16a085', borderColor:'white'}}
                                label="Edit"
                              />
                            </Link>:
                            <Link to='/user/details'>
                            <RaisedButton
                              labelStyle={{color:'white'}}
                                buttonStyle={{backgroundColor:'#2980b9', borderColor:'white'}}
                                label="Start"
                              />
                            </Link>
                          }
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
                        <p className='text-center'>Step 2: <span style={{fontWeight:'600'}}>Examination Details</span></p>
                          <i className='text-info'>Choose your examination type, and location. Click on start to begin.</i>
                          <div className='text-center' style={{margin:10}}>
                            <Link to='/user/exams/details'>
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
                        <p className='text-center'>Step 3: <span style={{fontWeight:'600'}}>Biometric Data</span></p>
                          <i className='text-info'>View biometric data status. Click on view to begin.</i>
                          <div className='text-center' style={{margin:10}}>
                            <Link to='/user/biometrics'>
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
                          <i className='text-info'>Make payments for selected examination. </i>
                          <div className='text-center' style={{margin:10}}>
                            <Link to='/user/exams/payments'>
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
        <div className='col-sm-12 text-center' style={{marginTop:40}}>
          <Link to='/user/registration/confirmation'>
            <RaisedButton
              labelStyle={{color:'white'}}
                buttonStyle={{backgroundColor:'#16a085', borderColor:'white'}}
                label="Proceed"
              />
          </Link>

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
