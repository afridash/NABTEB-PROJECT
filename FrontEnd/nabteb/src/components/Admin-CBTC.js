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
export default class AdminCBTC extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }



  showPageContent(){
      return (
        <div className="col-sm-10 col-sm-offset-1">
          <h3 className='text-info text-center'>Examinations Centers</h3>
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
                          <ol style={{fontSize:20, fontFamily:'Times New Roman'}}>
                            <li><h4><Link to='/user/admin/centerinfo' style={{color:'black'}}>King of Kings Comm. Coll. Aba 01014 Commercial Ohafia L.G. A. N0. 27 Ugwu-Orji Street, Ifuogo Layout., Amaekpu Ohafia. P.O. Box 4515, Aba</Link></h4></li>
                            <li><h4><Link to='/user/admin/centerinfo' style={{color:'black'}}>Penny wise Comm. Sch Mbawsi 01012 Commercial Isiala Ngwa North. No. 8 Community Road, Mbawsi P.M.B. 2032, Mbawsi</Link></h4></li>
                            <li><h4><Link to='/user/admin/centerinfo' style={{color:'black'}}>Ene’s Sch. Of Comm. Owerrinta 01011 Commercial Isiala Ngwa South  Umuocheana Road, Bye Aba –Owerri Express way Owerrinta. P.O. Box 16, Owerrinta</Link></h4></li>
                          </ol>
                        </Tab>
                        <Tab label="Pending" style={{backgroundColor:'#16a085'}}>
                          <div>
                            <h2 style={styles.headline}>No Pending Centers yet! :)</h2>
                          </div>
                        </Tab>
                </Tabs>
                      <div className="bs-example text-center">
                        <ul className="pagination">
                            <li><a href="#">&laquo;Previous</a></li>
                            <li><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">Next&raquo;</a></li>
                        </ul>
                     </div>
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
