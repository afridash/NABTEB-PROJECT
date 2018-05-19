import React, { Component } from 'react'
import '../App.css'
import {Link, Redirect} from 'react-router-dom'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
const styles = {
  floatingLabelFocusStyle: {
    color: 'green',
  }
}

export default class DashboardHeader extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showProfile:false,
      email:'',
      oldPassword:'',
      newPassword:'',
      userId:'',
      url:''
    }
  }
  async componentWillMount () {
    var email = await localStorage.getItem('email')
    var userId = await localStorage.getItem('userId')
    if (email === null || email === undefined || !email) this.setState({redirect:true})
    else {
      this.setState({email, userId})
      if (!this.props.materials) {
        this.retrieveData(userId)
      }
    }
  }
  componentDidMount () {
    var url = ''
    if (this.props.user === 'cbo')
    url = '/user/cbo'
    else if (this.props.user === 'admin')
    url = '/user/admin/dashboard'
    else url = '/dashboard'
    this.setState({url})
  }
  retrieveData (userId) {
    var url = 'http://localhost:8080/users/'+userId
    fetch(url).then(response => response.json()).then((user)=>{
      if (!user['status']){
        this.setState(user)
        }
      }).catch(error => {
        alert(error)
    })
  }
  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }
  handleSubmit (event) {
    event.preventDefault()
    this.setState({loading:true})
    if (this.state.oldPassword !== '' && this.state.newPassword !== '') {
      fetch("http://localhost:8080/change_password/"+this.state.email+'/'+this.state.oldPassword+'/'+this.state.newPassword).then(response => response.json()).then(data => {
        if (data['changed'])
        this.setState({message:"Password changed successfully", loading:false, oldPassword:'', newPassword:''})
        else this.setState({message:"Password could not be changed", loading:false})
      }).catch(error => {
        this.setState({message:'Password could not be changed', loading:false})
      })
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
              <p> {this.state.lastName}, {this.state.firstName} {this.state.middleName}</p>
            </div>
            <div>
              <p style={{fontWeight:'600'}}>Gender</p>
              <p> {this.state.gender}</p>
            </div>

            <div>
              <p style={{fontWeight:'600'}}>State</p>
              <p> {this.state.state}</p>
            </div>

            <div>
              <p style={{fontWeight:'600'}}>LGA</p>
              <p> {this.state.lga}</p>
            </div>

            <div>
              <p style={{fontWeight:'600'}}>Address/Location</p>
              <p>{this.state.address}</p>
            </div>
            <div>
              <p style={{fontWeight:'600'}}>Phone</p>
              <p>{this.state.phoneNumber}</p>
            </div>
            <div>
              <p style={{fontWeight:'600'}}>Change Password</p>
              <span className='text-info'>{this.state.message}</span>
              <TextField
                type="password"
                fullWidth={true}
                name='oldPassword'
                hintText="Enter Password"
                floatingLabelText="Old Password"
                className='text-center'
                floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                underlineFocusStyle={{borderColor: '#16a085'}}
                onChange={this.handleChange}
                value={this.state.oldPassword}
              />
              <TextField
                type="password"
                fullWidth={true}
                name='newPassword'
                hintText="Enter Password"
                floatingLabelText="New Password"
                className='text-center'
                floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                underlineFocusStyle={{borderColor: '#16a085'}}
                onChange={this.handleChange}
                value={this.state.newPassword}
              />
              {this.state.loading ? <RaisedButton
                labelStyle={{color:'white'}}
                  buttonStyle={{backgroundColor:'#1abc9c', borderColor:'white'}}
                  className='pull-right'
                  label="Verifying..."
                /> : <RaisedButton
                  className='pull-right'
                    labelStyle={{color:'white'}}
                    buttonStyle={{backgroundColor:'#16a085', borderColor:'white'}}
                    label="Change"
                    type="submit"
                    onClick={(event) =>
                    this.handleSubmit(event)}
                  />}
            </div>
            </form>
        </div>
      </div>
    )
  }
  logOut () {
    localStorage.removeItem('email')
    localStorage.removeItem('userId')
    this.setState({redirect:true})
  }
  render() {
    return (
      <div >
        <div className='col-md-12 cols-sm-12' style={{fontSize:15, marginTop:-20}}>
          <div className='row'>
            <div style={{backgroundColor:'#16a085'}}>
              <div className='panel-body'>
                <div className='col-sm-7'>
                  <Link style={{textDecoration:'none'}} to={this.state.url}>
                    <h5 className='lead' style={{color:'white'}}>Dashboard</h5>
                  </Link>
                </div>
                <div className='col-sm-5 text-center'>
                    <div className='row'>
                      {!this.props.materials &&
                      <Link style={{textDecoration:'none', color:'white'}} to='/user/materials' className='col-sm-3'>
                        <img src={require('../images/connect-icon.svg')} style={{height:20, width:20}} />
                        <h5 >Materials</h5>
                      </Link>
                    }
                    {!this.props.materials &&
                      <Link style={{textDecoration:'none', color:'white'}} to='/user/results' className='col-sm-3'>
                        <img src={require('../images/report.svg')} style={{height:20, width:20, color:'red' }}  />
                        <h5 >Results</h5>
                      </Link>
                    }
                    {!this.props.materials &&
                      <div onClick={()=>this.setState({showProfile:!this.state.showProfile,})} className='col-sm-3' >
                        <Link to='#' style={{textDecoration:'none', color:'white'}} className='column'>
                          <img src={require('../images/profile-view.svg')} style={{height:20, width:20}}  />
                        <h5>Profile</h5>
                      </Link>
                      </div>
                    }
                      <div className='col-sm-3 pull-right'>
                        <h5 style={{color:'white', cursor:'pointer'}} onClick={()=>this.logOut()}>Logout</h5>
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
        {this.state.redirect && <Redirect to={'/login'} push />}
      </div>
    );
  }
}
