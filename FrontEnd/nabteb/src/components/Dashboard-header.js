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
    this.state = {}
  }
  showProfile () {
    return (
      <div className='row'>
        <div className='col-sm-12' style={{height:'500px', overflowX:'scroll'}}>
          <p style={{fontWeight:'600', fontSize:16}}>Edit My Profile <Link to='#' className='pull-right' onClick={()=>this.setState({showProfile:!this.state.showProfile})}><i className="fas fa-times"></i></Link></p>
          <FileReaderInput as="url" id="my-file-input"
            onChange={this.handleFile}>
            {this.state.profilePicture ? <img src={this.state.profilePicture} className='img-thumbnail' style={{width:100, height:100}} />: <img src={require('../images/profile-pic.svg')} className='img-thumbnail' style={{width:50, height:50}} /> }
          </FileReaderInput>
          {this.state.uploading && <span style={{fontSize:10}}>Uploading...{this.state.width}%</span>}
          <form>
            <br/>
              <FormGroup>
                <ControlLabel className="pull-left">First Name</ControlLabel>
                <FormControl
                  className='form-control'
                  placeholder="First Name"
                  value={this.state.firstName}
                  name='firstName'
                  onChange = {this.handleChange}
                />
              </FormGroup>

              <FormGroup>
                <ControlLabel className="pull-left">Middle Name</ControlLabel>
                <FormControl
                  className='form-control'
                  name='middleName'
                  value={this.state.middleName}
                  placeholder="Middle Name"
                  onChange = {this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <ControlLabel className="pull-left">Last Name</ControlLabel>
                <FormControl
                  className='form-control'
                  name='lastName'
                  value={this.state.lastName}
                  placeholder="Last Name"
                  onChange = {this.handleChange}
                />
              </FormGroup>
              <FormGroup controlId="formControlsSelect">
                <ControlLabel className="pull-left">Gender</ControlLabel>
                <FormControl name='gender' onChange={this.handleChange} value={this.state.gender} componentClass="select" placeholder="select">
                  <option value="select">Choose One</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </FormControl>
              </FormGroup>
              <FormGroup>
                <ControlLabel className="pull-left">Address/Location</ControlLabel>
                <FormControl
                  className='form-control'
                  name='address'
                  value={this.state.address}
                  placeholder="Address/Location"
                  onChange = {this.handleChange}
                />
              </FormGroup>
              <FormGroup controlId="formControlsSelect2">
                <ControlLabel className="pull-left">State</ControlLabel>
                <FormControl name='state' onChange={this.handleChange} value={this.state.state} componentClass="select" placeholder="select">
                  <option value="select">Choose One</option>
                  <option value="akwa-ibom">Akwa-Ibom</option>
                  <option value="bayelsa">Bayelsa</option>
                  <option value="cross river">Cross River</option>
                  <option value="delta">Delta</option>
                  <option value="river state">River State</option>
                </FormControl>
              </FormGroup>
              <FormGroup>
                <ControlLabel className="pull-left">Phone</ControlLabel>
                <FormControl
                  className='form-control'
                  name='phone'
                  value={this.state.phone}
                  placeholder="Phone"
                  onChange = {this.handleChange}
                />
              </FormGroup>
            </form>
        </div>
      </div>
    )
  }
  render() {
    return (
      <div >
        <div className='col-md-12 cols-sm-12' style={{fontSize:15}}>
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
