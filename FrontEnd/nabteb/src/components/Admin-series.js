import React, {Component} from 'react'
import Paper from 'material-ui/Paper'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DashboardHeader from './Dashboard-header'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import DatePicker from 'material-ui/DatePicker';
import MenuItem from 'material-ui/MenuItem'
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
export default class AdminSeries extends Component {
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
          <h3 className='text-info text-center'>Examinations Series</h3>
          <Paper zDepth={1}>
            <div className='panel panel-default'>
              <div className='panel-body'>
                <ul>
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th>S/N</th>
                        <th>Date of Series</th>
                        <th>Action</th>

                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1.</td>
                        <td ><Link to='/user/admin/candidate' style={{color:'black'}}>November/December 2017</Link></td>
                        <td>
                          <Link to='#'>
                          <RaisedButton
                            labelStyle={{color:'white'}}
                              buttonStyle={{backgroundColor:'#e74c3c', borderColor:'white'}}
                              label="Close Registration"
                            />
                          </Link>
                        </td>

                      </tr>
                      <tr>
                        <td>2.</td>
                        <td><Link to='/user/admin/candidate' style={{color:'black'}}>May/June 2017</Link></td>
                        <td>
                          <Link to='#'>
                          <RaisedButton
                            labelStyle={{color:'white'}}
                              buttonStyle={{backgroundColor:'#2980b9', borderColor:'white'}}
                              label="Open Registration"
                            />
                          </Link>
                        </td>

                      </tr>
                      <tr>
                        <td>3.</td>
                        <td><Link to='/user/admin/candidate' style={{color:'black'}}> November/December 2016 </Link></td>
                        <td>
                          <Link to='#'>
                          <RaisedButton
                            labelStyle={{color:'white'}}
                              buttonStyle={{backgroundColor:'#2980b9', borderColor:'white'}}
                              label="Open Registration"
                            />
                          </Link>
                        </td>

                      </tr>
                    </tbody>
                  </table>
                </ul>
                <div className="bs-example text-center">
                  <ul className="pagination">
                      <li><a href="#">&laquo;Previous</a></li>
                      <li><a href="#">1</a></li>
                      <li><a href="#">2</a></li>
                      <li><a href="#">3</a></li>
                      <li><a href="#">Next&raquo;</a></li>
                  </ul>
              </div>
                <div className='text-center' style={{margin:10}}>
                  <Link to='#'>
                  <RaisedButton
                    labelStyle={{color:'white'}}
                      buttonStyle={{backgroundColor:'#2980b9', borderColor:'white'}}
                      label="Add New"
                      onClick={()=>this.setState({addNew:!this.state.addNew})}
                    />
                  </Link>&nbsp; &nbsp;

                </div>
                {this.state.addNew && <div className='col-sm-12'>
                  <div className='col-sm-8 col-sm-offset-2'>
                    <SelectField
                      value={this.state.selected}
                      onChange={this.handleSelect}
                      fullWidth
                      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                      name='selected'
                      maxHeight={200}
                      >
                        <MenuItem value=''  primaryText={'Choose Series'} />
                        <MenuItem value='May'  primaryText='May/June' />
                        <MenuItem value='Nov'  primaryText='November/December' />
                        <MenuItem value='Modular'  primaryText='Modular Trade Test' />
                        <MenuItem value='Common'  primaryText='Common Entrance' />
                      </SelectField>
                      <div>
                        <SelectField
                          value={this.state.selected}
                          onChange={this.handleSelect}
                          fullWidth
                          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                          name='selected'
                          maxHeight={200}
                          >
                            <MenuItem value=''  primaryText={'Select a year'} />
                            <MenuItem value='2017'  primaryText='2017' />
                            <MenuItem value='2016'  primaryText='2016' />
                            <MenuItem value='2015'  primaryText='2015' />
                            <MenuItem value='2014'  primaryText='2014' />
                          </SelectField>
                      </div>
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
            <Link to='/user/admin/dashboard'>
            <RaisedButton
              labelStyle={{color:'white'}}
              buttonStyle={{backgroundColor:'#e74c3c', borderColor:'white'}}
              label="Close"
            />
          </Link>&nbsp;&nbsp;
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
