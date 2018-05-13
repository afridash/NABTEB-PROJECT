import React, {Component} from 'react'
import Paper from 'material-ui/Paper'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DashboardHeader from './Dashboard-header'
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import RaisedButton from 'material-ui/RaisedButton'
import {Link} from 'react-router-dom'
const styles = {
headline: {
  fontSize: 24,
  paddingTop: 16,
  fontFamily:'Times New Roman',
  marginBottom: 12,
  textAlign:'center',
  fontWeight: 400,
},
};
export default class AdminPrograms extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }



  showPageContent(){
      return (
        <div className="col-sm-10 col-sm-offset-1">
          <h3 className='text-info text-center'></h3>
          <Paper zDepth={1}>
            <div className='panel panel-default'>
              <div className='panel-heading'>
                <div className='text-info text-center' style={{fontSize:25}}>Programs
                </div>
              </div>
              <div className='panel-body'>
                          <ol style={{fontSize:22, fontFamily:'Times New Roman'}}>
                            <ul>
                                <li><Link to ='/user/admin/material'>ENGINEERING TRADES (NTC)</Link></li>
                                <li><Link to ='/user/admin/material'>CONSTRUCTION TRADES (NTC)</Link></li>
                                <li><Link to ='/user/admin/material'>BUSINESS STUDIES (NBC)</Link></li>
                                <li><Link to ='/user/admin/material'>GENERAL EDUCATION</Link></li>
                                <li><Link to ='/user/admin/material'>MISCELLANEOUS TRADES (NTC)</Link></li>

                            </ul>
                          </ol>
              </div>
            </div>
          </Paper>
              <div className='text-center'>
            <Link to='/user/admin/dashboard'>
          <RaisedButton
            labelStyle={{color:'white'}}
            buttonStyle={{backgroundColor:'#b71c1c', borderColor:'white'}}
            label="Close"
          />
        </Link>
          </div>

        </div>
      );
  }
  render() {
    return (
      <MuiThemeProvider><DashboardHeader children={this.showPageContent()} /></MuiThemeProvider>
    );
  }
}
