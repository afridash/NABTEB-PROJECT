import React, {Component} from 'react'
import Paper from 'material-ui/Paper'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DashboardHeader from './Dashboard-header'
import {Link} from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton'
export default class CBOCandidates extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  showPageContent(){
      return (
        <div className="col-sm-10 col-sm-offset-1">
          <h3 className='text-info text-center'>Registered Candidates</h3>
          <Paper zDepth={1}>
            <div className='panel panel-default'>
              <div className='panel-heading'>
                <div className='panel-title text-center'  style={{fontSize:18}}>List of Registered Candidates</div>
              </div>
              <div className='panel-body'>
                <ol>
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th>S/N</th>
                        <th>Name</th>
                        <th>Exam type</th>
                        <th>Exam Center</th>
                        <th>Exam Title</th>
                        <th>Exam Code</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>John Doe</td>
                        <td>Advanced National Business Certificate</td>
                        <td>Plot 20, Garki estate, Garki, Abuja</td>
                        <td>Business Law</td>
                        <td>BUS150</td>
                        <td>
                          <Link to='/user/cbo/candidateinfo'>
                              <RaisedButton
                                labelStyle={{color:'white'}}
                                buttonStyle={{backgroundColor:'#2980b9', borderColor:'white'}}
                                label="View"
                              />
                        </Link>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Ibrahim Suleman</td>
                        <td>Advanced National Technical Certificate</td>
                        <td>Plot 100,road 2, block 40 Wuse II, Abuja</td>
                        <td>Applied Engineering</td>
                        <td>APT200</td>
                        <td>
                          <Link to='/user/admin/details'>
                              <RaisedButton
                                labelStyle={{color:'white'}}
                                buttonStyle={{backgroundColor:'#2980b9', borderColor:'white'}}
                                label="View"
                              />
                         </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </ol>
              </div>
            </div>
          </Paper>
          <div className='text-center'>
            <Link to='/user/cbo'>
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
      <MuiThemeProvider><DashboardHeader materials={true} children={this.showPageContent()} /></MuiThemeProvider>
    );
  }
}
