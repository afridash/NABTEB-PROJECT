import React, {Component} from 'react'
import Paper from 'material-ui/Paper'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import CircularProgress from 'material-ui/CircularProgress'
import DashboardHeader from './Dashboard-header'
import RaisedButton from 'material-ui/RaisedButton'
import {Link} from 'react-router-dom'
export default class CBOCenters extends Component {
  constructor (props) {
    super(props)
    this.seriesId = this.props.match.params.id
    this.state = {
      approved:[],
      userId:'',
      loading:true,
    }
  }
  async componentWillMount () {
    var userId = await localStorage.getItem('userId')
    this.setState({userId})
    this.retrieveCenters()
  }
  retrieveCenters () {
    fetch("http://localhost:8080/centers").then(response => response.json()).then(centers => {
      var pending = []
      var approved = []
      centers.forEach((center)=> {
        if (center.status === 'approved' && center.centerType === "Examination"){
          approved.push(center)
        }
      })
      this.setState({approved, loading:false})
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
          {this.state.approved.map((center)=>
              <li><h4><Link to={'/user/admin/candidate/'+this.seriesId + "/"+center.centerName}>{center.centerName}</Link></h4></li>
          )}
        </ul>
      </div>
    )
  }
  showPageContent(){
      return (
        <div className="col-sm-10 col-sm-offset-1">
          <h3 className='text-info text-center'>Examinations Centers</h3>
          <Paper zDepth={1}>
            <div className='panel panel-default'>
              {this.state.loading ? this.showSpinner() : this.showList()}
            </div>
          </Paper>
          <div className='text-center'>
            <Link to='/user/admin/result/series'>
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
