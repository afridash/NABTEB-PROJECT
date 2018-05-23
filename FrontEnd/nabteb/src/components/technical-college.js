import React, {Component} from 'react'
import Paper from 'material-ui/Paper'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DashboardHeader from './Dashboard-header'
import RaisedButton from 'material-ui/RaisedButton'
import {Link} from 'react-router-dom'
export default class FSTC extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  showPageContent(){
      return (
        <div className="col-sm-10 col-sm-offset-1">
          <h3 className='text-info text-center' style={{borderBottomStyle:'solid', borderWidth:'0.5px',margin: 20, padding:10}}>Federal Science Technical Colleges </h3>
        <div className='col-sm-12'>
          <Paper zDepth={1}>
            <div className='panel panel-default'>
              <div className='panel-body' style={{fontSize:20}}>
                     <ol style={{fontFamily:'Times New Roman', margin:10}}>
                       <table class="table table-striped"  style={{fontFamily:"Times New Roman", fontSize:18}}>
                         <thead>
                           <tr>
                             <th>State</th>
                             <th>College</th>
                             <th>College Code</th>
                             <th>MJ/ND Code</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr>
                             <td>ABIA</td>
                             <td>FEDERAL SCIENCE TECHNICAL COLLEGE, OHANSO</td>
                             <td>504</td>
                              <td>01013</td>
                           </tr>
                           <tr>
                             <td>ABUJA</td>
                             <td>FEDERAL SCIENCE TECHNICAL COLLEGE, OROZO</td>
                             <td>502</td>
                              <td>02001</td>
                           </tr>
                           <tr>
                             <td>ADAMAWA</td>
                             <td>FEDERAL SCIENCE TECHNICAL COLLEGE, MICHIKA</td>
                             <td>519</td>
                              <td>#3017</td>
                           </tr>
                           <tr>
                             <td>AKWA IBOM</td>
                             <td>FEDERAL SCIENCE TECHNICAL COLLEGE , OFOT, UYO</td>
                             <td>505</td>
                              <td>04002</td>
                           </tr>
                           <tr>
                             <td>ANAMBRA</td>
                             <td>FEDERAL SCIENCE TECHNICAL COLLEGE, AWKA</td>
                             <td>516</td>
                              <td>05001</td>
                           </tr>
                           <tr>
                             <td>BAYELSA</td>
                             <td>FEDERAL SCIENCE TECHNICAL COLLEGE , TUNGBO</td>
                             <td>515</td>
                              <td>#07003</td>
                           </tr>
                           <tr>
                             <td>BENUE</td>
                             <td>FEDERAL SCIENCE TECHNICAL COLLEGE, OTUKPO</td>
                             <td>507</td>
                              <td>08002</td>
                           </tr>
                           <tr>
                             <td>BORNO</td>
                             <td>FEDERAL SCIENCE TECHNICAL COLLEGE, LASSA</td>
                             <td>511</td>
                              <td>09003</td>
                           </tr>
                           <tr>
                             <td>EDO</td>
                             <td>FEDERAL SCIENCE TECHNICAL COLLEGE,UROMI</td>
                             <td>514</td>
                              <td>13002</td>
                           </tr>
                           <tr>
                             <td>EKITI</td>
                             <td>FEDERAL SCIENCE TECHNICAL COLLEGE,USI-EKITI	</td>
                             <td>517</td>
                              <td>14018</td>
                           </tr>
                           <tr>
                             <td>KADUNA</td>
                             <td>FEDERAL SCIENCE TECHNICAL COLLEGE, KAFANCHA	</td>
                             <td>515</td>
                              <td>19003</td>
                           </tr>
                           <tr>
                             <td>KATSINA</td>
                             <td>FEDERAL SCIENCE TECHNICAL COLLEGE , KATSINA	</td>
                             <td>525</td>
                              <td></td>
                           </tr>
                           <tr>
                             <td>KEBBI</td>
                             <td>FEDERAL SCIENCE TECHNICAL COLLEGE , ZURU	</td>
                             <td>510</td>
                              <td>22002</td>
                           </tr>
                           <tr>
                             <td>LAGOS</td>
                             <td>FEDERAL SCIENCE TECHNICAL COLLEGE, YABA	</td>
                             <td>501</td>
                              <td>25001</td>
                           </tr>
                           <tr>
                             <td>NASARAWA</td>
                             <td>FEDERAL SCIENCE TECHNICAL COLLEGE , DOMA</td>
                             <td>520</td>
                              <td>26014</td>
                           </tr>
                           <tr>
                             <td>NIGER</td>
                             <td>FEDERAL SCIENCE TECHNICAL COLLEGE, SHIRORO	</td>
                             <td>508</td>
                              <td>27004</td>
                           </tr>
                           <tr>
                             <td>OGUN	</td>
                             <td>FEDERAL SCIENCE TECHNICAL COLLEGE, IJEBU MUSHIN	</td>
                             <td>512</td>
                              <td>28011</td>
                           </tr>
                           <tr>
                             <td>ONDO</td>
                             <td>FEDERAL SCIENCE TECHNICAL COLLEGE, IKARE AKOKO	</td>
                             <td>513</td>
                              <td>29017</td>
                           </tr>
                           <tr>
                             <td>OSUN</td>
                             <td>FEDERAL SCIENCE TECHNICAL COLLEGE, ILESHA	</td>
                             <td>503</td>
                              <td>30003</td>
                           </tr>
                           <tr>
                             <td>RIVERS</td>
                             <td>FEDERAL SCIENCE TECHNICAL COLLEGE , AHOADA	</td>
                             <td>518</td>
                              <td>33011</td>
                           </tr>
                           <tr>
                             <td>TARABA	</td>
                             <td>FEDERAL SCIENCE TECHNICAL COLLEGE, JALINGO	</td>
                             <td>509</td>
                              <td>35001</td>
                           </tr>
                         </tbody>
                       </table>
                   </ol>
              </div>
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
