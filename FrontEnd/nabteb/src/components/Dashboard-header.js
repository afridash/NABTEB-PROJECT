import React, { Component } from 'react'
import '../App.css'
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap"
import {Link} from 'react-router-dom'
import FileReaderInput from 'react-file-reader-input'
const styles = {
  button:{margin: 15},
  box:{
    boxShadow: '5px 5px 5px #888888',
  },
}

export default class DashboardHeader extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showProfile:false
    }
  }
  showProfile () {
    return (
      <div className='row'>
        <div className='col-sm-12' style={{height:'500px', overflowX:'scroll'}}>
          <p className='text-center' style={{fontWeight:'600', fontSize:16}}>My Profile <Link to='#' className='pull-right' onClick={()=>this.setState({showProfile:!this.state.showProfile})}><i className="fas fa-times"></i></Link></p>
          <form>
            <br/>
            <div>
              <p style={{fontWeight:'600'}}>Name</p>
              <p> Igbiriki, Richard Imorobebh</p>
            </div>
            <div>
              <p style={{fontWeight:'600'}}>Gender</p>
              <p> Male</p>
            </div>

            <div>
              <p style={{fontWeight:'600'}}>Address/Location</p>
              <p>Azikoro Village, Yenagoa</p>
            </div>
            <div>
              <p style={{fontWeight:'600'}}>State</p>
              <p> Bayelsa</p>
            </div>
            <div>
              <p style={{fontWeight:'600'}}>Phone</p>
              <p>+(234) 700 234 5678</p>
            </div>
            </form>
        </div>
      </div>
    )
  }
  render() {
    return (
      <div >
        <div className='col-md-12 cols-sm-12' style={{fontSize:15, marginTop:-20}}>
          <div className='row'>
            <div style={{backgroundColor:'#16a085'}}>
              <div className='panel-body'>
                <div className='col-sm-7'>
                  <Link style={{textDecoration:'none'}} to='/dashboard'>
                    <h5 className='lead' style={{color:'white'}}>Dashboard</h5>
                  </Link>
                </div>
                <div className='col-sm-5 text-center'>
                    <div className='row'>
                      <div className='col-sm-3'>
                      </div>
                      <Link style={{textDecoration:'none', color:'white'}} to='/user/materials' className='col-sm-3'>
                        <img src={require('../images/connect-icon.svg')} style={{height:20, width:20}} />
                        <h5 >Materials</h5>
                      </Link>
                      <Link style={{textDecoration:'none', color:'white'}} to='/user/results' className='col-sm-3'>
                        <img src={require('../images/report.svg')} style={{height:20, width:20, color:'red' }}  />
                        <h5 >Results</h5>
                      </Link>
                      <div onClick={()=>this.setState({showProfile:!this.state.showProfile,})} className='col-sm-3' >
                        <Link to='#' style={{textDecoration:'none', color:'white'}} className='column'>
                          <img src={require('../images/profile-view.svg')} style={{height:20, width:20}}  />
                        <h5>Profile</h5>
                      </Link>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={this.state.showProfile ? 'col-sm-8' : 'row'}>
            {this.props.children}
          </div>
          {this.state.showProfile && <div className='col-sm-4' style={{backgroundColor:'#FAFAFA',}}>
          {this.showProfile()}
          </div>}
        </div>
      </div>
    );
  }
}
