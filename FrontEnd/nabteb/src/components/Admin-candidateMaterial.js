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
export default class AdminCandidateMaterial extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }



  showPageContent(){
      return (
        <div className="col-sm-10 col-sm-offset-1">
          <h3 className='text-info text-center'>Payments</h3>
          <Paper zDepth={1}>
            <div className='panel panel-default'>
              <div className='panel-heading'>
                <div className='text-info text-center'>
                  <input type='text' className='form-control' placeholder="Search..." style={{marginBottom:5, textAlign:'center', fontSize:18}} />
                </div>
              </div>
              <div className='panel-body'>
                 <Tabs>
                        <Tab label="Centers" style={{backgroundColor:'#16a085'}}>
                          <ol style={{fontSize:20, fontFamily:'Times New Roman'}}>
                            <table class="table table-striped"  style={{fontFamily:"Times New Roman", fontSize:18}}>
                              <thead>
                                <tr>
                                  <th>S/N</th>
                                  <th>Name</th>
                                  <th>Transaction Date</th>
                                  <th>Transaction Time</th>
                                  <th>Remital Retrival Reference </th>
                                  <th>Amount</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1</td>
                                  <td>John Doe</td>
                                  <td>April Wed 21, 2018</td>
                                  <td> 11:56pm</td>
                                  <td>203043</td>
                                  <td>#2,000</td>
                                </tr>
                                <tr>
                                  <td>2</td>
                                  <td>Ibrahim Suleman</td>
                                  <td>October Sat 30, 2018 </td>
                                  <td>03:32pm</td>
                                  <td>702315</td>
                                  <td>#2,000</td>
                                </tr>

                              </tbody>
                            </table>
                          </ol>
                        </Tab>
                        <Tab label="Candidates" style={{backgroundColor:'#16a085'}}>
                          <div className='panel-body'>
                              <ol style={{fontSize:22, fontFamily:'Times New Roman'}}>
                                <ul>
                                    <li><Link to ='/user/admin/candidate/registration'>Registration</Link></li>
                                    <li><Link to ='/user/admin/candidate/result'>Results</Link></li>
                                    <li><Link to ='/user/admin/candidate/material'>Materials</Link></li>
                                </ul>
                              </ol>
                          </div>
                        </Tab>
                </Tabs>

              </div>
            </div>
          </Paper>
              <div className='text-center'>

            <Link to='/user/admin/payment'>
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
