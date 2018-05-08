import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton'
import { Link,Redirect, } from 'react-router-dom'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
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
      }
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }
  handleSubmit (event) {
    event.preventDefault()
    this.setState({loading:true})
    if (this.verifyPasswords()) {
      alert("Logging In")
      this.setState({redirect:true})
    }else{
      this.setState({error:'Email/Password Cannot be Empty',loading:false})
    }
  }
  verifyPasswords () {
    return this.state.email !== '' && this.state.password !== ''
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
                          name='password'
                          hintText="Enter Password"
                          floatingLabelText="Password"
                          className='text-center'
                          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                          underlineFocusStyle={{borderColor: '#16a085'}}
                          onChange = {this.handleChange}
                        />
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
        {this.state.redirect && <Redirect to='/account/confirm' push />}
      </div>
    );
  }
}
