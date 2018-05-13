import React, { Component } from 'react'
import '../App.css'
import {Link, Redirect} from 'react-router-dom'
import Paper from 'material-ui/Paper'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DashboardHeader from './Dashboard-header'
import RaisedButton from 'material-ui/RaisedButton'

export default class Dashboard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email:'',
      userId:'',
      loading:true
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
          this.setState({loading:false})
        }
        }).catch(error => {
          this.setState({error:'Information could not be saved',loading:false})
      })
  }
  registerUser () {
    this.setState({submitting:true})
    var url = 'http://localhost:8080/users/exams/'+this.state.userId
    fetch(url).then(response => response.json()).then((user)=>{
        if (!user['status']){
          this.setState({
            examValue:user.examType,
            seriesValue:user.series
        })
        this.retrieveData()
        }
        }).catch(error => {
          this.setState({error:'Network error, could not retrieve info',loading:false})
      })
  }
  retrieveData () {
    var url = 'http://localhost:8080/users/'+this.state.userId
    fetch(url).then(response => response.json()).then((user)=>{
      if (!user['status']){
        this.setState({fullName: user.lastName + ', ' + user.firstName + ' ' + user.middleName})
        this.saveRegistered()
        }
      }).catch(error => {
        this.setState({submitting:false})
        alert(error)
    })
  }
  saveRegistered() {
    var data = {
      id:this.state.userId,
      series:this.state.seriesValue,
      registrationDate:Date.now(),
      fullName:this.state.fullName,
      examType:this.state.examValue
    }
    var url = 'http://localhost:8080/registered/'
    fetch(url, {
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST',
    }).then(response => response.json()).then((user)=>{
        this.updateProgress()
        }).catch(error => {
          this.setState({submitting:false})
          alert(error)
      })
  }
  updateProgress () {
    var data = {
      id:this.state.userId,
      finishedPayements:this.state.finishedPayements,
      finishedPersonal:this.state.finishedPersonal,
      finishedBiometrics:this.state.finishedBiometrics,
      finishedExaminationsDetails:this.state.finishedExaminationsDetails,
      submitted:true
    }
    fetch("http://localhost:8080/progress/"+this.state.userId, {
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json'
      },
      method:'PUT',
    }).then(()=> {
      this.setState({redirect:true})
    }).catch(error => {
          this.setState({error:'Progress not updated',loading:false})
      })
  }
  showSubmitted () {
    return (
      <div className='col-sm-12'>
        <Paper zDepth={2}>
          <div style={{padding:20}}>
            <p className='text-info'>You have successfully submited your application.</p>
            <p className='text-info'>Click View to see registration details</p>
            <Link to='/user/registration/confirmation'>
            <RaisedButton
              labelStyle={{color:'white'}}
                buttonStyle={{backgroundColor:'#2980b9', borderColor:'white'}}
                label="View"
              />
            </Link>
          </div>
        </Paper>

      </div>
    )
  }
  showPageContent () {
    return (
      <div className='col-sm-10 col-sm-offset-1' style={{padding:10}}>
        <p className='lead'>Welcome, {this.state.email}</p>
        {this.state.submitted ? this.showSubmitted() :
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
                        <p className='text-center'>Step 2: <span style={{fontWeight:'600'}}>Biometric Data</span></p>
                          <i className='text-info'>View submitted biometric data, and info about center . Click on view to begin. </i>
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
                        <p className='text-center'>Step 3: <span style={{fontWeight:'600'}}>Examination Details</span></p>
                          <i className='text-info'>Choose your examination type, and location.</i>
                          {this.state.finishedPersonal &&
                          <div className='text-center' style={{margin:10}}>
                            {this.state.finishedExaminationsDetails ?
                              <Link to='/user/exams/details'>
                                <RaisedButton
                                  labelStyle={{color:'white'}}
                                    buttonStyle={{backgroundColor:'#16a085', borderColor:'white'}}
                                    label="Edit"
                                  />
                                </Link>:
                                <Link to='/user/exams/details'>
                                <RaisedButton
                                  labelStyle={{color:'white'}}
                                    buttonStyle={{backgroundColor:'#2980b9', borderColor:'white'}}
                                    label="Start"
                                  />
                                </Link>}
                          </div>
                        }
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
                          {this.state.finishedExaminationsDetails &&
                          <div className='text-center' style={{margin:10}}>
                            {this.state.finishedPayements ?
                              <Link to='/user/exams/payments'>
                            <RaisedButton
                              onClick={()=>localStorage.setItem('finishedPayements', 'true')}
                              labelStyle={{color:'white'}}
                                buttonStyle={{backgroundColor:'#16a085', borderColor:'white'}}
                                label="View"
                              /></Link>:
                            <Link to='/user/exams/payments'>
                            <RaisedButton
                              labelStyle={{color:'white'}}
                                buttonStyle={{backgroundColor:'#2980b9', borderColor:'white'}}
                                label="Start"
                              />
                            </Link>
                          }
                          </div>
                        }
                      </div>
                    </div>
                  </div>
                </Paper>
              </div>
          </div>
        </div>
      }
      {(()=>{
        if (!this.state.submitted && this.state.finishedExaminationsDetails && this.state.finishedPersonal)
        return (
          <div className='col-sm-12 text-center' style={{marginTop:40}}>
            {this.state.submitting ? <RaisedButton
              labelStyle={{color:'white'}}
                buttonStyle={{backgroundColor:'#16a085', borderColor:'white'}}
                label="Loading..."
              /> :
              <RaisedButton
                labelStyle={{color:'white'}}
                  buttonStyle={{backgroundColor:'#16a085', borderColor:'white'}}
                  label="Submit"
                  onClick={()=>this.registerUser()}
                />
              }
          </div>
        )
      })()}
        {this.state.redirect && <Redirect to='/user/registration/confirmation' push />}
      </div>
    )
  }
  render() {
    return (
      <MuiThemeProvider><DashboardHeader children={this.showPageContent()} /></MuiThemeProvider>
    );
  }
}
