import React, {Component} from 'react'
import Paper from 'material-ui/Paper'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DashboardHeader from './Dashboard-header'
import RaisedButton from 'material-ui/RaisedButton'
import {Link} from 'react-router-dom'
export default class ExamFees extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  showPageContent(){
      return (
        <div className="col-sm-10 col-sm-offset-1">
          <h3 className='text-info text-center' style={{borderBottomStyle:'solid', borderWidth:'0.5px',margin: 20, padding:10}}>EXAMINATION FEES</h3>
        <div className='col-sm-12'>
          <Paper zDepth={1}>
            <div className='panel panel-default' >
              <div className='panel-heading'>
                <div className='text-info text-center'>
                  <h3>
                  FINANCIAL TARIFFS FOR NABTEB SERVICES AND LIST OF APPROVED BANKERS FOR PURCHASE OF DRAFT
                </h3>
                </div>
              </div>
              <div className='panel-body' style={{fontSize:20}}>
                     <ol style={{fontFamily:'Times New Roman', margin:10}}>
                       <table class="table table-striped"  style={{fontFamily:"Times New Roman", fontSize:18}}>
                         <thead>
                           <tr>
                             <th>S/N</th>
                             <th>Description</th>
                             <th>Amount</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr>
                             <td>1</td>
                             <td>Centre Inspection</td>
                             <td>#50,000</td>
                           </tr>
                           <tr>
                             <td>2</td>
                             <td>Centre Reinspection</td>
                             <td>#20,00</td>
                           </tr>
                           <tr>
                             <td>3</td>
                             <td>Contractor Registration Form</td>
                             <td>#500</td>
                           </tr>

                         </tbody>
                       </table>
                   </ol>
              </div>
            </div>
            <div className='text-center'>
              <img src={require('../images/remita.png')} style={{ height:'50%', width:'50%'}} />
            </div>
          </Paper>
        </div>
        <div className='text-center' style={{margin:100}}>
          <Link to='/'>
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
