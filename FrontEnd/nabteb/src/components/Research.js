import React, {Component} from 'react'
import Paper from 'material-ui/Paper'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DashboardHeader from './Dashboard-header'
import RaisedButton from 'material-ui/RaisedButton'
import {Link} from 'react-router-dom'
export default class Research extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  showPageContent(){
      return (
        <div className="col-sm-10 col-sm-offset-1">
          <h3 className='text-info text-center' style={{borderBottomStyle:'solid', borderWidth:'0.5px',margin: 20, padding:10}}>RESEARCH ACTIVITIES</h3>
        <div className='col-sm-12'>
          <Paper zDepth={1}>
            <div className='panel panel-default' >
              <div className='panel-body' style={{fontSize:20}}>

                  <h4  style={{fontFamily:'Times New Roman', lineHeight:1.5, fontSize:20}}>
                    The Decree No. 70 of August 1993 that established the Board empowers it to conduct research into areas relevant to the Board’s examinations and operations. The Board, through its virile Department of Monitoring, Research and Statistics has conducted researches in the following areas:
                     <ol style={{fontFamily:'Times New Roman', margin:10, lineHeight:1.5}}>
                          <li>Predictive Validity Studies of the 1993 National Common Entrance Examination into Federal Technical Colleges in Nigeria as an indicator of candidates performance in the 1997 Mid-Year NTC/NBC Examinations.</li>
                          <li>Evaluation of the performance of National Business and Technical Examinations Board (NABTEB) in the achievement of its objectives (Longitudinal study).</li>
                          <li>Ways of enhancing the Marking of National Business and Technical Certificate Examinations in Nigeria: The NABTEB experience.</li>
                          <li>Forecasting candidates’ enrolment for NABTEB Examinations for the year 2001 to 2003.</li>
                          <li>English Language as a determinant of candidates’ performance in shorthand in the NTC/NBC Examinations.</li>
                          <li>The enrolment pattern and academic performance of female students in science subjects in secondary schools in Nigeria: A case study of schools in Benin City.</li>

                   </ol>
               </h4>
              </div>
            </div>
          </Paper>
          <h3 className='text-info text-center' style={{borderBottomStyle:'solid', borderWidth:'0.5px',margin: 20, padding:10}}>STATISTICS AVAILABLE IN NABTEB’S DATA BANK</h3>
        <div className='col-sm-12'>
          <Paper zDepth={1}>
            <div className='panel panel-default' >
              <div className='panel-body' style={{fontSize:20}}>
                     <ol style={{fontFamily:'Times New Roman', margin:10, lineHeight:1.5}}>
                          <li>Enrollment of candidates for the National Common Entrance Examination into Federal and State Technical Colleges by State by Centre (1993 – 2002).</li>
                          <li>Number of candidates that actually sat for the National Common Entrance Examination (1993 – 2002).</li>
                          <li>Placement/Distribution of candidates into Technical Colleges by State by trade through National Common Entrance Examination (1999 – 2002).</li>
                          <li>Enrolment of candidates for May/June NTC/BTC Exams by Centre by trade (1995 – 2002).</li>
                          <li>Number of candidates that actually sat for the May/June NTC/BTC Examinations (1995 – 2002).</li>
                          <li>Statistics of candidates’ performances in the May/June NTC/BTC Exams (1995 – 2002).</li>
                          <li>Eligibility list of candidates that are qualified for May/June NTC/BTC Certificates (1995 – 2002).</li>
                          <li>Enrolment of candidates for Nov/Dec NTC/BTC and ANTC/ANBC Exams by centre by trade (1995 – 2002).</li>
                          <li>Number of candidates that actually sat for the Nov/Dec NTC/NBC and ANTC/ANBC Exams (1995 – 2002).</li>
                          <li>Statistics of candidates’ performance in the Nov/Dec NTC/NBC and ANTC/ANBC Exams (1995 – 2002).</li>
                          <li>Eligibility list of candidates that are qualified for Nov/Dec NTC/NBC and ANTC/ANBC certficates (1995 – 2002).</li>
                          <li>Statistics of Examination Malpractice for May/June NTC/NBC Exams by State by Trade (1997 – 2002).</li>
                          <li>Statistics of Examination Malpractice for Nov/Dec NTC/NBC and ANTC/ANBC Exams by State by Trade (1997 – 2002).</li>
                          <li>Number of Centres used for May/June NTC/NBC Exams by State (1995 – 2002).</li>
                          <li>Statistics of Examination Malpractice for May/June NTC/NBC Exams by State by Trade (1997 – 2002).</li>
                   </ol>
              </div>
            </div>
          </Paper>
        </div>
        </div>
          <div className='text-center' style={{marginTop:20}}>
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
