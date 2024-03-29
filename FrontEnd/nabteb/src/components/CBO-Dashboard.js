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
    this.state = {
      userId:'',
      email:''
    }
  }
  async componentWillMount () {
    var userId = await localStorage.getItem('userId')
    var email = await localStorage.getItem('email')
    this.setState({userId, email})
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
  showPageContent () {
    return (
      <div className='col-sm-10 col-sm-offset-1' style={{padding:10}}>
        <p className='lead'>Welcome, {this.state.email}</p>
        <div className='col-sm-12'>
          <div className='col-sm-6'>
              <div className='panel-body'>
                <Paper zDepth={3} rounded>
                  <div className='row'>
                    <div className='col-sm-12'>
                      <div style={{padding:10}}>
                        <p className='text-center'><span style={{fontWeight:'600'}}>Personal Data</span></p>
                          <i className='text-info'>Submit personal data such as name, and address.</i>
                          <div className='text-center' style={{margin:10}}>
                            {this.state.finishedPersonal ? <Link to='/user/cbo/details'>
                            <RaisedButton
                              labelStyle={{color:'white'}}
                                buttonStyle={{backgroundColor:'#16a085', borderColor:'white'}}
                                label="Edit"
                              />
                            </Link>:
                            <Link to='/user/cbo/details'>
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
                        <p className='text-center'><span style={{fontWeight:'600'}}>Centers</span></p>
                          <i className='text-info'>View approved centers. Add new centers.</i>
                            <div className='text-center' style={{margin:10}}>
                             {this.state.finishedPersonal ?
                            <Link to='/user/center/status'>
                            <RaisedButton
                              labelStyle={{color:'white'}}
                                buttonStyle={{backgroundColor:'#2980b9', borderColor:'white'}}
                                label="View"
                              />
                            </Link> :
                            <RaisedButton
                              labelStyle={{color:'white'}}
                                buttonStyle={{backgroundColor:'#2980b9', borderColor:'white'}}
                                label="Not Started"
                              />
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
                        <p className='text-center'><span style={{fontWeight:'600'}}>Examination </span></p>
                          <i className='text-info'>View your examination series, centers and candidates registered.</i>
                            <div className='text-center' style={{margin:10}}>
                            {this.state.finishedPersonal ?
                              <Link to='/user/cbo/examinations'>
                            <RaisedButton
                              labelStyle={{color:'white'}}
                                buttonStyle={{backgroundColor:'#2980b9', borderColor:'white'}}
                                label="View"
                              />
                            </Link> :
                            <RaisedButton
                              labelStyle={{color:'white'}}
                                buttonStyle={{backgroundColor:'#2980b9', borderColor:'white'}}
                                label="Not Started"
                              />
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
                        <p className='text-center'><span style={{fontWeight:'600'}}>Payments</span></p>
                          <i className='text-info'>View submitted centers,make payments for centers.Click start to begin </i>
                         <div className='text-center' style={{margin:10}}>
                             {this.state.finishedPersonal ?
                            <Link to='/user/center/payment'>
                            <RaisedButton
                              labelStyle={{color:'white'}}
                                buttonStyle={{backgroundColor:'#2980b9', borderColor:'white'}}
                                label="Start"
                              />
                            </Link> :
                            <RaisedButton
                              labelStyle={{color:'white'}}
                                buttonStyle={{backgroundColor:'#2980b9', borderColor:'white'}}
                                label="Not Started"
                              />
                          }
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
      <MuiThemeProvider><DashboardHeader user="cbo" materials={true} children={this.showPageContent()} /></MuiThemeProvider>
    );
  }
}
