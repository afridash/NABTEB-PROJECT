import React, {Component} from 'react'
import Paper from 'material-ui/Paper'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import CircularProgress from 'material-ui/CircularProgress'
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
      series:[],
      loading:true,
      email:'',
      userId:''
    }
  }
  async componentWillMount () {
    var email = await localStorage.getItem('email')
    var userId = await localStorage.getItem('userId')
    var nextYear = new Date(new Date().setFullYear(new Date().getFullYear() + 1)).getFullYear()
    this.setState({currentYear: new Date().getFullYear(), nextYear:nextYear, email, userId})
    this.retrieveSeries()
  }
  retrieveSeries () {
    fetch("http://localhost:8080/examseries").then(response => response.json()).then(series => {
      var temp = []
      series.forEach((s)=>{
        temp.unshift(s)
      })
      this.setState({series:temp, loading:false})
    }).catch(error => {
      alert(error)
      this.setState({loading:false})
    })
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
  toggleRegistration (item, index) {
    item.isOpen = !item.isOpen
    var clone = this.state.series
    clone[index] = item
    fetch("http://localhost:8080/examseries/"+item.id, {
      body: JSON.stringify(item),
      headers: {
        'content-type': 'application/json'
      },
      method: 'PUT'
    }).then(response => response.json()).then(data => {
      this.setState({seres:clone})
    })
  }
  saveSeries () {
    if (!this.state.editing) {
    var data = {
      id:Math.floor(Math.random() * 40),
      userId:this.state.userId,
      createdBy:this.state.email,
      createdAt:Date.now(),
      isOpen:false,
      name:this.state.selectedSeries + " " + this.state.selectedYear
    }
    fetch("http://localhost:8080/examseries/create", {
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json'
      },
      method:'POST'
      }).then(response => response.json()).then(series => {
      var clone = this.state.series
      clone.unshift(series)
      this.setState({series:clone, selectedYear:'', selectedSeries:''})
      this.handleClose()
    }).catch(error => {
      alert(error)
      this.handleClose()
    })
    }else {
    this.saveEdit()
    }
  }
  saveEdit () {
    var item = {
      id:this.state.itemId,
      userId:this.state.itemUserId,
      createdBy:this.state.itemCreatedBy,
      createdAt:this.state.itemCreatedAt,
      isOpen:this.state.itemIsOpen,
      name:this.state.selectedSeries + " " + this.state.selectedYear
    }
    var clone = this.state.series
    clone[this.state.currentIndex] = item
    fetch("http://localhost:8080/examseries/"+this.state.itemId, {
      body: JSON.stringify(item),
      headers: {
        'content-type': 'application/json'
      },
      method: 'PUT'
    }).then(response => response.json()).then(data => {
      this.setState({
        seres:clone,
        editing:false,
        itemId:null,
        itemCreatedAt:null,
        itemCreatedBy:null,
        itemUserId:null,
        selectedYear:'',
        selectedSeries:'',
        itemIsOpen:null,
        open:false})
    }).catch(error => {
      alert(error)
    })
  }
  editSeries (item, index) {
    var i = item.name.indexOf(" ")
    var series = item.name.substring(0, i)
    var year = item.name.substring(i+1)
    this.setState({
      selectedYear:Number(year),
      selectedSeries:series,
      itemId:item.id,
      itemUserId:item.userId,
      itemCreatedBy:item.createdBy,
      itemCreatedAt:item.createdAt,
      itemIsOpen:item.isOpen,
      open:true,
      currentIndex:index,
      editing:true
    })
  }
  showSpinner () {
    return (
      <div className="row text-center">
          <br/>
          <br/>
          <CircularProgress size={60} thickness={5} />
      </div>
    )
  }
  showTable () {
    return (
      <div>
        {this.state.series.length > 0 ?
          <table class="table table-striped">
            <thead>
              <tr>
                <th>S/N</th>
                <th>Date of Series</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.series.map((s, key)=> {
                return (
                  <tr key={key}>
                    <td>{key+1}</td>
                    <td ><Link to='/user/admin/candidate' style={{color:'black'}}>{s.name}</Link></td>
                    <td>
                    {s.isOpen ?<RaisedButton
                      labelStyle={{color:'white'}}
                      buttonStyle={{backgroundColor:'#b71c1c', borderColor:'white'}}
                      label="Close Registration"
                      onClick={()=>this.toggleRegistration(s, key)}
                    /> :
                    <RaisedButton
                      labelStyle={{color:'white'}}
                      buttonStyle={{backgroundColor:'#2980b9', borderColor:'white'}}
                      label="Open Registration"
                      onClick={()=>this.toggleRegistration(s, key)}
                    />
                  } &nbsp; &nbsp; &nbsp;
                       <RaisedButton
                        labelStyle={{color:'white'}}
                        buttonStyle={{backgroundColor:'#16a085', borderColor:'white'}}
                        label="Edit"
                        onClick={()=>this.editSeries(s, key)}
                      />
                  </td>
                  </tr>
                )
              })}
            </tbody>
          </table> : <p className='lead text-info text-center'>No Series Added</p>
        }
      </div>
    )
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
        onClick={()=>this.saveSeries()}
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
                  {this.state.loading ? this.showSpinner() : this.showTable()}
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
      <MuiThemeProvider><DashboardHeader user='admin' materials={true} children={this.showPageContent()} /></MuiThemeProvider>
    );
  }
}
