import React, {Component} from 'react'
import Paper from 'material-ui/Paper'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DashboardHeader from './Dashboard-header'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import {Link} from 'react-router-dom'
import {nigeria} from './states'
import FileReaderInput from 'react-file-reader-input'
const styles = {
  floatingLabelFocusStyle: {
    color: '#16a085',
  },
};
export default class CBOAddNew extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: "",
      states:[],
      locals:[],
      uploadedImages:[],
      stateValue: '',
      lgaValue:'',
      default:'',
      centerValue:'',
    }
    this.uploadedImages = []
  }
  async componentWillMount () {
    var userId = await localStorage.getItem('userId')
    var states = []
    nigeria.forEach((st)=>{states.push(st.state.name)})
    this.setState({states, userId})
  }
  handleSelectState = (event, index, value) => {
    var state = nigeria.filter((current)=> current.state.id === index)
    this.setState({stateValue:value, stateIndex:index, locals:state[0].state.locals, default:'', lgaValue:''})
  }
  handleSelectLGA = (event, index, value) => {
    this.setState({lgaValue:value})
  }
  handleSelectCenter = (event, index, value) => {
    this.setState({centerValue:value})
  }
  handleChange = (event, index, value) => this.setState({value});
  handleTextChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }
  handleFile = (e, results) => {
    var total = 1
    results.forEach(result => {
      if (total <= 4){
        const [e, file] = result; //Retrieve the picture that was selected
        if (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/jpg'){
          this.uploadedImages.push({attachment:e.target.result, mime:file.type, name:file.name})
          this.setState({uploadedImages:this.uploadedImages, startUpload:true})
          total++;
        }
      }
    })
  }
  showPageContent(){
      return (
        <div className="col-sm-10 col-sm-offset-1">
          <h3 className='text-info text-center'>Add New</h3>
          <Paper zDepth={1}>
            <div className='panel panel-default'>
              <div className='panel-body '>
                <div className='col-sm-6 col-sm-offset-3'>
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
                value={this.state.centerValue}
                onChange={this.handleSelectCenter}
                maxHeight={200}
                fullWidth
                >
                <MenuItem value={""} primaryText="Choose Type" />
                <MenuItem value={"Registration"} primaryText="Registration Center" />
                <MenuItem value={"Examination"} primaryText="Examination Center" />
                <MenuItem value={"Practical"} primaryText="Practical Center" />
                <MenuItem value={"CBT"} primaryText="CBT Center" />
              </SelectField>
              <SelectField
                value={this.state.value}
                onChange={this.handleChange}
                maxHeight={200}
                fullWidth
                >
                <MenuItem value={""} primaryText="Choose Specialization" />
                <MenuItem value={"Commercial"} primaryText="Commercial" />
                <MenuItem value={"Technical"} primaryText="Technical" />
              </SelectField>
              <TextField
              type='text'
              hintText="Center Name"
              fullWidth={true}
              name='centerName'
              floatingLabelText="Center Name"
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              underlineFocusStyle={{borderColor: '#16a085'}}
              onChange={this.handleTextChange}
              />
              <TextField
              type='text'
              hintText="Street Address"
              fullWidth={true}
              name='address'
              floatingLabelText="Street Address"
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              underlineFocusStyle={{borderColor: '#16a085'}}
              onChange={this.handleTextChange}
              />
              <TextField
              type='text'
              hintText="Postal Address"
              fullWidth={true}
              name='pcode'
              floatingLabelText="Postal Address"
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              underlineFocusStyle={{borderColor: '#16a085'}}
              onChange={this.handleTextChange}
              />
              <FileReaderInput multiple={true} as="url" id="my-file-input"
                onChange={this.handleFile}>
                <FlatButton
                  label="Choose images (max 4)"
                  buttonStyle={{backgroundColor:'#2980b9'}}
                 />
              </FileReaderInput>
                </div>
                {this.state.uploadedImages.map((image)=>
                  <img src={image.attachment} style={{height:100, width:100, margin:5}} />
                )}
              </div>
            </div>
          </Paper>
          <div className='text-center' style={{margin:20}}>
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
                buttonStyle={{backgroundColor:'#16a085', borderColor:'white'}}
                label="Save"
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
