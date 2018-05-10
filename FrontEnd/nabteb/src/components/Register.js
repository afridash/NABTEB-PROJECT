import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton'
import { Link,Redirect, } from 'react-router-dom'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import '../App.css';
const styles = {
  button:{
    float:'right',
    margin:5,
    padding:10
  },
  box:{
      boxShadow: '5px 5px 5px #888888',
    backgroundColor:'white',
  },
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  floatingLabelFocusStyle: {
    color: 'green',
  },
};
export default class Register extends Component {
  constructor (props) {
    super(props)
      this.state = {
        email: '',
        password: '',
        error: '',
        redirect:false,
        selected:''
      }
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }
  createUser () {
    var url = 'http://localhost:8080/users/create'
    var data = {
      id:0,
      email:this.state.email,
      password:this.state.password,
      user_type:this.state.selected,
      created_at: Date.now(),
      verified:false,
      pin:''
    }
    fetch(url, {
    body: JSON.stringify(data), // must match 'Content-Type' header
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
  }).then(response => response.json()).then((user)=>{
    this.setState({redirect:true, userId:user['id']})
  }).catch(error => {
    this.setState({error:'Account creation encountered an error',loading:false})
  })
  }
  handleSubmit (event) {
    event.preventDefault()
    this.setState({loading:true})
    if (this.verifyInputs()) {
      if (this.verifyPasswords()){
        this.createUser()
      }else{
        this.setState({error:'Passwords do not match',loading:false})
      }
    }else{
      this.setState({error:'All fields are required',loading:false})
    }
  }
  verifyInputs () {
    return this.state.email !== '' && this.state.password !== '' && this.passwordConfirm !=='' && this.state.selected !== ''
  }
  verifyPasswords () {
    return this.state.password === this.state.passwordConfirm
  }
  handleSelect = (event, index, value) => {
    this.setState({selected:value, selectedIndex:index})
  }
  render() {
    return (
      <div className="App">
        <div  className="container">
          <div className="row" >
            <br/>

              <br/>
              <div className='col-sm-6 col-sm-offset-3'>
                <Paper zDepth={3}>
                  <div className='row'>
                    <form>
                      <div className='col-sm-10 col-sm-offset-1' style={{padding:10}}>
                        <h3 className='text-center'>Register</h3>
                        <br/>
                        <p style={{color:'red'}}>{this.state.error}</p>
                        <TextField
                          hintText="Enter Email"
                          fullWidth={true}
                          name='email'
                          floatingLabelText="Email"
                          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                          className='text-center'
                          underlineFocusStyle={{borderColor: '#16a085'}}
                          onChange = {this.handleChange}
                        />
                        <TextField
                          type="password"
                          fullWidth={true}
                          name='password'
                          hintText="Enter Password"
                          floatingLabelText="Password"
                          className='text-center'
                          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                          underlineFocusStyle={{borderColor: '#16a085'}}
                          onChange = {this.handleChange}
                        />
                        <TextField
                          type="password"
                          fullWidth={true}
                          name='passwordConfirm'
                          hintText="Enter Password"
                          floatingLabelText="Confirm Password"
                          className='text-center'
                          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                          underlineFocusStyle={{borderColor: '#16a085'}}
                          onChange = {this.handleChange}
                        />
                        <SelectField
                          value={this.state.selected}
                          onChange={this.handleSelect}
                          fullWidth
                          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                          name='selected'
                          maxHeight={200}
                          >
                            <MenuItem value=''  primaryText={'Choose Account Type'} />
                            <MenuItem value='candidate'  primaryText='Candidate' />
                            <MenuItem value='scholar'  primaryText='Associate Scholar' />
                            <MenuItem value='center_owner'  primaryText='Center Owner' />
                          </SelectField>
                            {this.state.loading ? <RaisedButton
                              labelStyle={{color:'white'}}
                                buttonStyle={{backgroundColor:'#1abc9c', borderColor:'white'}}
                                className='pull-right'
                                label="Registering..."
                              /> : <RaisedButton
                                className='pull-right'
                                  labelStyle={{color:'white'}}
                                  buttonStyle={{backgroundColor:'#16a085', borderColor:'white'}}
                                  label="Register"
                                  type="submit"
                                  onClick={(event) =>
                                  this.handleSubmit(event)}
                                />}
                      </div>
                      </form>
                  </div>

                </Paper>
              </div>
            </div>
        </div>
        {this.state.redirect && <Redirect to={'/account/confirm/'+this.state.userId} push />}
      </div>
    );
  }
}
