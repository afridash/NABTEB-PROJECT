import React, { Component } from 'react'
import '../App.css'
import {Link} from 'react-router-dom'
import Paper from 'material-ui/Paper'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import DashboardHeader from './Dashboard-header'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
const styles = {
  button:{
    float:'right',
    margin:5,
    padding:10
  },
  box:{
      boxShadow: '5px 5px 5px #888888',
    backgroundColor:'white',
  },
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  floatingLabelFocusStyle: {
    color: 'green',
  },
  customWidth: {
    width: 600,
  },
};
export default class ExaminationDetails extends Component {
  constructor (props) {
    super(props)
    this.state = {value: 1};
  }
  handleChange = (event, index, value) => this.setState({value});
  showPageContent () {
    return (
      <div className='col-sm-10 col-sm-offset-1' style={{padding:10}}>
        <div className='panel-body'>
          <Paper zDepth={2} rounded>
            <div className='row'>
              <div className='col-sm-12'>
                <p className='text-info text-center' style={{fontSize:30, marginTop:20}}>Examination Details</p>
                <div className='col-sm-8 col-sm-offset-2' tyle={{padding:10}}>
                    <SelectField
                      value={this.state.value}
                      onChange={this.handleChange}
                      maxHeight={200}
                      fullWidth
                      >
                    <MenuItem value={1} primaryText="Choose a State" />
                    <MenuItem value={2} primaryText="Lagos" />
                    <MenuItem value={3} primaryText="Calabar" />
                    <MenuItem value={4} primaryText="Imo" />
                    <MenuItem value={5} primaryText="Nasarawa" />
                    <MenuItem value={6} primaryText="Kano" />
                    <MenuItem value={7} primaryText="Imo" />
                    <MenuItem value={8} primaryText="Kogi" />
                    <MenuItem value={9} primaryText="Bayelsa" />
                    <MenuItem value={10} primaryText="Benue" />
                  </SelectField>
                  <SelectField
                    value={this.state.value}
                    onChange={this.handleChange}
                    maxHeight={200}
                    fullWidth
                    >
                    <MenuItem value={1} primaryText="Choose your local government" />
                    <MenuItem value={2} primaryText="Nembe" />
                    <MenuItem value={3} primaryText="Ijaw" />
                  </SelectField>
                  <SelectField
                    value={this.state.value}
                    onChange={this.handleChange}
                    maxHeight={200}
                    fullWidth
                    >
                    <MenuItem value={1} primaryText="Choose an Exam Center" />
                    <MenuItem value={2} primaryText="Micheal Primary school" />
                    <MenuItem value={3} primaryText="Insititute of Technology, Lokoja" />
                  </SelectField>
                  <SelectField
                    value={this.state.value}
                    onChange={this.handleChange}
                    maxHeight={200}
                    fullWidth
                    >
                    <MenuItem value={1} primaryText="Choose an Exam Type" />
                    <MenuItem value={2} primaryText="National Business Certificate" />
                    <MenuItem value={3} primaryText="National Technical Certificate" />
                    <MenuItem value={4} primaryText="Advanced National Technical Certificate" />
                    <MenuItem value={5} primaryText="Modular Trade Test" />
                    <MenuItem value={6} primaryText="Common Entrance" />
                  </SelectField>
                  <SelectField
                    value={this.state.value}
                    onChange={this.handleChange}
                    maxHeight={200}
                    fullWidth
                    >
                    <MenuItem value={1} primaryText="Choose an Trade Title" />
                    <MenuItem value={2} primaryText="Agricultural Equipment and Implement Mechanic Works (Advanced)" />
                    <MenuItem value={3} primaryText="Motor Vehicle Mechanics Works (Advanced)" />
                    <MenuItem value={4} primaryText="Electrical Installation & Maintenance Works(Advanced)" />
                    <MenuItem value={5} primaryText="Fabrication and Welding(Advanced)" />
                    <MenuItem value={6} primaryText="Common Entrance" />
                  </SelectField>
                </div>
                <div className='col-sm-12'>
                  <div className='text-center' style={{margin:10}}>
                    <Link to='/dashboard'>
                    <RaisedButton
                      labelStyle={{color:'white'}}
                        buttonStyle={{backgroundColor:'#16a085', borderColor:'white'}}
                        label="Submit"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Paper>
      </div>
      </div>
    )
  }
  render() {
    return (
      <MuiThemeProvider><DashboardHeader children={this.showPageContent()} /></MuiThemeProvider>
    );
  }
}
