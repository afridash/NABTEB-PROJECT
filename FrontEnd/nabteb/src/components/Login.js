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
export default class Login extends Component {
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
  async handleSubmit (event) {
    event.preventDefault()
    this.setState({loading:true})
    var email = this.state.email
    var password = this.state.password
    if (this.verifyPasswords()) {
      fetch("http://localhost:8080/login/"+email+"/"+password).then(response => response.json()).then(data => {
        if (!data['status']){
          if (data['verified']){
            localStorage.setItem('email', data['email'])
            localStorage.setItem('userId', data['id'])
            localStorage.setItem('userType', data['user_type'])
            var url = ''
            if (data.user_type === "candidate")
            url = "/dashboard"
            else if (data.user_type === "center_owner")
            url = "/user/cbo"
            else url = "/user/admin/dashboard"

            this.setState({redirect:true, url:url})
          }else {
            this.setState({loading:false})
            this.setState({showVerify:true, userId:data['id']})
          }
        }else {
          this.setState({loading:false})
          this.setState({error:'Wrong Email/Password Combination'})
        }
      }).catch(error => {
        this.setState({loading:false})
        this.setState({error:'Wrong Email/Password Combination'})
      })
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
                      <div className='col-sm-10 col-sm-offset-1'>
                        <h3 className='text-center'>Login</h3>
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
                            {this.state.loading ? <RaisedButton
                              labelStyle={{color:'white'}}
                                buttonStyle={{backgroundColor:'#1abc9c', borderColor:'white'}}
                                className='pull-right'
                                label="Logging In"
                              /> : <RaisedButton
                                className='pull-right'
                                  labelStyle={{color:'white'}}
                                  buttonStyle={{backgroundColor:'#16a085', borderColor:'white'}}
                                  label="Login"
                                  type="submit"
                                  onClick={(event) =>
                                  this.handleSubmit(event)}
                                />}
                            <div className="pull-left">
                              <br/>
                              <p className="password"><Link to="/reset">Forgot Password?</Link></p>
                              <p className="password">Or Click <Link to="/register">here</Link> to register</p>
                            </div>
                      </div>
                      </form>
                  </div>

                </Paper>
              </div>
            </div>
        </div>
        {this.state.redirect && <Redirect to={this.state.url} push />}
        {this.state.showVerify && <Redirect to={'/account/confirm/'+this.state.userId} push />}
      </div>
    );
  }
}
