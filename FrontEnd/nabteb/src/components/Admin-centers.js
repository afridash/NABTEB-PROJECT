import React, {Component} from 'react'
import Paper from 'material-ui/Paper'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import CircularProgress from 'material-ui/CircularProgress'
import DashboardHeader from './Dashboard-header'
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import RaisedButton from 'material-ui/RaisedButton'
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
export default class AdminCenters extends Component {
  constructor (props) {
    super(props)
    this.state = {
      pending:[],
      approved:[],
      loading:true
    }
  }
  componentWillMount () {
    this.retrieveCenters()
  }
  retrieveCenters () {
    fetch("http://localhost:8080/centers").then(response => response.json()).then(centers => {
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
  showSpinner () {
    return (
      <div className="row text-center">
          <br/>
          <br/>
          <CircularProgress size={60} thickness={5} />
      </div>
    )
  }
  showApprovedTable () {
    return (
      <div>
        {this.state.approved.length > 0  ?
      <table class="table table-striped"  style={{fontFamily:"Times New Roman", fontSize:18}}>
        <thead>
          <tr>
            <th>S/N</th>
            <th>Name</th>
            <th>Location Address</th>
            <th>Postal Address</th>
            <th>Type of school</th>
            <th>State</th>
            <th>Local Government</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {this.state.approved.map((center, key)=> {
            return (
              <tr key={key}>
                <td>{key+1}</td>
                <td>{center.ownerName}</td>
                <td>{center.location}</td>
                <td>{center.postalAddress}</td>
                <td>{center.specialization}</td>
                <td>{center.state}</td>
                <td>{center.localGovernment}</td>
                 <td>{center.centerType}</td>
              </tr>
            )
          })}
        </tbody>
      </table> : <p className='lead text-info text-center'>No Approved Centers</p>
    }
      </div>
    )
  }
  showPendingTable () {
    return (
      <div>
        {this.state.pending.length > 0 ?
        <table class="table table-striped"  style={{fontFamily:"Times New Roman", fontSize:18}}>
          <thead>
            <tr>
              <th>S/N</th>
              <th>Name</th>
              <th>Location Address</th>
              <th>Postal Address</th>
              <th>Type of school</th>
              <th>State</th>
              <th>Local Government</th>
              <th>Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.pending.map((center, key)=> {
              return (
                <tr key={key}>
                  <td>{key+1}</td>
                  <td>{center.ownerName}</td>
                  <td>{center.location}</td>
                  <td>{center.postalAddress}</td>
                  <td>{center.specialization}</td>
                  <td>{center.state}</td>
                  <td>{center.localGovernment}</td>
                   <td>{center.centerType}</td>
                   <td>
                     <Link to={'/user/admin/centerinfo/'+center.id}>
                         <RaisedButton
                           labelStyle={{color:'white'}}
                           buttonStyle={{backgroundColor:'#2980b9', borderColor:'white'}}
                           label="View"
                         />
                   </Link>
                   </td>
                </tr>
              )
            })}
          </tbody>
        </table> :
        <p className='lead text-info text-center'>No Pending Centers</p>
      }
      </div>
    )
  }
  showPageContent(){
      return (
        <div className="col-sm-10 col-sm-offset-1">
          <h3 className='text-info text-center'>Centers</h3>
          <Paper zDepth={1}>
            <div className='panel panel-default'>
              <div className='panel-heading'>
                <div className='text-info text-center'>
                  <input type='text' className='form-control' placeholder="Search..." style={{marginBottom:5, textAlign:'center', fontSize:18}} />
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
                {this.state.pending > 50 &&
                      <div className="bs-example text-center">
                        <ul className="pagination">
                            <li><a href="#">&laquo;Previous</a></li>
                            <li><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">Next&raquo;</a></li>
                        </ul>
                     </div> }
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
