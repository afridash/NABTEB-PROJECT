import React, {Component} from 'react'
import Paper from 'material-ui/Paper'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DashboardHeader from './Dashboard-header'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import {Link} from 'react-router-dom'
const styles = {
  floatingLabelFocusStyle: {
    color: '#16a085',
  },
};
export default class CBOAddNew extends Component {
  constructor (props) {
    super(props)
    this.state = {value: 1};
  }
  handleChange = (event, index, value) => this.setState({value});
  showPageContent(){
      return (
        <div className="col-sm-10 col-sm-offset-1">
          <h3 className='text-info text-center'>Add New</h3>
          <Paper zDepth={1}>
            <div className='panel panel-default'>
              <div className='panel-body '>
                <div className='col-sm-6 col-sm-offset-3'>
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
                <MenuItem value={1} primaryText="Choose type of school" />
                <MenuItem value={2} primaryText="Commercial" />
                <MenuItem value={3} primaryText="Technical" />
              </SelectField>
              <TextField
              type='text'
              hintText="Center Name"
              fullWidth={true}
              name='Center Name'
              floatingLabelText="Center Name"
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              underlineFocusStyle={{borderColor: '#16a085'}}
              />
              <TextField
              type='text'
              hintText="Location Address"
              fullWidth={true}
              name='Location Address'
              floatingLabelText="Location Address"
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              underlineFocusStyle={{borderColor: '#16a085'}}
              />

              <TextField
              type='text'
              hintText="Postal Address"
              fullWidth={true}
              name='Postal Address'
              floatingLabelText="Postal Address"
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              underlineFocusStyle={{borderColor: '#16a085'}}
              />
                </div>
              </div>
            </div>
          </Paper>
          <div className='text-center'>
            <Link to='/user/center/payment'>
            <RaisedButton
              labelStyle={{color:'white'}}
              buttonStyle={{backgroundColor:'#2980b9', borderColor:'white'}}
              label="Pay Now"

            />
          </Link>&nbsp;&nbsp;
            <Link to='/user/center/status'>
            <RaisedButton
              labelStyle={{color:'white'}}
                buttonStyle={{backgroundColor:'#2980b9', borderColor:'white'}}
                label="Pay Later"
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
