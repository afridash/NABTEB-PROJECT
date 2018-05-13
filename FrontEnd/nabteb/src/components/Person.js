import React, { Component } from 'react'
import '../App.css'
import {Link, Redirect} from 'react-router-dom'
import Paper from 'material-ui/Paper'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DashboardHeader from './Dashboard-header'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'
import DatePicker from 'material-ui/DatePicker'
import FileReaderInput from 'react-file-reader-input'

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  labelStyle: {
    color: 'white',
  },
  floatingLabelStyle: {
    color: 'white',
  },
  floatingLabelFocusStyle: {
    color: '#16a085',
  },
};
export default class Person extends Component {
  constructor (props) {
    super(props)
    this.state = {
      gender:'',
      userId:''
    }
  }
  async componentWillMount () {
    var userId = await localStorage.getItem('userId')
    this.setState({userId})
    this.retrieveInfo(userId)
  }
  retrieveInfo (userId) {
    var url = 'http://localhost:8080/users/'+userId
    fetch(url).then(response => response.json()).then((user)=>{
        if (!user['status']){
          this.setState(user)
          this.setState({dob: new Date(user.dob), uploaded:true, profilePicture:user.passport})
        }
        }).catch(error => {
          this.setState({error:'Information could not be saved',loading:false})
      })

      fetch('http://localhost:8080/progress/'+userId).then(response => response.json()).then((user)=>{
          if (!user['status']){
            this.setState(user)
          }
          }).catch(error => {
            this.setState({error:'Information could not be saved',loading:false})
        })
  }
  handleSelect = (event, index, value) => {
    this.setState({gender:value, selectedIndex:index})
  }
  handleFile = (e, results) => {
    results.forEach(result => {
      const [e, file] = result; //Retrieve the picture that was selected
      this.setState({profilePicture:e.target.result,mime:file.type}) //Store the picture as a state variable before trying to save
    });
  }
  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }
  handleDateChanged = (n, date)=> {
    this.setState({dob:date})
  }
  handleSubmit (event) {
    event.preventDefault()
    this.createUser()
  }
  createUser () {
    var data={
      id:this.state.userId,
      firstName:this.state.firstName,
      middleName:this.state.middleName,
      lastName:this.state.lastName,
      phoneNumber:this.state.phoneNumber,
      gender:this.state.gender,
      dob:this.state.dob,
      address:this.state.address,
      kinFullName:this.state.kinFullName,
      kinAddress:this.state.kinAddress,
      kinPhoneNumber:this.state.kinPhoneNumber,
      passport:this.state.profilePicture,
    }
    var url = 'http://localhost:8080/users'
    fetch(url, {
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST',
      }).then(response => response.json()).then((user)=>{
        this.updateProgress()
        }).catch(error => {
          this.setState({error:'Information could not be saved',loading:false})
      })
  }
  updateProgress () {
    var data = {
      id:this.state.userId,
      finishedPayements:this.state.finishedPayements,
      finishedPersonal:true,
      finishedBiometrics:this.state.finishedBiometrics,
      finishedExaminationsDetails:this.state.finishedExaminationsDetails,
      submitted:this.state.submitted
    }
    fetch("http://localhost:8080/progress/"+this.state.userId, {
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json'
      },
      method:'PUT',
     }).then(()=> {
       localStorage.setItem('fullName', this.state.lastName + ' ' + this.state.firstName)
       localStorage.setItem('phoneNumber', this.state.phoneNumber)
      alert("Personal Data Successfully Updated")
      this.setState({redirect:true})
     }).catch(error => {
      this.setState({error:'Progress not updated',loading:false})
    })

  }
  handleUpdate (event) {
    event.preventDefault()
    var data={
      id:this.state.userId,
      firstName:this.state.firstName,
      middleName:this.state.middleName,
      lastName:this.state.lastName,
      phoneNumber:this.state.phoneNumber,
      gender:this.state.gender,
      dob:this.state.dob,
      address:this.state.address,
      kinFullName:this.state.kinFullName,
      kinAddress:this.state.kinAddress,
      kinPhoneNumber:this.state.kinPhoneNumber,
      passport:this.state.profilePicture
    }
    var url = 'http://localhost:8080/users/'+this.state.userId
    fetch(url, {
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json'
      },
      method: 'PUT',
      }).then(response => response.json()).then((user)=>{
        this.updateProgress()
        }).catch(error => {
          this.setState({error:'Information could not be saved',loading:false})
      })
  }
  showPageContent () {
    return (
      <div className='col-sm-10 col-sm-offset-1' style={{padding:10}}>
        <Paper zDepth={2}>
          <div className='row'>
            <div className='col-sm-12'>
              <form >
                <div className='col-sm-8 col-sm-offset-2' style={{padding:10}}>
                  <h3 className='text-center text-info'>Candidate Info</h3>
                  <div className='text-center'>
                    <FileReaderInput as="url" id="my-file-input"
                      onChange={this.handleFile}>
                      {this.state.profilePicture ? <img src={this.state.profilePicture} className='img-thumbnail' style={{width:100, height:100}} />: <img src={require('../images/profile-pic.svg')} className='img-thumbnail' style={{width:60, height:60}} /> }
                    </FileReaderInput>
                    {this.state.uploading && <span style={{fontSize:10}}>Uploading...{this.state.width}%</span>}
                  </div>

                  <TextField
                  type='text'
                  hintText="First Name"
                  fullWidth={true}
                  name='firstName'
                  floatingLabelText="First Name"
                  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                  underlineFocusStyle={{borderColor: '#16a085'}}
                  onChange={this.handleChange}
                  value={this.state.firstName}
                  />
                  <TextField
                  type='text'
                  hintText="Middle Name"
                  fullWidth={true}
                  name='middleName'
                  floatingLabelText="Middle Name"
                  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                  underlineFocusStyle={{borderColor: '#16a085'}}
                  onChange={this.handleChange}
                  value={this.state.middleName}
                  />
                  <TextField
                  type='text'
                  hintText="Surname"
                  fullWidth={true}
                  name='lastName'
                  floatingLabelText="Surname"
                  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                  underlineFocusStyle={{borderColor: '#16a085'}}
                  onChange={this.handleChange}
                  value={this.state.lastName}
                  />
                  <TextField
                  type='text'
                  hintText="Phone"
                  fullWidth={true}
                  name='phoneNumber'
                  floatingLabelText="Phone Number"
                  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                  underlineFocusStyle={{borderColor: '#16a085'}}
                  onChange={this.handleChange}
                  value={this.state.phoneNumber}
                  />
                  <SelectField
                    value={this.state.gender}
                    onChange={this.handleSelect}
                    fullWidth
                    floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                    name='gender'
                    maxHeight={200}
                    >
                      <MenuItem value=''  primaryText={'Choose Gender'} />
                      <MenuItem value='male'  primaryText='Male' />
                      <MenuItem value='female'  primaryText='Female' />
                    </SelectField>
                    <DatePicker value={this.state.dob} onChange={this.handleDateChanged} fullWidth hintText="Date of Birth" container="inline" />
                    <TextField
                    type='text'
                    hintText="Address"
                    fullWidth={true}
                    name='address'
                    value={this.state.address}
                    floatingLabelText="Address"
                    floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                    underlineFocusStyle={{borderColor: '#16a085'}}
                    onChange={this.handleChange}
                    />
                    <h3 className='text-center text-info'>Next of kin Contact Info</h3>
                    <TextField
                    type='text'
                    hintText="Full Name"
                    fullWidth={true}
                    name='kinFullName'
                    floatingLabelText="Full Name"
                    floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                    underlineFocusStyle={{borderColor: '#16a085'}}
                    onChange={this.handleChange}
                    value={this.state.kinFullName}
                    />
                    <TextField
                    type='text'
                    hintText="Enter Address"
                    fullWidth={true}
                    name='kinAddress'
                    floatingLabelText="Address"
                    floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                    underlineFocusStyle={{borderColor: '#16a085'}}
                    onChange={this.handleChange}
                    value={this.state.kinAddress}
                    />
                    <TextField
                    type='text'
                    hintText="Phone"
                    fullWidth={true}
                    name='kinPhoneNumber'
                    floatingLabelText="Phone Number"
                    floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                    underlineFocusStyle={{borderColor: '#16a085'}}
                    onChange={this.handleChange}
                    value={this.state.kinPhoneNumber}
                    />
                </div>
                <div className='col-sm-12'>
                  <p className='text-danger text-center'>{this.state.error}</p>
                  <div style={{margin:10}} className='text-center'>
                    {this.state.uploaded ? <RaisedButton
                      labelStyle={{color:'white'}}
                      buttonStyle={{backgroundColor:'#16a085', borderColor:'white'}}
                      label="Update"
                      type='submit'
                      onClick={(event) =>
                      this.handleUpdate(event)}
                    /> :
                      <RaisedButton
                        labelStyle={{color:'white'}}
                        buttonStyle={{backgroundColor:'#16a085', borderColor:'white'}}
                        label="Save"
                        type='submit'
                        onClick={(event) =>
                        this.handleSubmit(event)}
                        />
                      }
                      &nbsp;&nbsp;
                      <Link to='/dashboard'>
                      <RaisedButton
                        labelStyle={{color:'white'}}
                        buttonStyle={{backgroundColor:'#e74c3c', borderColor:'white'}}
                        label="Close"
                      />
                      </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {this.state.redirect && <Redirect to={'/dashboard'} push />}
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
