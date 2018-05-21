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
import {nigeria} from './states'
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
      userId:'',
      stateValue:'',
      lgaValue:'',
      states:[],
      locals:[],
      default:'',
      middleName:'',
      url:'',
      user:''
    }
  }
  async componentWillMount () {
    var userId = await localStorage.getItem('userId')
    var states = []
    nigeria.forEach((st)=>{states.push(st.state.name)})
    this.setState({userId, states})
    this.retrieveInfo(userId)
    var url = ""
    var user = ''
    if (this.props.owner){
      url="/user/cbo"
    }else
    {
      url="/dashboard"
      user='candidate'
    }
      this.setState({url})
  }
  retrieveInfo (userId) {
    var url = 'http://localhost:8080/users/'+userId
    fetch(url).then(response => response.json()).then((user)=>{
        if (!user['status']){
          this.setState(user)
          this.setState({dob: new Date(user.dob), uploaded:true, profilePicture:user.passport, stateValue:user.state, lgaValue:user.lga, default:user.lga})
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
  handleSelectState = (event, index, value) => {
    var state = nigeria.filter((current)=> current.state.id === index)
    this.setState({stateValue:value, stateIndex:index, locals:state[0].state.locals, lgaValue:'', default:''})
  }
  handleSelectLGA = (event, index, value) => {
    this.setState({lgaValue:value})
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
    if (this.authenticateData()){
        this.createUser()
    }else{
      this.setState({error:'All fields are required. Check, and try again',loading:false})
    }

  }
  authenticateData () {
    return this.state.userId !== null && this.state.firstName !== null  && this.state.kinFullName !== null
    && this.state.middleName !== null && this.state.lastName !== null && this.state.kinAddress !== null
    && this.state.phoneNumber !== null && this.state.gender !== null && this.state.lgaValue !== null
    && this.state.dob !== null &&  this.state.address !== null && this.state.stateValue !== null
    && this.state.kinPhoneNumber !== null && this.state.profilePicture !== null
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
      state:this.state.stateValue,
      lga:this.state.lgaValue
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
  updateUser () {
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
      state:this.state.stateValue,
      lga:this.state.lgaValue
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
  handleUpdate (event) {
    event.preventDefault()
    if (this.authenticateData()){
        this.updateUser()
    }else{
      this.setState({error:'All fields are required. Check, and try again',loading:false})
    }
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
                      <MenuItem value='Male'  primaryText='Male' />
                      <MenuItem value='Female'  primaryText='Female' />
                    </SelectField>
                    <DatePicker value={this.state.dob} onChange={this.handleDateChanged} fullWidth hintText="Date of Birth" container="inline" />
                    <SelectField
                      value={this.state.stateValue}
                      onChange={this.handleSelectState}
                      maxHeight={200}
                      fullWidth
                      >
                    <MenuItem value={''} primaryText="Choose State" />
                    {this.state.states.map((name, key)=>
                      <MenuItem key={key} value={name} primaryText={name} />
                    )}
                  </SelectField>
                  <SelectField
                    value={this.state.lgaValue}
                    onChange={this.handleSelectLGA}
                    maxHeight={200}
                    fullWidth
                    >
                      {this.state.default !=='' ?
                      <MenuItem value={this.state.default} primaryText={this.state.default} />
                      :
                      <MenuItem value={this.state.default} primaryText="Choose LGA" />}

                    {this.state.locals.map((local, key)=>
                      <MenuItem key={key} value={local.name} primaryText={local.name} />
                    )}
                  </SelectField>
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
                      <Link to={this.state.url}>
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
          {this.state.redirect && <Redirect to={this.state.url} push />}
        </Paper>
      </div>
    )
  }
  render() {
    return (
      <MuiThemeProvider><DashboardHeader user={this.props.owner ? 'cbo' : 'candidate'} materials={this.props.owner} children={this.showPageContent()} /></MuiThemeProvider>
    );
  }
}
