import React, {Component} from 'react'
import Paper from 'material-ui/Paper'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DashboardHeader from './Dashboard-header'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import {Link} from 'react-router-dom'
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
export default class AdminCourses extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selected:''
    }
  }
  handleSelect = (event, index, value) => {
    this.setState({selected:value, selectedIndex:index})
  }
  showPageContent(){
      return (
        <div className="col-sm-10 col-sm-offset-1">
          <h3 className='text-info text-center'></h3>
          <Paper zDepth={1}>
            <div className='panel panel-default'>
              <div className='panel-heading'>
                <div className='text-info text-center' style={{fontSize:25, color:'#34495e'}}>Agricultural Equipment and Implement Mechanic Works</div>
              </div>
              <div className='panel-body'>
                <ul>
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th>S/N</th>
                        <th>Courses</th>
                        <th>Action</th>

                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1.</td>
                        <td>Agricultural Equipment and Implement Mechanic Works.pdf</td>
                        <td>
                          <Link to='#'>
                          <RaisedButton
                            labelStyle={{color:'white'}}
                              buttonStyle={{backgroundColor:'#b71c1c', borderColor:'white'}}
                              label="Delete"
                            />
                          </Link>
                        </td>

                      </tr>
                      <tr>
                        <td>2.</td>
                        <td>Motor Vehicle Mechanics Works.pdf</td>
                        <td>
                          <Link to='#'>
                          <RaisedButton
                            labelStyle={{color:'white'}}
                              buttonStyle={{backgroundColor:'#b71c1c', borderColor:'white'}}
                              label="Delete"
                            />
                          </Link>
                        </td>

                      </tr>
                      <tr>
                        <td>3.</td>
                        <td>Automobile Electrical Works.pdf</td>
                        <td>
                          <Link to='#'>
                          <RaisedButton
                            labelStyle={{color:'white'}}
                              buttonStyle={{backgroundColor:'#b71c1c', borderColor:'white'}}
                              label="Delete"
                            />
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </ul>
                <div className='text-center'>
                  <Link to='#'>
                  <RaisedButton
                    labelStyle={{color:'white'}}
                    buttonStyle={{backgroundColor:'#2980b9', borderColor:'white'}}
                    label="Add new"
                    onClick={()=>this.setState({addNew:!this.state.addNew})}
                  />
                </Link>
              </div>
              {this.state.addNew && <div className='col-sm-12'>
                <div className='col-sm-8 col-sm-offset-2'>
                  <TextField
                  type='text'
                  hintText="Course Title"
                  fullWidth={true}
                  name='Course Title'
                  floatingLabelText="Course Title"
                  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                  underlineFocusStyle={{borderColor: '#16a085'}}
                  />

                <div style={{margin:10}}>
                  <RaisedButton
                    labelStyle={{color:'white'}}
                    buttonStyle={{backgroundColor:'#16a085', borderColor:'white'}}
                    label="Add"
                    />
                </div>
                </div>
              </div>}
              </div>

            </div>

          </Paper>
                  <div className='text-center'>
                    <Link to='/user/admin/material'>
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
