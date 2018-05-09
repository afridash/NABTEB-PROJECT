import React, { Component } from 'react'
import '../App.css'
import {Link} from 'react-router-dom'
import Paper from 'material-ui/Paper'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DashboardHeader from './Dashboard-header'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'
import DatePicker from 'material-ui/DatePicker';

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
      selected:''
    }
  }
  handleSelect = (event, index, value) => {
    this.setState({selected:value, selectedIndex:index})
  }
  showPageContent () {
    return (
      <div className='col-sm-10 col-sm-offset-1' style={{padding:10}}>
        <Paper zDepth={2}>
          <div className='row'>
            <div className='col-sm-12'>
              <div className='col-sm-8 col-sm-offset-2' style={{padding:10}}>
                <h3 className='text-center text-info'>Candidate Info</h3>
                <TextField
                type='text'
                hintText="First Name"
                fullWidth={true}
                name='firstName'
                floatingLabelText="First Name"
                floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                underlineFocusStyle={{borderColor: '#16a085'}}
                />
                <TextField
                type='text'
                hintText="Middle Name"
                fullWidth={true}
                name='middleName'
                floatingLabelText="Middle Name"
                floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                underlineFocusStyle={{borderColor: '#16a085'}}
                />
                <TextField
                type='text'
                hintText="Surname"
                fullWidth={true}
                name='surname'
                floatingLabelText="Surname"
                floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                underlineFocusStyle={{borderColor: '#16a085'}}
                />
                <TextField
                type='text'
                hintText="Phone"
                fullWidth={true}
                name='kinPhone'
                floatingLabelText="Phone Number"
                floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                underlineFocusStyle={{borderColor: '#16a085'}}
                />
                <SelectField
                  value={this.state.selected}
                  onChange={this.handleSelect}
                  fullWidth
                  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                  name='selected'
                  maxHeight={200}
                  >
                    <MenuItem value=''  primaryText={'Choose Gender'} />
                    <MenuItem value='male'  primaryText='Male' />
                    <MenuItem value='female'  primaryText='Female' />
                  </SelectField>
                  <DatePicker fullWidth hintText="Date of Birth" container="inline" />
                  <TextField
                  type='text'
                  hintText="Address"
                  fullWidth={true}
                  name='address'
                  floatingLabelText="Address"
                  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                  underlineFocusStyle={{borderColor: '#16a085'}}
                  />
                  <h3 className='text-center text-info'>Next of kin Conact Info</h3>
                  <TextField
                  type='text'
                  hintText="Full Name"
                  fullWidth={true}
                  name='kinName'
                  floatingLabelText="Full Name"
                  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                  underlineFocusStyle={{borderColor: '#16a085'}}
                  />
                  <TextField
                  type='text'
                  hintText="Enter Address"
                  fullWidth={true}
                  name='kinAddress'
                  floatingLabelText="Address"
                  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                  underlineFocusStyle={{borderColor: '#16a085'}}
                  />
                  <TextField
                  type='text'
                  hintText="Phone"
                  fullWidth={true}
                  name='kinPhone'
                  floatingLabelText="Phone Number"
                  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                  underlineFocusStyle={{borderColor: '#16a085'}}
                  />
              </div>
            </div>
            <div className='col-sm-12'>
              <div style={{margin:10}} className='text-center'>
                <Link to='/dashboard'>
                  <RaisedButton
                    labelStyle={{color:'white'}}
                    buttonStyle={{backgroundColor:'#16a085', borderColor:'white'}}
                    label="Save"
                    />
                </Link>
              </div>
            </div>
          </div>
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
