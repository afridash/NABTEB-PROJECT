import React, {Component} from 'react'
import Paper from 'material-ui/Paper'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DashboardHeader from './Dashboard-header'
import RaisedButton from 'material-ui/RaisedButton'
import {Link} from 'react-router-dom'
export default class CBOCenters extends Component {
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
                <div className='panel-title' text-center style={{fontSize:18}}>List of Exam Centers</div>
              </div>
              <div className='panel-body'>
                {/* <ul>
                  <li><h4><Link to='/user/candidates'>Plot 2, Garki estate Near Ammsco platinum resident, No1. Garki, Abuja</Link></h4></li>
                  <li><h4><Link to='/user/candidates'>No.121, Jaycee plaza, Otitio road, Yengoa, Bayelsa state</Link></h4></li>
                  <li><h4><Link to='/user/candidates'>No.121, Jaycee plaza, Otitio road, Yengoa, Bayelsa state</Link></h4></li>
                </ul> */}
                <ol>
                  <table class="table table-striped"  style={{fontFamily:"Times New Roman", fontSize:18}}>
                    <thead>
                      <tr>
                        <th>S/N</th>
                        <th>Location Address</th>
                        <th>Postal Address</th>
                        <th>Type of school</th>
                        <th>Local Government</th>
                        <th>State</th>
                        <th>Center Number</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td><Link to='/user/candidates'>Progress Commercial College</Link></td>
                        <td>Box 76</td>
                        <td>Commercial</td>
                        <td>Ovim Oguduassa Isuikwolato</td>
                        <td>Aba</td>
                        <td>01004</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td><Link to='/user/candidates' >Lilac Comp. Voc. School</Link></td>
                        <td>Box 3239</td>
                        <td>Commercial</td>
                        <td>Aba North 13c</td>
                        <td>Aba</td>
                        <td>01005</td>
                      </tr>

                    </tbody>
                  </table>
                </ol>
              </div>
            </div>
          </Paper>
          <div className='text-center'>
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
      <MuiThemeProvider><DashboardHeader materials={true} children={this.showPageContent()} /></MuiThemeProvider>
    );
  }
}
