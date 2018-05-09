import React, {Component} from 'react'
import Paper from 'material-ui/Paper'
export default class Contact extends Component {
  render() {
    return (
      <div className="col-sm-10 col-sm-offset-1">
        <h3 className='text-info text-center'>Examinations and Fees</h3>
        <Paper zDepth={1}>
          <div className='panel panel-default'>
            <div className='panel-heading'>
              <div className='panel-title'>National Business Certificate/National Technical Certificate</div>
            </div>
            <div className='panel-body'>
              <p>The Board conducts the National Technical Certificate (NTC)examinations, and National Business Certificate (NBC) examinations twice every year. </p>
              <p><b>FEES: #10,000</b></p>
            </div>
          </div>
        </Paper>
        <Paper zDepth={1}>
          <div className='panel panel-default'>
            <div className='panel-heading'>
              <div className='panel-title'>Advanced National Business Certificate/Advanced National Technical Certificate</div>
            </div>
            <div className='panel-body'>
              <p>The Board conducts the Advanced National Technical Certificate (ANTC)examinations, and Advanced National Business Certificate (ANBC) examinations twice every year. </p>
              <p><b>FEES: #12,000</b></p>
            </div>
          </div>
        </Paper>
        <Paper zDepth={1}>
          <div className='panel panel-default'>
            <div className='panel-heading'>
              <div className='panel-title'>Modular Trade Test</div>
            </div>
            <div className='panel-body'>
              <p>MTCE has commence in March 2004. The MTCE will service persons who wish to acquire effective capacity in components of a trade. For example,
              </p>
              <ul>
                <li>Motor Vehicle Mechanics Work Trade (steering and braking system mechanic work module);</li>
                <li>Catering Craft Trade (food preparation module);</li>
                <li>Secretarial Studies Trade (typewriting 35WPM for Typist II module);</li>
                <li>Book Keeping Trade (purchasing and supply module</li>
              </ul>
              <p><b>FEES: #3,000</b></p>
            </div>
          </div>
        </Paper>
        <Paper zDepth={1}>
          <div className='panel panel-default'>
            <div className='panel-heading'>
              <div className='panel-title'>Common Entrance</div>
            </div>
            <div className='panel-body'>
              <p><b>FEES: #1,000</b></p>
            </div>
          </div>
        </Paper>
        <h3 className='text-info text-center'>Examination Center Fees</h3>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>S/N</th>
              <th>Action</th>
              <th>Fees (Naira)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Registration/Verification</td>
              <td>50,000</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Re-verification</td>
              <td>20,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
