import React, { Component } from 'react'
import '../App.css'
import {Link} from 'react-router-dom'
import Paper from 'material-ui/Paper'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DashboardHeader from './Dashboard-header'
import RaisedButton from 'material-ui/RaisedButton'

export default class AdminScholarInfo extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  showPageContent () {
    return (
      <div className='col-sm-10 col-sm-offset-1' style={{padding:10}}>
        <Paper zDepth={2}>
          <div className='row'>
            <div className='col-sm-12'>
              <div className='text-center'>
                <img src={require('../images/bird.jpeg')} style={{ height:150, width:150,borderRadius:75, marginTop:15}} />
              </div>
              <p className='lead text-center text-info' style={{fontSize:25, fontWeight:400, marginTop:10}}>Personal Data</p>
              <div style={{margin: 20, padding:10}}>
              <div style={{padding:10, fontSize:20, fontFamily:'Times New Roman'}}>
                <p><b>First Name: </b> John </p>
                <p><b>Middle Name: </b> Micheal</p>
                <p><b>Surname: </b>Doe</p>
                <p><b>Phone Number: </b> 08011123434</p>
                <p><b>Gender: </b>Male</p>
                <p><b>Address: </b>No1. Aguiyi Ironsi Road, Off Setraco Estate, Benin City, Nigeria</p>
                <p style={{textAlign:'center', fontSize:22}}><b>Next of Kin</b></p>
                <p><b>Full Name: </b> Daniel Raymond Doe </p>
                <p><b>Address: </b>Plot 2, Jaycee Avenue, Niger State</p>
                <p><b>Phone Number: </b> 08011123434</p>

              </div>
              </div>
            </div>
          </div>
        </Paper>
        <div className='text-center' style={{marginTop:20}}>
          <Link to='/user/admin/dashboard'>
              <RaisedButton
                labelStyle={{color:'white'}}
                buttonStyle={{backgroundColor:'#16a085', borderColor:'white'}}
                label="Accept"
              />
          </Link> &nbsp; &nbsp;
          <Link to='/user/admin/dashboard'>
              <RaisedButton
                labelStyle={{color:'white'}}
                buttonStyle={{backgroundColor:'#b71c1c', borderColor:'white'}}
                label="Reject"
              />
          </Link>
    </div>
      </div>
    )
  }
  render() {
    return (
      <MuiThemeProvider><DashboardHeader user='admin' materials={true} children={this.showPageContent()} /></MuiThemeProvider>
    );
  }
}
