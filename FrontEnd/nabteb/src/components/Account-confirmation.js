import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
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
export default class AccountConfirmation extends Component {
  constructor (props) {
    super(props)
      this.state = {
        pin: '',
        error: '',
        redirect:false,
      }
      this.userId = this.props.match.params.id
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }
  handleSubmit (event) {
    event.preventDefault()
    this.setState({loading:true})
    if (this.verifyPasswords()) {
      fetch("http://localhost:8080/verify/"+this.userId+"/"+this.state.pin).then(response => response.json()).then(data => {
        localStorage.setItem('email', data['email'])
        localStorage.setItem('userId', data['id'])
        localStorage.setItem('userType', data['user_type'])
        this.setState({redirect:true})
      }).catch(error => {
        this.setState({loading:false})
        this.setState({error:'Invalid verification pin'})
      })
    }else{
      this.setState({error:'Invalid pin',loading:false})
    }
  }
  verifyPasswords () {
    return this.state.pin !== ''
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
                        <h3 className='text-center'>Confirmation</h3>
                        <i className='text-info'>Enter verification pin sent to your email</i>
                        <br/>
                        <p style={{color:'red'}}>{this.state.error}</p>
                        <TextField
                          hintText="Enter Pin"
                          fullWidth={true}
                          name='pin'
                          floatingLabelText="Verification Pin"
                          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                          className='text-center'
                          underlineFocusStyle={{borderColor: '#16a085'}}
                          onChange = {this.handleChange}
                        />
                        <FlatButton
                           buttonStyle={{backgroundColor:'#3498db', borderColor:'white'}}
                           className='pull-left'
                           label="Resend Pin"
                         />&nbsp;&nbsp;
                            {this.state.loading ? <RaisedButton
                              labelStyle={{color:'white'}}
                                buttonStyle={{backgroundColor:'#1abc9c', borderColor:'white'}}
                                className='pull-right'
                                label="Verifying..."
                              /> : <RaisedButton
                                className='pull-right'
                                  labelStyle={{color:'white'}}
                                  buttonStyle={{backgroundColor:'#16a085', borderColor:'white'}}
                                  label="Continue"
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
        {this.state.redirect && <Redirect to='/dashboard' push />}
      </div>
    );
  }
}
