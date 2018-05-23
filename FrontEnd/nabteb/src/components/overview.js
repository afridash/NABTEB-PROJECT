import React, {Component} from 'react'
import Paper from 'material-ui/Paper'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DashboardHeader from './Dashboard-header'
import RaisedButton from 'material-ui/RaisedButton'
import {Link} from 'react-router-dom'
export default class Overview extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  showPageContent(){
      return (
        <div className="col-sm-10 col-sm-offset-1">
          <h3 className='text-info text-center' style={{borderBottomStyle:'solid', borderWidth:'0.5px',margin: 20, padding:10}}>Brief History of NABTEB</h3>
        <div className='col-sm-12'>
          <Paper zDepth={1}>
            <div className='panel panel-default' >
              <div className='panel-body' style={{fontSize:20}}>

                  <h4  style={{fontFamily:'Times New Roman', lineHeight:1.5, fontSize:20}}>
                    The National Business and Technical Examinations Board was established in 1992 to domesticate craft level examinations which were hitherto conducted by City & Guilds, Pittman’s, and Royal Society of Arts all of UK in accordance with the provisions of the National Policy on Education. Its establishment was the climax of an evolutionary process which spanned 15 years from 1977 to 1992 and in which FOUR Government Panels at different times were set up to review the place and structure of public examinations in our educational system.<br></br>

                    Each of these Panels advocated and justified the multiplication of the examinations bodies, and in particular, a separate body to perform the functions which NABTEB now performs. The process began with the findings of Justice Sogbetun Commission of Enquiry (1978), which was set up in response to public outcry on perceived inefficiency and unchecked leakages of public examinations. This was followed by the Angulu Commission, which was set up as a result of WAEC’s presentation to the House of Representative Committee on Education in 1981 in which WAEC advocated the setting up of other examination boards in Nigeria “to reduce the burden of WAEC”. The third was the Okoro Panel set up in 1989 to review the Angulu Report. The forth was the Professor Akin Osiyale’s Task Force set up in 1991 “to evolve a strategy to reduce the burden of WAEC and bring about greater efficiency in the conduct of public examinations”.<br></br>

                    The National Business and Technical Examinations Board (NABTEB) under Decree 70 of 1993, and other examinations bodies were thus established. Since its establishment, the findings of the Etsu Nupe Panel (1997), the Shonekan Vision 2010 (1997) Report, and the harmonized Report of the Etsu Nupe Panel and Vision 2010 reports have supported, directly and indirectly, NABTEB’s existence. The National headquarters of the Board is located at Ikpoba Hill, P. M. B. 1747, Benin City, and Edo State.<br></br>
               </h4>
              </div>
            </div>
          </Paper>

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
