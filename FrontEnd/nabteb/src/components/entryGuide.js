import React, {Component} from 'react'
import Paper from 'material-ui/Paper'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DashboardHeader from './Dashboard-header'
import RaisedButton from 'material-ui/RaisedButton'
import {Link} from 'react-router-dom'
export default class EntryGuide extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  showPageContent(){
      return (
        <div className="col-sm-10 col-sm-offset-1">
          <h3 className='text-info text-center' style={{borderBottomStyle:'solid', borderWidth:'0.5px',margin: 20, padding:10}}>ENTRY GUIDE FOR PRINCIPALS/PROPRIETORS</h3>
          <h4 style={{fontFamily:'Times New Roman', lineHeight:1.5, fontSize:20}}>
            This entry guide is issued with other documents for the May/June NBC/NTC Certificate Examinations. It contains instructions for easy completion of the Entry Documents. It should be carefully studied to ensure that the correct entry schedule is used for business and technical candidates for preliminary enrolment before the actual on-line registration. Principals and Heads of Institutions are advised to be particularly careful when making entries in order to ensure that information supplied by them are adequate and correct in every detail, as the Board will not entertain requests for corrections on entries, which have been submitted. To ensure error free entries, the entries after completion should be read to the candidates before submission.
          </h4>
          <Paper zDepth={1}>
            <div className='panel panel-default' style={{marginTop:20}}>
              <div className='panel-heading'>
                <div className='panel-title text-center' style={{fontSize:18}}>Compulsory and Elective Subjects</div>
              </div>
              <div className='panel-body' style={{fontSize:20}}>
                <ol style={{fontFamily:'Times New Roman'}}>
                  <li>Technical Candidates</li>
                  <li>Business Candidates</li>
                  <li>English Language (O01)</li>
                  <li>Mathematics (O02)</li>
                  <li>Physics (O04)</li>
                  <li>Chemistry (O05) are compulsory for Technical Candidates while</li>
                  <li>ICT – Information and Communications Technology (O08);</li>
                  <li>Economics (O03) and Literature-in-English (O07) are elective for them.</li>
                  <h4  style={{fontFamily:'Times New Roman', lineHeight:1.5, fontSize:20,  marginLeft:-20}}>
                    Candidates for the under listed Trades can offer Biology as a trade-related subject, but other technical candidates are not allowed to offer Biology. The trades are:
                    Catering Craft Practice (34O), Ladies Garment Making (33O), Men’s Garment Making (32O), Cosmetology (31O), Fisheries (20O), Animal Husbandry (18O)

                    Introduction to Building Construction (211) is a compulsory subject for candidates offering the under listed trades:-
                    Carpentry and Joinery (22O), Painting and Decorating (25O), Plumbing and Pipefitting (26O), Draughtsmanship Craft Practice (27O).
                  </h4>
                </ol>
              </div>
            </div>
          </Paper>
          <Paper zDepth={1}>
            <div className='panel panel-default' style={{marginTop:20}}>
              <div className='panel-heading'>
                <div className='panel-title text-center' style={{fontSize:18}}>Entry Schedule</div>
              </div>
              <div className='panel-body' style={{fontSize:20}}>
                <h4  style={{fontFamily:'Times New Roman', lineHeight:1.5, fontSize:20}}>
                  There are three types of Entry Schedules, namely:
                </h4>
                <ol style={{fontFamily:'Times New Roman'}}>
                  <li>EA 60: This is for registration of candidates offering Technical Trades.</li>
                  <li>EA 61: This is for the registration of candidates offering Business Trades.</li>
                  <li>EA 62: This is for the registration of candidates offering General Education Subjects only.</li>

                  <h4  style={{fontFamily:'Times New Roman', lineHeight:1.5, fontSize:20,  marginLeft:-20}}>
                    <b>NOTE: The Entry Schedules are obtainable from NABTEB State Offices nationwide.</b>
                  </h4>
                </ol>
              </div>
            </div>
          </Paper>
          <Paper zDepth={1}>
            <div className='panel panel-default' style={{marginTop:20}}>
              <div className='panel-heading'>
                <div className='panel-title text-center' style={{fontSize:18}}>How To Make Entries in the Entry Schedule (i.e EA 60, 61, 62)</div>
              </div>
              <div className='panel-body' style={{fontSize:20}}>
                <h4  style={{fontFamily:'Times New Roman', lineHeight:1.5, fontSize:20}}>
                  <p><b>State:</b> (Space No.1): Indicate the State in which the examination is to be taken by candidate.</p>
                  <p><b>Year:</b>  (Space No. 2): Indicate the year in which examination is to be taken by candidates.</p>
                  <p><b>Date:</b>   (Space No. 3): Indicate the date the entry schedule was filled.</p>
                  <p><b>Centre Code: </b>   (Space No. 4): Indicate the centre code of the College/School.</p>
                  <p><b>College Name: </b>   (Space No. 5): indicate the college name, address and telephone number.</p>
                  <p><b>Numbering of Entry Schedules:</b>  (Space No. 6): Indicate the number of sheets used e.g. if four sheets were used for registration, they should be numbered 1 of 4, 2 of 4, 3 of 4 and 4 of 4.</p>
                  <p><b>Candidate’s Examination Number: </b> (Column 1) should be left blank until candidates’ examination numbers are ascertained from the internet. The numbers should later be filled into the column in line with those in the internet. On no account should the examination number on the entry schedule be different from the one assigned on the internet.</p>
                  <p><b>Sex:</b> (column 2) write “M” for male candidates and “F” for female candidates.</p>
                  <p><b>Candidate’s Date of Birth:</b> (column 3) the day, month and year of candidate’s birth should be represented by 2 digits each. For example, if a candidate’s date of birth is 20th June, 1994, this should be recorded as 20 under day, 06 under month and 94 under year.</p>
                  <p><b>Candidate’s Names: </b> (column 4) candidate’s names should be written in block letters as they are to appear on any certificate to be issued, starting with the first name followed by the middle name and surname last. One blank space should be left after each name. If the spaces are insufficient for a candidate’s names, the middle name should be appropriately abbreviated. The names should be arranged alphabetically, trade by trade.</p>
                  <p><b>Trade Code (column 5):</b> Enter the trade code of each candidate here. For candidates registering the same trade, a vertical arrow should be used to cover the first and the last candidates on the column.</p>
                  <p><b>General Education</b> (column 6 for EA 60 and EA 61): Mark “X” for the trade-related subject codes for technical and Business Candidates here. For candidates offering the same subjects, use a vertical arrow as described in 5 above. Business candidates who wish to offer Biology should enter O06 in the General Education section of the entry schedule. Candidates’ offering technical trades in Catering Craft Practice (34O), Ladies Garment Making (33O), Men’s Garment Making (32O), Cosmetology (31O), Fisheries (20O) and Animal Husbandry (18O) should enter for Biology (O06) in the trade-related section of the entry schedule.</p>
                  <p><b>Trade Group Courses</b> (column 8 for EA 60): These are for technical candidates only. Write the codes of the course on the trade specified in column 5. For candidates offering the same subjects, use a vertical arrow as described in 5 above.</p>
                  <p><b>(Column 7 for EA 61): </b>  This is for business candidates only. Mark “X” for the business subject codes for each business candidates here.</p>
                  <p><b>Elective Subjects</b> (column 9 for EA 60 and EA 61): Business and Technical candidates who wish to offer any elective subjects as indicated in column 9, should Mark “X” against such subjects.</p>
                  <p><b> Principal’s Name, Signature and Date:</b>   The name and signature of the school/college principal or his/her representative should be written and certified with the college official stamp to authenticate the entries in the appropriate spaces provided for record purpose.</p>
                </h4>

              </div>
            </div>
          </Paper>

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
