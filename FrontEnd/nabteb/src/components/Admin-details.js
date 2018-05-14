import React, { Component } from 'react'
import '../App.css'
import {Link} from 'react-router-dom'
import Paper from 'material-ui/Paper'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DashboardHeader from './Dashboard-header'
import RaisedButton from 'material-ui/RaisedButton'

export default class AdminDetails extends Component {
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
              <div style={{borderBottomStyle:'solid', borderWidth:'1px',margin: 20, padding:10}}>
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
            <div className='col-sm-12'>
              <p className='lead text-center text-info' style={{fontSize:25, fontWeight:400}}>Examination Details</p>
              <div style={{borderBottomStyle:'solid', borderWidth:'1px',margin: 20, padding:10}}>
              <div style={{padding:10, fontSize:20, fontFamily:'Times New Roman'}}>
                <p><b>State: </b> Aba </p>
                <p><b>Local government: </b> Asaba LGA</p>
                <p><b>Exam Center: </b>Uratta Tech. College Aba 01003 Technical/Commercial Aba North No.300 Uratta Road, Aba P.O Box 946 Aba</p>
                <p><b>Exam Type: </b>National Business Certificate</p>
              </div>

              </div>
            </div>
            <div className='col-sm-12'>
              <p className='lead text-center text-info' style={{fontSize:25, fontWeight:400}}>Biometric Data</p>
              <div style={{borderBottomStyle:'solid', borderWidth:'1px',margin: 20, padding:10}}>
              <div style={{padding:10, fontSize:20, fontFamily:'Times New Roman'}}>
                <p><b>Biometric Status:</b> <span className='text-success'>Submitted</span></p>
                <p><b>Submitted At:</b> FitFarm Plc</p>
                <p><b>Time uploaded:</b> Wednesday, January 2017 5pm</p>
              </div>

              </div>
            </div>
            <div className='col-sm-12'>
              <p className='lead text-center text-info' style={{fontSize:25, fontWeight:400}}>Payments</p>
              <div style={{margin: 20, padding:10}}>
              <div style={{padding:10, fontSize:20, fontFamily:'Times New Roman'}}>
                <p><b>Selected Examination: </b> NTC (#10,000)</p>
                <p><b>Registration Pin/Services: </b> #1,500</p>
                <p><b>Gateway: </b> #100</p>
                <br />
                <br />
                <p style={{fontSize:18}}><b>Total: </b> #11,600</p>

              </div>
              </div>
            </div>
          </div>
        </Paper>
        <div className='text-center' style={{marginTop:20}}>
          <Link to='/user/admin/dashboard'>
        <RaisedButton
          labelStyle={{color:'white'}}
          buttonStyle={{backgroundColor:'#b71c1c', borderColor:'white'}}
          label="Close"
        />
      </Link>
    </div>
      </div>
    )
  }
  render() {
    return (
      <MuiThemeProvider><DashboardHeader materials={true} children={this.showPageContent()} /></MuiThemeProvider>
    );
  }
}
