import React, { Component } from 'react'
import '../App.css'
import {Link, Redirect} from 'react-router-dom'
import Paper from 'material-ui/Paper'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import DashboardHeader from './Dashboard-header'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import {nigeria} from './states'

export default class ExaminationDetails extends Component {
  constructor (props) {
    super(props)
    this.state = {
      stateValue: '',
      lgaValue:'',
      seriesValue:'',
      states:[],
      locals:[],
      default:'',
      centers:[],
      centerValue:'',
      examValue:'',
      tradeValue:'',
      userId:'',
      series:[],
    }
    this.centers = []
  }
  async componentWillMount () {
    var userId = await localStorage.getItem('userId')
    var states = []
    nigeria.forEach((st)=>{states.push(st.state.name)})
    this.setState({states, userId})
    this.retrieveInfo(userId)
    this.retrieveSeries ()
    this.retrieveCenters ()
  }
  retrieveInfo (userId) {
    var url = 'http://localhost:8080/users/exams/'+userId
    fetch(url).then(response => response.json()).then((user)=>{
        if (!user['status']){
          this.setState({
            uploaded:true,
            stateValue:user.state,
            default:user.localGovernment,
            lgaValue:user.localGovernment,
            examValue:user.examType,
            centerValue:user.examCenter,
            tradeValue:user.examTitle,
            seriesValue:user.series
        })
        }
        }).catch(error => {
          this.setState({error:'Network error, could not retrieve info',loading:false})
      })
    fetch('http://localhost:8080/progress/'+userId).then(response => response.json()).then((user)=>{
          if (!user['status']){
            this.setState(user)
          }
          }).catch(error => {

        })
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
  retrieveCenters () {
    fetch("http://localhost:8080/centers").then(response => response.json()).then(centers => {
      centers.forEach((center)=> {
        if (center.status === 'approved' && center.centerType === "Examination"){
          this.centers.push(center)
        }
      })
      this.setState({centers:this.centers, loading:false})
    }).catch(error => {
      alert(error)
      this.setState({loading:false})
    })
  }
  handleSelectState = (event, index, value) => {
    var state = nigeria.filter((current)=> current.state.id === index)
    this.setState({stateValue:value, stateIndex:index, locals:state[0].state.locals})
  }
  handleSelectLGA = (event, index, value) => {
    var centers = this.centers.filter((center)=>center.localGovernment.toLowerCase() === value.toLowerCase())
    this.setState({lgaValue:value, centers})
  }
  handleSelectCenter = (event, index, value) => {
    this.setState({centerValue:value})
  }
  handleSelectExam = (event, index, value) => {
    this.setState({examValue:value})
  }
  handleSelectTrade = (event, index, value) => {
    this.setState({tradeValue:value})
  }
  handleSelectSeries = (event, index, value) => {
    this.setState({seriesValue:value})
  }
  handleSubmit = (event) => {
    event.preventDefault()
    var data = {
      id:Number(this.state.userId),
      state:this.state.stateValue,
      localGovernment:this.state.lgaValue,
      examCenter:this.state.centerValue,
      examType:this.state.examValue,
      examTitle:this.state.tradeValue,
      series:this.state.seriesValue
    }
    var url = 'http://localhost:8080/users/exams'
    fetch(url, {
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST',
      }).then(response => response.json()).then((user)=>{
        this.updateProgress()
        }).catch(error => {
          this.setState({error:'Examination details could not be saved',loading:false})
      })
  }
  handleUpdate = (event) => {
    event.preventDefault()
    var data = {
      id:Number(this.state.userId),
      state:this.state.stateValue,
      localGovernment:this.state.lgaValue,
      examCenter:this.state.centerValue,
      examType:this.state.examValue,
      examTitle:this.state.tradeValue,
      series:this.state.seriesValue
    }
    var url = 'http://localhost:8080/users/exams/'+this.state.userId
    fetch(url, {
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json'
      },
      method: 'PUT',
      }).then(response => response.json()).then((user)=>{
        this.updateProgress()
        }).catch(error => {
          this.setState({error:'Examination details could not be saved',loading:false})
      })
  }
  updateProgress () {
    var data = {
      id:this.state.userId,
      finishedPayements:this.state.finishedPayements,
      finishedPersonal:this.state.finishedPersonal,
      finishedBiometrics:this.state.finishedBiometrics,
      finishedExaminationsDetails:true,
      submitted:this.state.submitted
    }
    fetch("http://localhost:8080/progress/"+this.state.userId, {
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json'
      },
      method:'PUT',
    }).then(()=> {
      alert("Exam Details Successfully Saved")
      this.setState({redirect:true})
    }).catch(error => {
          this.setState({error:'Progress not updated',loading:false})
      })
  }
  showPageContent () {
    return (
      <div className='col-sm-10 col-sm-offset-1' style={{padding:10}}>
        <div className='panel-body'>
          <Paper zDepth={2} rounded>
            <div className='row'>
              <form>
                <div className='col-sm-12'>
                  <p className='text-info text-center' style={{fontSize:30, marginTop:20}}>Examination Details</p>
                  <div className='col-sm-8 col-sm-offset-2' tyle={{padding:10}}>
                      <SelectField
                        value={this.state.stateValue}
                        onChange={this.handleSelectState}
                        maxHeight={200}
                        fullWidth
                        >
                      <MenuItem value={''} primaryText="Choose State" />
                      {this.state.states.map((name, key)=>
                        <MenuItem key={key} value={name} primaryText={name} />
                      )}
                    </SelectField>
                    <SelectField
                      value={this.state.lgaValue}
                      onChange={this.handleSelectLGA}
                      maxHeight={200}
                      fullWidth
                      >
                        {this.state.default !=='' ?
                        <MenuItem value={this.state.default} primaryText={this.state.default} />
                        :
                        <MenuItem value={this.state.default} primaryText="Choose LGA" />}

                      {this.state.locals.map((local, key)=>
                        <MenuItem key={key} value={local.name} primaryText={local.name} />
                      )}
                    </SelectField>
                    <SelectField
                      value={this.state.seriesValue}
                      onChange={this.handleSelectSeries}
                      maxHeight={200}
                      fullWidth
                      >
                      <MenuItem value={''} primaryText="Choose Exam Series" />
                      {this.state.series.map((s)=>
                        <MenuItem value={s.name} primaryText={s.name} />
                      )}
                    </SelectField>
                    <SelectField
                      value={this.state.centerValue}
                      onChange={this.handleSelectCenter}
                      maxHeight={200}
                      fullWidth
                      >
                      <MenuItem value={''} primaryText="Choose Exam Center" />
                      {this.state.centers.map((center, key)=>
                        <MenuItem value={center.centerName} primaryText={center.centerName} />
                      )}
                    </SelectField>
                    <SelectField
                      value={this.state.examValue}
                      onChange={this.handleSelectExam}
                      maxHeight={200}
                      fullWidth
                      >
                      <MenuItem value={''} primaryText="Choose Exam Type" />
                      <MenuItem value={"National Business Certificate"} primaryText="National Business Certificate" />
                      <MenuItem value={"National Technical Certificate"} primaryText="National Technical Certificate" />
                      <MenuItem value={"Advanced National Technical Certificate"} primaryText="Advanced National Technical Certificate" />
                      <MenuItem value={"Advanced National Business Certificate"} primaryText="Advanced National Business Certificate" />
                      <MenuItem value={"Modular Trade Test"} primaryText="Modular Trade Test" />
                      <MenuItem value={"Common Entrance"} primaryText="Common Entrance" />
                    </SelectField>
                    <SelectField
                      value={this.state.tradeValue}
                      onChange={this.handleSelectTrade}
                      maxHeight={200}
                      fullWidth
                      >
                      <MenuItem value={''} primaryText="Choose Trade Title" />
                      <MenuItem value={"Agricultural Equipment and Implement Mechanic Works (Advanced)"} primaryText="Agricultural Equipment and Implement Mechanic Works (Advanced)" />
                      <MenuItem value={"Motor Vehicle Mechanics Works (Advanced)" } primaryText="Motor Vehicle Mechanics Works (Advanced)" />
                      <MenuItem value={"Electrical Installation & Maintenance Works(Advanced)"} primaryText="Electrical Installation & Maintenance Works(Advanced)" />
                      <MenuItem value={"Fabrication and Welding(Advanced)"} primaryText="Fabrication and Welding(Advanced)" />
                      <MenuItem value={"Common Entrance"} primaryText="Common Entrance" />
                    </SelectField>
                  </div>
                  <div className='col-sm-12'>
                    <div className='text-center' style={{margin:10}}>
                      {this.state.uploaded ?
                      <RaisedButton
                        labelStyle={{color:'white'}}
                          buttonStyle={{backgroundColor:'#16a085', borderColor:'white'}}
                          label="Update"
                          type='submit'
                          onClick={this.handleUpdate}
                        />
                      :
                      <RaisedButton
                        labelStyle={{color:'white'}}
                          buttonStyle={{backgroundColor:'#16a085', borderColor:'white'}}
                          label="Submit"
                          type='submit'
                          onClick={this.handleSubmit}
                        />
                    }
                    &nbsp;&nbsp;
                    <Link to='/dashboard'>
                    <RaisedButton
                      labelStyle={{color:'white'}}
                      buttonStyle={{backgroundColor:'#e74c3c', borderColor:'white'}}
                      label="Close"
                    />
                    </Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </Paper>
      </div>
      {this.state.redirect && <Redirect to={'/dashboard'} push />}
      </div>
    )
  }
  render() {
    return (
      <MuiThemeProvider><DashboardHeader children={this.showPageContent()} /></MuiThemeProvider>
    );
  }
}
