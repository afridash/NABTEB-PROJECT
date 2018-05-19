import React, {Component} from 'react'
import Paper from 'material-ui/Paper'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import CircularProgress from 'material-ui/CircularProgress'
import DashboardHeader from './Dashboard-header'
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
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
export default class CBOCenterStatus extends Component {
  constructor (props) {
    super(props)
    this.state = {
      pending:[],
      approved:[],
      loading:true,
      email:'',
      userId:''
    }
  }
  async componentWillMount () {
    var userId = await localStorage.getItem('userId')
    var email = await localStorage.getItem('email')
    this.setState({userId, email})
    this.retrieveCenters(userId)
  }
  retrieveCenters (userId) {
    fetch("http://localhost:8080/centers/owners/"+userId).then(response => response.json()).then(centers => {
      var pending = []
      var approved = []
      centers.forEach((center)=> {
        if (center.status === 'pending') {
          pending.push(center)
        }else if (center.status === 'approved'){
          approved.push(center)
        }
      })
      this.setState({pending, approved, loading:false})
    }).catch(error => {
      alert(error)
      this.setState({loading:false})
    })
  }
  showPendingTable () {
    return (
      <table className="table table-striped"  style={{fontFamily:"Times New Roman", fontSize:18}}>
        <thead>
          <tr>
            <th>S/N</th>
            <th>Name</th>
            <th>Center Name</th>
            <th>Center Address</th>
            <th>Center Type</th>
          </tr>
        </thead>
        <tbody>
          {this.state.pending.length === 0 && <p className='lead text-warning'>No Submitted Centers Found</p>}
          {this.state.pending.map((center, key)=>{
            return (
              <tr key={key}>
                <td>{key+1}</td>
                <td>{center.ownerName}</td>
                <td>{center.centerName}</td>
                <td>{center.location}</td>
                <td>{center.centerType}</td>
              </tr>
            )
          }
          )}
        </tbody>
      </table>
    )
  }
  showApprovedTable () {
    return (
      <table className="table table-striped"  style={{fontFamily:"Times New Roman", fontSize:18}}>
        <thead>
          <tr>
            <th>S/N</th>
            <th>Name</th>
            <th>Center Name</th>
            <th>Center Address</th>
            <th>Center Type</th>
          </tr>
        </thead>
        <tbody>
          {this.state.approved.length === 0 && <p className='lead text-warning'>No Approved Centers Found</p>}
          {this.state.approved.map((center, key)=>{
            return (
              <tr key={key}>
                <td>{key+1}</td>
                <td>{center.ownerName}</td>
                <td>{center.centerName}</td>
                <td>{center.location}</td>
                <td>{center.centerType}</td>
              </tr>
            )
          }
          )}
        </tbody>
      </table>
    )
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
  showPageContent(){
      return (
        <div className="col-sm-10 col-sm-offset-1">
          <h3 className='text-info text-center'></h3>
          <Paper zDepth={1}>
            <div className='panel panel-default'>
              <div className='panel-heading'>
                <div className='text-info text-center' text-center style={{fontSize:24}}>Examinations Centers
                  <Link to='/user/center/addnew' className='pull-right'>
                  <FlatButton
                    labelStyle={{color:'#b71c1c'}}
                    label="Add New"
                  />
                </Link>
              </div>
              </div>
              <div className='panel-body'>

                 <Tabs>
                   <Tab label="Approved" style={{backgroundColor:'#16a085'}}>
                      {this.state.loading ? this.showSpinner() : this.showApprovedTable()}
                  </Tab>
                  <Tab label="Pending" style={{backgroundColor:'#16a085'}}>
                    {this.state.loading ? this.showSpinner() : this.showPendingTable()}
                  </Tab>
            </Tabs>
              </div>
            </div>
          </Paper>
              <div className='text-center'>
                &nbsp; &nbsp;
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
