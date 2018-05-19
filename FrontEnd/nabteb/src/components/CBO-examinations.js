import React, {Component} from 'react'
import Paper from 'material-ui/Paper'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import CircularProgress from 'material-ui/CircularProgress'
import DashboardHeader from './Dashboard-header'
import RaisedButton from 'material-ui/RaisedButton'
import {Link} from 'react-router-dom'
export default class CBOExaminations extends Component {
  constructor (props) {
    super(props)
    this.state = {
      series:[],
      loading:true
    }
  }
  componentWillMount (){
    this.retrieveSeries()
  }
  retrieveSeries () {
    fetch("http://localhost:8080/examseries").then(response => response.json()).then(series => {
      var temp = []
      series.forEach((s)=>{
        if (s.isOpen)
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
              <li><h4><Link to={'/user/centers/'+s.name.replace("/", " ")}>{s.name}</Link></h4></li>
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
            <Link to='/user/cbo'>
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
      <MuiThemeProvider><DashboardHeader user="cbo" materials={true} children={this.showPageContent()} /></MuiThemeProvider>
    );
  }
}
