import React, {Component} from 'react'
import Paper from 'material-ui/Paper'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Dialog from 'material-ui/Dialog'
import DashboardHeader from './Dashboard-header'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
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
      selectedSeries:'',
      selectedYear:'',
      series:[]
    }
  }
  componentWillMount () {
    var nextYear = new Date(new Date().setFullYear(new Date().getFullYear() + 1)).getFullYear()
    this.setState({currentYear: new Date().getFullYear(), nextYear:nextYear})
  }
  handleSelectSeries = (event, index, value) => {
    this.setState({selectedSeries:value})
  }
  handleSelectYear = (event, index, value) => {
    this.setState({selectedYear:value})
  }
  handleOpen = () => {
    this.setState({open: true});
  }

  handleClose = () => {
    this.setState({open: false});
  }
  showPageContent(){
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Save"
        primary={true}
        onClick={this.handleClose}
      />,
    ];
      return (
        <div className="col-sm-10 col-sm-offset-1">
          <h3 className='text-info text-center'>Examinations Series</h3>
          <Paper zDepth={1}>
            <div className='panel panel-default'>
              <div className='panel-body'>
                <div className='pull-right' style={{margin:10}}>
                  <RaisedButton
                    labelStyle={{color:'white'}}
                      buttonStyle={{backgroundColor:'#2980b9', borderColor:'white'}}
                      label="Add New"
                      onClick={this.handleOpen}
                    />
                </div>
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
                        <td ><Link to='/user/admin/candidate' style={{color:'black'}}>November/December 2017 </Link></td>
                        <td>
                        <RaisedButton
                          labelStyle={{color:'white'}}
                          buttonStyle={{backgroundColor:'#b71c1c', borderColor:'white'}}
                          label="Close Registration"
                        /> &nbsp; &nbsp;
                          <RaisedButton
                            labelStyle={{color:'white'}}
                            buttonStyle={{backgroundColor:'#16a085', borderColor:'white'}}
                            label="Edit"
                            />
                      </td>
                      </tr>
                      <tr>
                        <td>2.</td>
                        <td><Link to='/user/admin/candidate' style={{color:'black'}}>May/June 2017</Link></td>
                        <td>
                        <RaisedButton
                          labelStyle={{color:'white'}}
                          buttonStyle={{backgroundColor:'#2980b9', borderColor:'white'}}
                          label="Open Registration"
                        /> &nbsp; &nbsp; &nbsp;
                          <RaisedButton
                            labelStyle={{color:'white'}}
                            buttonStyle={{backgroundColor:'#16a085', borderColor:'white'}}
                            label="Edit"
                            />
                      </td>
                      </tr>
                      <tr>
                        <td>3.</td>
                        <td><Link to='/user/admin/candidate' style={{color:'black'}}>November/December 2016  </Link></td>
                        <td>
                        <RaisedButton
                          labelStyle={{color:'white'}}
                          buttonStyle={{backgroundColor:'#2980b9', borderColor:'white'}}
                          label="Open Registration"
                        /> &nbsp; &nbsp; &nbsp;
                          <RaisedButton
                            labelStyle={{color:'white'}}
                            buttonStyle={{backgroundColor:'#16a085', borderColor:'white'}}
                            label="Edit"
                            />
                      </td>
                      </tr>
                    </tbody>
                  </table>
                  {this.state.series.length > 50 &&
                    <div className="bs-example text-center">
                      <ul className="pagination">
                          <li><a href="#">&laquo;Previous</a></li>
                          <li><a href="#">1</a></li>
                          <li><a href="#">2</a></li>
                          <li><a href="#">3</a></li>
                          <li><a href="#">Next&raquo;</a></li>
                      </ul>
                    </div>
                  }
                <Dialog
                  title="New Series"
                  actions={actions}
                  modal={true}
                  open={this.state.open}
                  >
                    <div className='col-sm-12'>
                      <div className='col-sm-10 col-sm-offset-1'>
                        <SelectField
                          value={this.state.selectedSeries}
                          onChange={this.handleSelectSeries}
                          fullWidth
                          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                          maxHeight={200}
                          >
                            <MenuItem value=''  primaryText={'Choose Series'} />
                            <MenuItem value='May/June'  primaryText='May/June' />
                            <MenuItem value='Nov/Dec'  primaryText='Nov/Dec' />
                            <MenuItem value='Modular Trade Test'  primaryText='Modular Trade Test' />
                            <MenuItem value='Common Entrance'  primaryText='Common Entrance' />
                          </SelectField>
                          <div>
                            <SelectField
                              value={this.state.selectedYear}
                              onChange={this.handleSelectYear}
                              fullWidth
                              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                              maxHeight={200}
                              >
                                <MenuItem value=''  primaryText={'Select a year'} />
                                <MenuItem value={this.state.nextYear}  primaryText={this.state.nextYear} />
                                <MenuItem value={this.state.currentYear}  primaryText={this.state.currentYear} />
                              </SelectField>
                          </div>
                      </div>
                    </div>
                </Dialog>
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
          </Link>&nbsp;&nbsp;
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
