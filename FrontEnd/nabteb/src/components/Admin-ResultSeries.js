import React, {Component} from 'react'
import Paper from 'material-ui/Paper'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import CircularProgress from 'material-ui/CircularProgress'
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
      series:[],
      loading:true
    }
  }
  componentWillMount () {
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
  showSpinner () {
    return (
      <div className="row text-center">
          <br/>
          <br/>
          <CircularProgress size={60} thickness={5} />
      </div>
    )
  }
  showList() {
    return(
      <div className='panel-body'>
        <ul>
          {this.state.series.map((s)=>
              <li><h4><Link to={'/user/admin/centers/'+s.name.replace("/", " ")}>{s.name}</Link></h4></li>
          )}
        </ul>
      </div>
    )
  }
  showPageContent(){
      return (
        <div className="col-sm-10 col-sm-offset-1">
          <h3 className='text-info text-center'>Examinations Series</h3>
          <Paper zDepth={1}>
            <div className='panel panel-default'>
              {this.state.loading ? this.showSpinner() : this.showList()}
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
      <MuiThemeProvider><DashboardHeader user='admin' children={this.showPageContent()} /></MuiThemeProvider>
    );
  }
}
