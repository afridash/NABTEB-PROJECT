import React, {Component} from 'react'
import Paper from 'material-ui/Paper'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DashboardHeader from './Dashboard-header'
import {Link} from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton'
export default class AdminCandidate extends Component {
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
                <div className='panel-title text-center'>
                    <input type='text' className='form-control' placeholder="Search..." style={{marginBottom:5, textAlign:'center', fontSize:18}} />
                </div>
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
                        <td ><Link to='/user/admin/details' style={{color:'black'}}>John Doe</Link></td>
                        <td>Advanced National Business Certificate</td>
                        <td>Plot 20, Garki estate, Garki, Abuja</td>
                        <td>Business Law</td>
                        <td>BUS150</td>
                        <td>
                          <Link to='#'>
                        <RaisedButton
                          labelStyle={{color:'white'}}
                          buttonStyle={{backgroundColor:'#16a085', borderColor:'white'}}
                          label="Upload"
                        />
                      </Link>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td><Link to='/user/admin/details' style={{color:'black'}}>Ibrahim Suleiman</Link></td>
                        <td>Advanced National Technical Certificate</td>
                        <td>Plot 100,road 2, block 40 Wuse II, Abuja</td>
                        <td>Applied Engineering</td>
                        <td>APT200</td>
                        <td>
                          <Link to='#'>
                        <RaisedButton
                          labelStyle={{color:'white'}}
                          buttonStyle={{backgroundColor:'#16a085', borderColor:'white'}}
                          label="Upload"
                        />
                      </Link>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td><Link to='/user/admin/details' style={{color:'black'}}> Susan Musa </Link></td>
                        <td>Advanced National Technical Certificate</td>
                        <td>Plot 100,road 2, block 40 Wuse II, Abuja</td>
                        <td>Applied Engineering</td>
                        <td>APT200</td>
                        <td>
                          <Link to='#'>
                        <RaisedButton
                          labelStyle={{color:'white'}}
                          buttonStyle={{backgroundColor:'#16a085', borderColor:'white'}}
                          label="Upload"
                        />
                      </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                    <div className="bs-example text-center">
                      <ul className="pagination">
                          <li><a href="#">&laquo;Previous</a></li>
                          <li><a href="#">1</a></li>
                          <li><a href="#">2</a></li>
                          <li><a href="#">3</a></li>
                          <li><a href="#">Next&raquo;</a></li>
                      </ul>
                  </div>
                </ol>
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
      );
  }
  render() {
    return (
      <MuiThemeProvider><DashboardHeader user='admin' materials={true} children={this.showPageContent()} /></MuiThemeProvider>
    );
  }
}
