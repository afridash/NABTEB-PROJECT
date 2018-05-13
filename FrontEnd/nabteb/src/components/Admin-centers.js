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
export default class AdminCenters extends Component {
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
                            <table class="table table-striped"  style={{fontFamily:"Times New Roman", fontSize:18}}>
                              <thead>
                                <tr>
                                  <th>S/N</th>
                                  <th>Name</th>
                                  <th>Location Address</th>
                                  <th>Postal Address</th>
                                  <th>Type of school</th>
                                  <th>Local Government</th>
                                  <th>State</th>
                                  <th>Center Number</th>
                                  <th>Type</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1</td>
                                  <td><Link to='/user/admin/centerinfo' style={{color:'black'}}>John Doe</Link></td>
                                  <td>Progress Commercial College, Oruruala Oguduasa. Isuikwato Along Akara to Aba on Major Road</td>
                                  <td>Box 76</td>
                                  <td>Commercial</td>
                                  <td>Ovim Oguduassa Isuikwolato</td>
                                  <td>Aba</td>
                                  <td>01004</td>
                                   <td>CBTC</td>
                                </tr>
                                <tr>
                                  <td>2</td>
                                  <td><Link to='/user/admin/centerinfo' style={{color:'black'}}>Ibrahim Suleman</Link></td>
                                  <td>Lilac Comp. Voc. School, Ukaegbu Road, Ogbor Hill</td>
                                  <td>Box 3239</td>
                                  <td>Commercial</td>
                                  <td>Aba North 13c</td>
                                  <td>Aba</td>
                                  <td>01005</td>
                                   <td>PC</td>
                                </tr>

                              </tbody>
                            </table>
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
      <MuiThemeProvider><DashboardHeader children={this.showPageContent()} /></MuiThemeProvider>
    );
  }
}
