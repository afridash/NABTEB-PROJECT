import React, {Component} from 'react'
import Paper from 'material-ui/Paper'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import CircularProgress from 'material-ui/CircularProgress'
import moment from 'moment'
import DashboardHeader from './Dashboard-header'
import {Link} from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton'
export default class AdminCandidate extends Component {
  constructor (props) {
    super(props)
    this.seriesId = this.props.match.params.series
    this.centersId = this.props.match.params.center
    this.state = {
      loading:true,
      users:[],
      tempSeries:this.seriesId
    }
    this.users = []
  }
  componentWillMount () {
    this.seriesId = this.seriesId.replace(" ", "-")
    this.retrieveCandidates()
  }
  retrieveCandidates () {
    fetch("http://localhost:8080/registered/search/"+this.seriesId+"/"+this.centersId)
    .then(response => response.json())
    .then(users => {
      users.forEach((user)=> {
        fetch("http://localhost:8080/users/exams/"+user.id)
        .then(response => response.json())
         .then(exams => {
           this.users.push({fullName:user.fullName, registrationDate:user.registrationDate, examCenter:user.examCenter, examType:user.examType, examTitle:exams.examTitle, userId:user.id})
           this.setState({users:this.users, loading:false})
         }).catch(error => {
           alert(error)
         })
      })
      if (users.length === 0) this.setState({loading:false})
    }).catch(err => {
      alert(err)
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
  showTable () {
    return (
      <div>
        {this.state.users.length > 0 ? <table class="table table-striped">
          <thead>
            <tr>
              <th>S/N</th>
              <th>Name</th>
              <th>Exam Type</th>
              <th>Exam Center</th>
              <th>Exam Title</th>
              <th>Registration Date</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user, key)=>
              <tr key={key}>
                <td>{key+1}</td>
                <td ><Link to={'/user/admin/details/'+this.state.tempSeries+"/"+this.centersId+"/"+user.userId} >{user.fullName}</Link></td>
                <td>{user.examType}</td>
                <td>{user.examCenter}</td>
                <td>{user.examTitle}</td>
                <td>{moment(Number(user.registrationDate)).format('ll')}</td>
              </tr>
            )}
          </tbody>
        </table>: <p className='text-center text-info lead'>No Registered Candidates</p>}
      </div>
    )
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
                    {this.state.loading ? this.showSpinner() : this.showTable()}

                  {this.state.users.length > 50 && <div className="bs-example text-center">
                      <ul className="pagination">
                          <li><a href="#">&laquo;Previous</a></li>
                          <li><a href="#">1</a></li>
                          <li><a href="#">2</a></li>
                          <li><a href="#">3</a></li>
                          <li><a href="#">Next&raquo;</a></li>
                      </ul>
                  </div>}
              </div>
            </div>

          </Paper>
          <div className='text-center' style={{marginTop:20}}>
            <Link to={'/user/admin/centers/'+this.seriesId}>
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
