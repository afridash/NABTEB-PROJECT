import React, {Component} from 'react'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
export default class Contact extends Component {
  render() {
    return (
      <div className="col-sm-10 col-sm-offset-1">
        <div className='row'>
          <div className='col-sm-8'>
            <h5 className='lead text-center text-info'>Message Us</h5>
            <TextField
              type="text"
              fullWidth={true}
              name='name'
              hintText="Enter Name"
              floatingLabelText="Name"
              className='text-center'
              underlineFocusStyle={{borderColor: '#16a085'}}
              onChange = {this.handleChange}
            />
            <TextField
              type="text"
              fullWidth={true}
              name='phone'
              hintText="Enter Phone"
              floatingLabelText="Phone Number"
              className='text-center'
              underlineFocusStyle={{borderColor: '#16a085'}}
              onChange = {this.handleChange}
            />
            <TextField
              type="text"
              fullWidth={true}
              name='email'
              hintText="Enter Email"
              floatingLabelText="Email"
              className='text-center'
              underlineFocusStyle={{borderColor: '#16a085'}}
              onChange = {this.handleChange}
            />
            <textarea rows={5} className='form-control' placeholder='Message' />
            <div style={{marginTop:20}}>
              <RaisedButton
                labelStyle={{color:'white'}}
                  buttonStyle={{backgroundColor:'#1abc9c', borderColor:'white'}}
                  className='pull-right'
                  label="Send"
                />
            </div>
          </div>
          <div className='col-sm-4'>
            <Paper zDepth={1} rounded>
              <div className='row'>
                <div className='col-sm-12'>
                  <div style={{padding:10}}>
                    <h5 className='lead text-center text-info'>Visit/Call Us</h5>
                    <p>No. 1, Benin-Agbor Road</p>
                    <p>Ikpoba Hill, P.M.B 1747, Benin-City,</p>
                    <p>Edo State, Nigeria </p>
                    <p>T: +2348078840770</p>
                    <p>E: support@nabteb.gov.ng</p>
                  </div>
                </div>
              </div>
            </Paper>
          </div>
        </div>
      </div>
    );
  }
}
