import React, {Component} from 'react'
import Paper from 'material-ui/Paper'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
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
export default class CBOCenterStatus extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }



  showPageContent(){
      return (
        <div className="col-sm-10 col-sm-offset-1">
          <h3 className='text-info text-center'></h3>
          <Paper zDepth={1}>
            <div className='panel panel-default'>
              <div className='panel-heading'>
                <div className='text-info text-center' text-center style={{fontSize:24}}>Examinations Centers</div>
              </div>
              <div className='panel-body'>
                 <Tabs>
                        <Tab label="Approved" style={{backgroundColor:'#16a085'}}>
                          <ul style={{fontSize:12, fontFamily:'Times New Roman'}}>
                            <li><h4>King of Kings Comm. Coll. Aba 01014 Commercial Ohafia L.G. A. N0. 27 Ugwu-Orji Street, Ifuogo Layout., Amaekpu Ohafia. P.O. Box 4515, Aba</h4></li>
                            <li><h4>Penny wise Comm. Sch Mbawsi 01012 Commercial Isiala Ngwa North. No. 8 Community Road, Mbawsi P.M.B. 2032, Mbawsi</h4></li>
                            <li><h4>Ene’s Sch. Of Comm. Owerrinta 01011 Commercial Isiala Ngwa South  Umuocheana Road, Bye Aba –Owerri Express way Owerrinta. P.O. Box 16, Owerrinta</h4></li>
                          </ul>
                        </Tab>
                        <Tab label="Pending" style={{backgroundColor:'#16a085'}}>
                          <div>
                            <h2 style={styles.headline}>No Pending Centers yet! :)</h2>
                          </div>

                        </Tab>
                        <Tab label="Unsubmitted" style={{backgroundColor:'#16a085'}}>
                          <table class="table table-striped"  style={{fontFamily:"Times New Roman", fontSize:18}}>
                            <thead>
                              <tr>
                                <th>S/N</th>
                                <th>Name</th>
                                <th>Exam Center</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>John Doe</td>
                                <td>Progress Commercial College, Oruruala Oguduasa. 01004 Commercial Isuikwato Along Akara to Aba on Major Road. Box 76, Ovim Oguduassa Isuikwolato</td>
                                
                              <td>
                                <Link to='/user/center/addnew'>
                              <RaisedButton
                                labelStyle={{color:'white'}}
                                buttonStyle={{backgroundColor:'#16a085', borderColor:'white'}}
                                label="Edit"
                              />
                            </Link></td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>Ibrahim Suleman</td>
                                <td>Lilac Comp. Voc. School, Aba 01005 Commercial. Aba North 13c Ukaegbu Road, Ogbor Hill, Aba.  Box 3239, Aba. 082-223167</td>
                                <td>
                                  <Link to='/user/center/addnew'>
                                <RaisedButton
                                  labelStyle={{color:'white'}}
                                  buttonStyle={{backgroundColor:'#16a085', borderColor:'white'}}
                                  label="Edit"
                                />
                              </Link>
                            </td>
                              </tr>
                            </tbody>
                          </table>
                        </Tab>

            </Tabs>
              </div>
            </div>
          </Paper>
              <div className='text-center'>
                <Link to='/user/center/addnew'>
              <RaisedButton
                labelStyle={{color:'white'}}
                buttonStyle={{backgroundColor:'#2980b9', borderColor:'white'}}
                label="Add New"
              />
            </Link>&nbsp; &nbsp;
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
      <MuiThemeProvider><DashboardHeader children={this.showPageContent()} /></MuiThemeProvider>
    );
  }
}
