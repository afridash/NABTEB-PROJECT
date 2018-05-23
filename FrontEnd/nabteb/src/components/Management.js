import React, {Component} from 'react'
import Paper from 'material-ui/Paper'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DashboardHeader from './Dashboard-header'
import RaisedButton from 'material-ui/RaisedButton'
import {Link} from 'react-router-dom'
export default class Management extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  showPageContent(){
      return (
        <div className="col-sm-10 col-sm-offset-1">
          <h3 className='text-info text-center' style={{borderBottomStyle:'solid', borderWidth:'0.5px',margin: 20, padding:10}}>OUR MANAGEMENT TEAM</h3>
        <div className='col-sm-12'>

          <div className='col-sm-12' >
              <div className='panel-body' >
                <Paper zDepth={3} rounded>
                  <div className='row'>
                    <div className='col-sm-6'>
                      <div className='col-sm-6'>
                        <img src={require('../images/ifeoma.jpg')} style={{ height:'100%', width:'100%', marginTop:15}} />
                      </div>
                      <div className='col-sm-6'>
                        <div style={{padding:10}}>
                          <a className='text-center' data-toggle="modal" data-target="#myIfeoma"><span style={{fontWeight:'600',fontSize:18}}>PROF. IFEOMA MERCY ISIUGO-ABANIHE</span></a>
                          <p className='text-center' style={{fontSize:18}}>Registrar/Chief Executive</p>
                              <h5 style={{fontFamily:'Times New Roman', fontSize:20, marginTop:20}}>Professor Ifeoma Mercy Isiugo-Abanihe is the new Registrar and Chief Executive of the National Business and Technical Examinations Board (NABTEB), Benin City. Prior to her appointment by the Federal Government on August 01, 2016, she was appointed as the Director, Institute of Education, University of Ibadan, Ibadan</h5>
                        </div>
                      </div>

                    </div>
                    <div className='col-sm-6'>
                      <div className='col-sm-6'>
                        <img src={require('../images/MALLAM-BELLO.jpg')} style={{ height:'100%', width:'100%', marginTop:15}} />
                      </div>
                      <div className='col-sm-6'>
                        <div style={{padding:10}}>
                          <a className='text-center' data-toggle="modal" data-target="#Mallam"><span style={{fontWeight:'600', fontSize:18}}>MALLAM BELLO ADAMU</span></a>
                          <p className='text-center' style={{fontSize:18}}>Director, Special Duties, Registrar's Office</p>
                              <h5 style={{fontFamily:'Times New Roman', fontSize:20, marginTop:20}}>The Governing Board at its 44th Regular Meeting approved the appointment of Mallam Bello Adamu as Director. He was subsequently deployed to Head the Department of Administration.</h5>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div className='row'>
                    <div className='col-sm-6'>
                      <div className='col-sm-6'>
                        <img src={require('../images/OBINNA.jpg')} style={{ height:'100%', width:'100%', marginTop:15}} />
                      </div>
                      <div className='col-sm-6'>
                        <div style={{padding:10}}>
                          <a className='text-center' data-toggle="modal" data-target="#obinna"><span style={{fontWeight:'600', fontSize:18}}>DR. OBINNA  M. OPARA</span></a>
                          <p className='text-center' style={{fontSize:18}}>Director, Examinations Administration</p>
                              <h5 style={{fontFamily:'Times New Roman', fontSize:20, marginTop:20}}>Deacon Obinna hails from Nguru, Aboh Mbaise in Imo State. He started his academic voyage at Community Primary School Obibi Nguru in Aboh Mbaise Local Government Area of Imo State and proceeded to acquire a secondary school education at Community secondary school Amuzi Ahiara.</h5>
                        </div>
                      </div>
                    </div>
                    <div className='col-sm-6'>
                      <div className='col-sm-6'>
                        <img src={require('../images/JAMES.jpg')} style={{ height:'100%', width:'100%', marginTop:15}} />

                      </div>
                      <div className='col-sm-6'>
                        <div style={{padding:10}}>
                          <a className='text-center' data-toggle="modal" data-target="#james"><span style={{fontWeight:'600', fontSize:18}}>MR. JAMES E PAMNI</span></a>
                          <p className='text-center' style={{fontSize:18}}>Director, Administration</p>
                              <h5 style={{fontFamily:'Times New Roman', fontSize:20, marginTop:20}}>Mr. Pamni was subsequently redeployed as Deputy Director (Monitoring Research and Statistic) from 2002-2003 opening the door to the vast field of educational administration (Policy, Management, Research and Measurement and Evaluation)</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-sm-6'>
                      <div className='col-sm-6'>
                        <img src={require('../images/Alhaji-jimoh.jpg')} style={{ height:'100%', width:'100%', marginTop:15}} />
                      </div>
                      <div className='col-sm-6'>
                        <div style={{padding:10}}>
                          <a className='text-center' data-toggle="modal" data-target="#kasali"><span style={{fontWeight:'600', fontSize:18}}>ALH. JIMOH ADEWOLA KASALI</span></a>
                          <p className='text-center' style={{fontSize:18}}>Director, Examinations Development</p>
                              <h5 style={{fontFamily:'Times New Roman', fontSize:20, marginTop:20}}>Alh. Kasali graduated in 1987 with Bachelor of Education (Science) in Mathematics with Second Class Upper Division from University of Benin, he obtained M.Ed (Measurement and Evaluation) 1993, Post Graduate Diploma in Computer Science 2001 from his Alma mater.</h5>
                        </div>
                      </div>
                    </div>
                    <div className='col-sm-6'>
                      <div className='col-sm-6'>
                        <img src={require('../images/SAYAYA.jpg')} style={{ height:'100%', width:'100%', marginTop:15}} />
                      </div>
                      <div className='col-sm-6'>
                        <div style={{padding:10}}>
                          <a className='text-center' data-toggle="modal" data-target="#sayaya"><span style={{fontWeight:'600', fontSize:18}}>Alh. HAMISU MAMUDA SAYAYA</span></a>
                          <p className='text-center' style={{fontSize:18}}>Director, General Services Department</p>
                              <h5 style={{fontFamily:'Times New Roman', fontSize:20, marginTop:20}}>The Director, General Services Department, Alhaji Hamisu Mamuda Sayaya was born on the 30th November, 1958 at Sayaya, Matazu Local Government Council in Katsina State. He holds a B.A. (Edu) Geography of Bayero University Kano and a member of the Teachers Registration Council of Nigeria</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-sm-6'>
                      <div className='col-sm-6'>
                          <img src={require('../images/NNASIA.jpg')} style={{ height:'100%', width:'100%', marginTop:15}} />
                      </div>
                      <div className='col-sm-6'>
                        <div style={{padding:10}}>
                          <a className='text-center' data-toggle="modal" data-target="#nnasia"><span style={{fontWeight:'600', fontSize:18}}>MR NNASIA NDARAKE ASANGA</span></a>
                          <p className='text-center' style={{fontSize:18}}>Director, Finance & Accounts</p>
                              <h5 style={{fontFamily:'Times New Roman', fontSize:20, marginTop:20}}>Mr. Nnasia Ndarake Asanga was born on 15th October, 1968 to the family of Apostle& Deaconess Ndarake Akpan Udo in Edem Urua, Ibiono Ibom Local Government Area of Akwa Ibom State. Mr. Asanga who has had refreshing work experienceas part time lecturer in several Universities, audit and account staff inseveral firms of Chartered Accountants joined the services of National Business & Technical Examinations Board (NABTEB) on 4th October, 1993 as Budget & Finance Officer II.</h5>
                        </div>
                      </div>
                    </div>
                    <div className='col-sm-6'>
                      <div className='col-sm-6'>
                        <img src={require('../images/mark.jpg')} style={{ height:'100%', width:'100%', marginTop:15}} />
                      </div>
                      <div className='col-sm-6'>
                        <div style={{padding:10}}>
                          <a className='text-center' data-toggle="modal" data-target="#mark"><span style={{fontWeight:'600', fontSize:18}}>MR. MARK, EZE UGWOKE</span></a>
                          <p className='text-center' style={{fontSize:18}}>Director, Research and Quality Assurance</p>
                              <h5 style={{fontFamily:'Times New Roman', fontSize:20, marginTop:20}}>Mark Eze Ugwoke, hails from Umuida, Enugu- Ezike, Igbo- Eze North Local Government Area of Enugu State, Nigeria. He attended prestigious St. Teresa’s College, Nsukka between 1978 and 1983 where he obtained West African School Certificate (WASC).</h5>
                        </div>
                      </div>

                    </div>

                  </div>
                  <div className='row'>
                    <div className='col-sm-6'>
                      <div className='col-sm-6'>
                        <img src={require('../images/alade.jpg')} style={{ height:'100%', width:'100%', marginTop:15}} />
                      </div>
                      <div className='col-sm-6'>
                        <div style={{padding:10}}>
                          <a className='text-center' data-toggle="modal" data-target="#alade"><span style={{fontWeight:'600', fontSize:18}}>MR. ALADE, SIMON OLAGBEMIGA</span></a>
                          <p className='text-center' style={{fontSize:18}}>Deputy Director, Information & Communication Technology.</p>
                              <h5 style={{fontFamily:'Times New Roman', fontSize:20, marginTop:20}}>Mr. ALADE SIMON OLAGBEMIGA joined the services of the National Business and Technical Examinations Board (NABTEB) on the 27th of April, 1995 and confirmed as a Senior Test Development Officer on the 27th of April 1997. His highest academic qualification is Master Degree in Educational Research, Measurement and Evaluation, March 1993 University of Ilorin, Nigeria.</h5>
                        </div>
                      </div>
                    </div>
                    <div className='col-sm-6'>
                      <div className='col-sm-6'>
                        <img src={require('../images/ADEYEMI.jpg')} style={{ height:'100%', width:'100%', marginTop:15}} />
                      </div>
                      <div className='col-sm-6'>
                        <div style={{padding:10}}>
                          <a className='text-center' data-toggle="modal" data-target="#adeyemi"><span style={{fontWeight:'600', fontSize:18}}>MR. ADEYEMI MICHAEL ADEMOLA</span></a>
                          <p className='text-center' style={{fontSize:18}}>Deputy Director, Strategy, Reform Coordination and Service Improvement</p>
                              <h5 style={{fontFamily:'Times New Roman', fontSize:20, marginTop:20}}>Adeyemi Michael Ademola, popularly called Adeyemi Brown, was born to the family of the Adeyemis of Alapo’s compound at Inisa in Odo Otin Local Government Area of Osun State on the 24th day of December 1959. His educational career began on a sound footing with the accomplishment of the first six years elementary education programme in four years at the Roman Catholic Primary School, Anyinasu Ashanti Region, Ghana (1965 – 1969).</h5>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-sm-6'>
                      <div className='col-sm-6'>
                        <img src={require('../images/Mrs-Ofurum.jpg')} style={{ height:'100%', width:'100%', marginTop:15}} />
                      </div>
                      <div className='col-sm-6'>
                        <div style={{padding:10}}>
                          <a className='text-center' data-toggle="modal" data-target="#myModal"><span style={{fontWeight:'600', fontSize:18}}>DEACONESS ONYEGECHA N. OFURUM</span></a>
                          <p className='text-center' style={{fontSize:18}}>HOD, Registrar Office</p>
                              <h5 style={{fontFamily:'Times New Roman', fontSize:20, marginTop:20}}>Deaconess Onyegecha Ofurum is from Umuororonjo Owerri, in Owerri Municipal Council of Imo State. She attended Christ Anglican Church Primary School, Owerri and proceeded to Owerri Girls Secondary School, Owerri where she obtained a Division One in West African School Certificate in 1978.</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </Paper>
            </div>
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
              <div className="container">
                    <div className="modal fade" id="myModal" role="dialog">
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title text-center"><b>DEACONESS ONYEGECHA N. OFURUM</b></h4>
                            <p className='text-center'><b>HOD, Registrar Office</b></p>
                          </div>
                          <div className="modal-body">
                            Deaconess Onyegecha Ofurum is from Umuororonjo Owerri, in Owerri Municipal Council of Imo State. She attended Christ Anglican Church Primary School, Owerri and proceeded to Owerri Girls Secondary School, Owerri where she obtained a Division One in West African School Certificate in 1978.
                            <br></br>
                            <br></br>
                            She obtained a Nigerian Certificate in Education in Chemistry/Physics from the Federal College of Education, Pankshin, Plateau State in 1982 and continued her tertiary education at the University of Nigeria, Nsukka, where she obtained a BSc. in Education Chemistry in 1986 and MEd. in Science Education in 1989. In 2017 she obtained an MSc in Science Education for Sustainability from the London South Bank University, United Kingdom.
                            <br></br>
                            <br></br>
                            She taught Chemistry, Physics and Integrated Science in several colleges before her current appointment in the National Business and Technical Examinations Board, Benin City, as a Senior Test Administration Officer in 1995. In her career in NABTEB, she has worked in the Departments of Examinations Administration, Examinations Development, Information and Communication Department and South East Zonal Co-ordinator.
                            <br></br>
                            <br></br>
                            She is a Fellow of the Institute of Corporate Administrators of Nigeria (FICA).
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
              <div className="container">
                    <div className="modal fade" id="myIfeoma" role="dialog">
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title text-center"><b>PROF. IFEOMA MERCY ISIUGO-ABANIHE</b></h4>
                            <p className='text-center'><b>Registrar/Chief Executive</b></p>
                          </div>
                          <div className="modal-body">
                            Professor Ifeoma Mercy Isiugo-Abanihe is the new Registrar and Chief Executive of the National Business and Technical Examinations Board (NABTEB), Benin City. Prior to her appointment by the Federal Government on August 01, 2016, she was the Director, Institute of Education, University of Ibadan, Ibadan, where she had served as an academic staff for over twenty-three years. Ifeoma Isiugo-Abanihe is a professor of Language Education and Educational Evaluation. She obtained her Bachelor’s degree in English Language/Communication and Master’s degree in Educational Administration from Temple University, Philadelphia, USA, and PhD in Educational Evaluation from the International Centre for Educational Evaluation, Institute of Education, University of Ibadan, Ibadan, Nigeria.                            <br></br>
                            <br></br>
                            Prof. Ifeoma Isiugo-Abanihe has several academic and professional awards, including the British Council Cheevening Scholarship; Research Fellowship on Gender and Women’s Studies, sponsored by CIDA, Canada, and research award as Principal Investigator for an in-school and out-of-school sexuality/reproductive health study among adolescents in oil-producing communities, sponsored by the MacArthur Foundation. Arising from her research activities, Prof. Isiugo-Abanihe has been a visiting scholar at the University of Manchester, United Kingdom, Mount Saint Vincent University, Halifax and Dalhousie University, Canada. In addition to her academic and professional teachers’ certificates, Prof. Ifeoma Isiugo-Abanihe possesses other qualifications, including certificates in Youth leadership, sexuality and reproductive health from CEDPA, Washington, USA; Gender and Women Studies from the Summer Institute for Gender and Development, Canada; Women, Literacy and Development from the University of Manchester, Certificate on Monitoring and Evaluation from Philber Associates, USA, etc. She is actively involved in research networks and study teams such as the Ibadan Social and Evaluation Research Team.                            <br></br>
                            <br></br>
                            As an educational Consultant, Professor Ifeoma Isiugo-Abanihe has served as National/Lead Research Consultant to several government and non-governmental organizations, including the British Council, UNFPA, UNAIDS, UNICEF, Federal Ministry of Education, Federal Ministry of Women Affairs, National Examinations Council (NECO), UBE, etc. In the area of public examination, she, as Deputy Director, coordinated the writing of the report on NECO’s study on National Assessment for Educational Performance; and is involved as a Lead Resource Person in UBEC’s National Assessment for Learning Achievements in Basic Education (NALABE).

                            <br></br>
                            <br></br>
                            As a professional teacher and post-graduate lecturer, Prof. Ifeoma Isiugo-Abanihe has taught several courses in Educational Evaluation, including Observational Techniques, Principles of Test Construction, Programme Evaluation, Curriculum Evaluation, Public Examining and Qualitative Research; in Communication and Language Arts, she has taught courses with the following titles: Readability and Style, Psycholinguistics and Reading, and Technical Writing, Skills Acquisition in Arts and Languages, Language Arts Methods, etc.
                            <br></br>
                            <br></br>
                            Professor Ifeoma Isiugo-Abanihe has supervised more than thirty Master and PhD projects and thesis. She is a prolific writer with fifty published books, chapters and articles in learned journals, and belongs to professional associations relevant to her discipline.
                           <br></br>
                           <br></br>
                           The current Registrar of NABTEB is versatile as she has many years of experience in both academics and administration. At the University of Ibadan, she served two terms as Sub-Dean (Post graduate) for the Institute of Education, Coordinator, Women’s Research and Documentation Centre (WORDOC); a member of the University Senate and member of several committees, including the Committees on Lecture method in the university, Committee on Evaluation of the University of Ibadan Commercial Enterprises, among others.
                           <br></br>
                           <br></br>
                           With her international exposure, and as an experienced administrator, researcher, programme evaluator, writer, test developer with knowledge of current techniques in public examining, and keen interest in youth and women’s empowerment, Professor Isiugo-Abanihe, has all the requisite skills to lift the National Business and Technical Education Board (NABTEB) to greater heights.


                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
              <div className="container">
                      <div className="modal fade" id="Mallam" role="dialog">
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <button type="button" className="close" data-dismiss="modal">&times;</button>
                              <h4 className="modal-title text-center"><b>MALLAM BELLO ADAMU</b></h4>
                              <p className='text-center'><b>Director, Special Duties, Registrar's Office</b></p>
                            </div>
                            <div className="modal-body">
                              Mallam Bello Adamu was born to the family of Late Mallam & Mrs Bello of Eneye Omeiza Compound, Okene in Okene Local government Area, Kogi State on November 22, 1961. He attended L.E.A Primary School Sabon-Gari, Kaduna (1969-1975); Lafiagi Teacher’s College, Ilorin, Kwara State (1975-1981) for his Teachers’ Grade II Certificate; Federal College of Education, Katsina, Katsina State (1982-1985) where he obtained Nigeria Certificate in Education (NCE); Ahmadu Bello University, Zaria, Kaduna State (1987-1991) for his Bachelor of Science Degree in Physical/Health Education; Kogi State Polytechnic, Lokoja, Kogi State (1997-2000) for his Higher Diploma in Public Accounting & Auditing; before proceeding to University of Ado-Ekiti, Nigeria (2000-2002) for his Masters in Public Administration (MPA)Degree.
                              <br></br>
                              <br></br>
                              After twenty-five (25) years of meritorious service with Kogi State Universal Basic Education Board, Mallam Bello assumed duty with the Board on 30th May, 2006 as Deputy Director, Administration in the Administration Department before his transfer to the Registrar’s Office as Deputy Director (Special Duties) in 2009.                              <br></br>
                              <br></br>
                              Mallam Bello is a member of several professional organizations.
                              <br></br>
                              <br></br>
                              He is a fellow, Institute of Industrialist and Corporate Administrators (FIICA).
                              Fellow, Institute of Corporate Administrators of Nigeria (FICA)
                              Member, Nigeria Institute of Management (MNI)
                              The Governing Board at its 44th Regular Meeting approved the appointment of Mallam Bello Adamu as Director. He was subsequently deployed to Head the Department of Administration.                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                          </div>
                        </div>
                      </div>
                </div>
              <div className="container">
                        <div className="modal fade" id="obinna" role="dialog">
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title text-center"><b>Dr. Obinna M. Opara</b></h4>
                                <p className='text-center'><b>Director, Examinations Administration</b></p>
                              </div>
                              <div className="modal-body">
                                Deacon Obinna hails from Nguru, Aboh Mbaise in Imo State. He started his academic voyage at Community Primary School Obibi Nguru in Aboh Mbaise Local Government Area of Imo State and proceeded to acquire a secondary school education at Community secondary school Amuzi Ahiara.
                                <br></br>
                                <br></br>
                                  He obtained a Bachelor of Science in Economics from University of Calabar, a Post Graduate Diploma in Education from the University of Port Harcourt, a Masters degree in Education (Management and Planning), University of Science and Technology Portharcourt. A Masters degree in Public Administration (MPA) from the University of Calabar and a Doctorate degree in Educational Administration from the University of Port Harcourt.
                                <br></br>
                                <br></br>
                                He is a member of some Professional Bodies including Nigerian Institute of Management (NIM) and the Chartered Institute of Personnel Management of Nigeria (CIPMN).                          </div>
                                <p className='text-center'><b>Examinations Development Department</b></p>
                                Examinations administration is a Programme Department of the Board charged with the following responsibilities:
                                <br></br>
                                <br></br>
                                <ul>
                                  <li>Planning and development of proposal for enrolment for all NABTEB Examinations within the year.</li>
                                  <li>Updating and proof reading of entry documents and other accompanying documents for all NABTEB Examination.</li>
                                  <li>Preparation and proof-reading of entry documents for printers.</li>
                                  <li>Preparation of Examinations Time-tables.</li>
                                  <li>Analysis of record of sale from selling point for all Examinations</li>
                                  <li>Processing of entry documents for modular Trades Certificate Examination.</li>
                                  <li>Preparation of summary packing lists for question papers.</li>
                                  <li>Computation of quantities of materials required for each examination.</li>
                                  <li>PRecruitment/Appointment of supervisors.</li>
                                  <li>Training and development of examination personnel for each examination</li>
                                  <li>Preparation of supervisors/co-ordinators payment schedules.</li>
                                  <li>Registration/Enlistment of new centres for inspection and approval</li>
                                  <li>Co-ordinating the distribution of practical and theory question papers to custodians.</li>
                                  <li>Co-ordinating the retrieval of answer scripts from the custodians.</li>
                                  <li>Co-ordinating, proof-reading, typesetting and dispatch of cutting list to examination centres for all examination series.</li>
                                  <li>Co-ordinating the distributing of materials to examination centres via the zonal offices for all examination series.</li>
                                  <li>Preparation of itineraries for various official trips regarding the conduct of the boards examination.</li>
                                  <li>Treatment and resolution of queries and complaints forwarded to the department.</li>
                                  <li>Keeping custody of question papers bags and keys and distributing same when needed.</li>
                                </ul>
                              <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                              </div>
                            </div>
                          </div>
                        </div>
                  </div>
            <div className="container">
                            <div className="modal fade" id="james" role="dialog">
                              <div className="modal-dialog">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    <h4 className="modal-title text-center"><b>James Pamni</b></h4>
                                    <p className='text-center'><b>ADMINISTRATION DEPARTMENT</b></p>
                                  </div>
                                  <div className="modal-body">
                                    Knowledge and information are everything to James Pamni, the Director, Administration. Born on November 11, 1959 at Bali, Demsa, in the Upper Benue River Basin in Adamawa State of Nigeria, he recognized early in life that in order to achieve any dream, he needed a good education, experience and growth. Hence he did not take his education for granted, having studied up to and earned the Master of Public Administration which he complemented with the Postgraduate Diploma in Education from the University of Benin, Benin City. This was to build on the solid academic foundation laid from the renowned History Department of the Ahmadu Bello University, Zaria, where he received a Bachelor of Arts in History in 1984. He also obtained professional qualifications and membership of the Chartered Institute of Personnel Management of Nigeria, Nigerian Institute of Management, and the Institute of Corporate Administration.
                                    <br></br>
                                    <br></br>
                                    Identifying and leveraging early on a combination of key executive skills and competences, he started his working career in 1986 with the Nigerian Postal Service (NIPOST) and rose to the position of Mails Services Manager in 1992 before leaving the organization for another stint with the Agricultural Projects Monitoring and Evaluation Unit (APMEU), a World Bank assisted Project under the Federal Ministry of Agriculture, as Regional Administrative Officer. He joined the services of the National Business and Technical Examinations Board (NABTEB) on 30th June 1998 as an Assistant Director (Administration) and was later promoted to the rank of Deputy Director (Administration) on 1st Jan 2002. Mr. Pamni was subsequently redeployed as Deputy Director (Monitoring Research and Statistic) from 2002-2003 opening the door to the vast field of educational administration (Policy, Management, Research and Measurement and Evaluation). He was later posted to Abuja in 2003 as the Deputy Director and Head of Abuja Office. He returned to the NABTEB Headquarters in 2008 and served as the Deputy Director, Registrar’s Office, and Deputy Director and Head of Human Resource of the Board 2008-2010.                                    <br></br>
                                    <br></br>
                                    To widen the scope of his experience, exposure, and growth, in 2010, he sought for and got the approval of the Board for secondment to the United Nations Economic Commission for Africa, Regional Centre for Training in Aerospace Surveys (RECTAS), Obafemi Awolowo University Campus, Ile Ife, , as Director of Admin and Finance (Registrar) from December up to November 2012. He also served on secondment as Registrar at the Nigerian Institute of Mining and Geosciences (NIMG) Jos, from Dec 2012 to February 2014, both institutions offered postgraduate programmes, amongst others.
                                    <br></br>
                                    <br></br>
                                    His return to the Board in 2014 marked a pivotal moment in his career development, when, after serving briefly as the Deputy Director (Examinations Administration) from March – December 2014, he was promoted to the newly created position of Director, (Strategy, Reforms and Service Improvement) at NABTEB Headquarters. The new Department drives strategy, reforms, service improvement and change management throughout NABTEB.
                                    <br></br>
                                    <br></br>
                                    In the course of his professional and career development, James Pamni also served on several Federal Government Panels and other National Committees including, the Committee for the establishment of Vocational Enterprise Institutions and Innovation Enterprise Institution and the Strategic Framework for Vocational and Innovation Enterprise Institutions(2007 and 2008), the Committee on the planning of the converged Examinations Management Technology Platform for all Public Examination Bodies in Nigeria(2008), the National Committee on the Review of the National Policy on Education established by the National Council on Education (2007 and 2008), the National High level Committee on the Review of Basic and Post Basic Education Curricular in 2007, ,the National Committee on Quality Assurance Initiatives at FME 2007. He also served as the Chief Administrative Officer/Assistant Secretary, Presidential Visitation panel to the University of Benin (1999), and the Branch Secretary, Chartered Institute of Personnel Management of Nigeria, Abuja Chapter 2005-08, amongst many others.
                                    <br></br>
                                    <br></br>
                                    Over these years James Pamni has trodden fields and specializations of management including General Administration, Human Resource Management and Development, Education/Examinations Administration, Management of Higher Education, Strategy and Policy Management, Project Management, Organizational Development and Change Management, amongst others.
                                    <br></br>
                                    <br></br>
                                     <p className='text-center'><b>Administration Department</b></p>
                                    The Department of Administration is charged with the following responsibilities:
                                    <br></br>
                                    <br></br>
                                    <ul>
                                      <li>Serving as an operational arm of the Registrar’s office in day to day general administration, especially as it affects staff matters.</li>
                                      <li>Management of Secretarial Services for the Governing Board, Management and their standing committees.</li>
                                      <li>Preparation of Memoranda on policy and staff matters for the Registrar/Chief Executive, Management and other Stakeholders.</li>
                                      <li>Office allocation and arrangement of accommodation for Guests of the Board, Staff Training, and Update of Staff records, Personnel/Human resource and general policy decision matters.</li>
                                      <li>Liaising with Government and external bodies on behalf of the Registrar/Chief Executive and Management.</li>
                                      <li>Procurement of consumables and store items.</li>
                                      <li>Resident supervision of the on-going Capital Projects.</li>
                                      <li>Any other functions as may be directed by the Registrar/Chief Executive and expedient to the Department of Administration.</li>
                                    </ul>
                                  <div className="modal-footer">
                                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                      </div>
            <div className="container">
                            <div className="modal fade" id="kasali" role="dialog">
                              <div className="modal-dialog">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    <h4 className="modal-title text-center"><b>Alh. Jimoh Adewola Kasali</b></h4>
                                    <p className='text-center'><b>DIRECTOR, EXAMINATIONS DEVELOPMENT DEPARTMENT</b></p>
                                  </div>
                                  <div className="modal-body">
                                    Alh. J. A. KASALI is the director of Examinations Development Department, National Business and Technical Examinations Board (NABTEB) Benin City.
                                    <br></br>
                                    <br></br>
                                    He was born on 3rd February 1961 at Kisi in Irepo Local Government Area of Oyo State, Nigeria. He accomplished his Education at Irepo Grammar School Igboho (1977) where he received the award as the best behaved student. He is given letter of commendation for his outstanding academic performance at the defunct Oyo State College of Education Ila-Orangun, Osun State (1981/1982) and University of Benin (1987).                                   <br></br>
                                    <br></br>
                                    Alh. Kasali graduated in 1987 with Bachelor of Education (Science) in Mathematics with Second Class Upper Division from University of Benin, he obtained M.Ed (Measurement and Evaluation) 1993, Post Graduate Diploma in Computer Science 2001 from his Alma mater.
                                    <br></br>
                                    <br></br>
                                    His professional career started in 1987 with Federal Ministry of Education where he taught in various Federal Government Unity Schools across the country till 1993 when he joined the services of the National Business and Technical Examinations Board (NABTEB) as a pioneer staff and Senior Examination officer, through his loyalty, effectiveness, hard work, integrity, professional efficiency and commitment to duty, he rose to the position of Deputy Director (Exams Development) in January 2008. He was appointed as the Acting Head of Research and Quality Assurance Department between 2007 and 2011. He attends series of seminars and workshops within and outside the country in the Design and Development of Large Scale Assessment, Research Instrument Design and Administration, Development of Examination Syllabi and Leadership/Management Training programs among others. His hobbies are reading, writing, playing scrabble and Table Tennis.
                                    <br></br>
                                    <br></br>
                                    Alh. J. A. Kasali is a member of Mathematical Association of Nigeria (MAN), and Science Teachers Association of Nigerian (STAN) and Teachers Registration Council of Nigeria (TRCN). He is happily married with children.
                                    <br></br>
                                    <br></br>

                                     <p className='text-center'><b>Examinations Development Department</b></p>
                                     Examinations Development Department is charged with the following responsibilities :
                                    <br></br>
                                    <br></br>
                                    Developing test items for NABTEB examinations through:
                                    <br></br>
                                    <br></br>
                                    <ul>
                                      <li>The pooling of resources of internal and external professionals in various trades/subjects and utilizing;</li>
                                      <li>The most modern techniques in the construction and development of valid, reliable, practicable, credible and secured test items for NABTEB Examinations.</li>
                                      <p>Providing consultancy services to other needy organizations in areas such as:</p>
                                      <li>Aptitude Tests;</li>
                                      <li>Vocational Inventory Tests;</li>
                                      <li>Industrial Recruitment Aptitude Tests;</li>
                                      <li>Industrial establishment feasibility studies;</li>
                                      <li>Commercial enterprises recruitment interviews etc.</li>

                                    </ul>
                                  <div className="modal-footer">
                                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                      </div>
              <div className="container">
                                      <div className="modal fade" id="sayaya" role="dialog">
                                        <div className="modal-dialog">
                                          <div className="modal-content">
                                            <div className="modal-header">
                                              <button type="button" className="close" data-dismiss="modal">&times;</button>
                                              <h4 className="modal-title text-center"><b>Alhaji Hamisu Mamuda Sayaya</b></h4>
                                              <p className='text-center'><b>Director, General Services Department</b></p>
                                            </div>
                                            <div className="modal-body">
                                            The Director, General Services Department, Alhaji Hamisu Mamuda Sayaya was born on the 30th November, 1958 at Sayaya, Matazu Local Government Council in Katsina State. He holds a B.A. (Edu) Geography of Bayero University Kano and a licensed Teacher by the Teachers Registration Council of Nigeria (TRCN)
                                            <br></br>
                                            <br></br>
                                            The officer started his working career in 1987, with the defunct Kaduna State Ministry of Education, later moved to Katsina State Ministry of Education within the same year. He started as a master Grade II officer GL 08/2 and rose to Chief Education Officer on GL 13/2 after fifteen (15) years of meritorious service with Katsina State Ministry of Education before joining NABTEB in year 2000 as Chief Test Administration Officer.
                                              <br></br>
                                              <br></br>
                                              He was posted to Maiduguri as the first Zonal Coordinator in-charge of Borno, Bauchi and Yobe States. After his promotion to Assistant Director in year 2005, he was posted to North West Zonal Office in Kaduna State as the Zonal Coordinator in-charge of Kaduna, Kano, Katsina, Jigawa, Kebbi, Sokoto and Zamfara States.
                                              <br></br>
                                              <br></br>
                                              Alhaji Hamisu, Mamuda Sayaya was promoted as Deputy Director on 1st January 2010. He was posted to Examinations Development Department from September 2014 to March 2015 as Deputy Director (Examinations Development Department).
                                              <br></br>
                                              <br></br>
                                              Alhaji Hamisu Mamuda Sayaya is married with children.
                                              <br></br>
                                              <br></br>
                                              Alh. Hamisu Mamuda was born to the family of late Mallam and Mrs. Mamuda of Sayaya in Matazu Local Government Area of Katsina State. He attended L.E.A. primary school Sayaya (1969-1975), Katsina Teachers College (1975-1980) for his Teachers Grade II Certificate, School of General Studies Bayero University Kano, Kano State (1981-1982) and Faculty of Education Bayero University, Kano (1982-1985) for his Bachelor of Art degree in Education/Geography.
                                             <br></br>
                                             <br></br>
                                             Upon x – raying his unquantifiable contributions to the growth and popularization of NABTEB as an esteemed examination body and its consequent acceptability within the grassroot populace especially in the area where he pioneered as a zonal co-coordinator and his numerous land mark achievement in the discharge of his schedule both within the headquarter, zonal and state levels, Management thereafter forwarded his name to the Governing Board for approval as a Director of the Federal Republic and was subsequently deployed to head the nascent department of general services that was newly created at that time as a substantive Director, a post he holds till date.
                                            <div className="modal-footer">
                                              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                </div>
              <div className="container">
                <div className="modal fade" id="nnasia" role="dialog">
                                                  <div className="modal-dialog">
                                                    <div className="modal-content">
                                                      <div className="modal-header">
                                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                        <h4 className="modal-title text-center"><b>Mr. Nnasia Ndarake Asanga</b></h4>
                                                        <p className='text-center'><b>Finance and Accounts Department</b></p>
                                                      </div>
                                                      <div className="modal-body">
                                                       Mr. Nnasia Ndarake Asanga was born on 15th October, 1968 to the family of Apostle& Deaconess Ndarake Akpan Udo in Edem Urua, Ibiono Ibom Local Government Area of Akwa Ibom State.                                                        <br></br>
                                                        <br></br>
                                                        Mr. Asanga who has had refreshing work experienceas part time lecturer in several Universities, audit and account staff inseveral firms of Chartered Accountants joined the services of National Business & Technical Examinations Board (NABTEB) on 4th October, 1993 as Budget & Finance Officer II. Through dint of hard work, determination, self-improvement cum motivation and most importantly God’s favour rose to the position of Deputy Director, Finance & Accounts on 1st January, 2012 and on 16th March, 2016, he was elevated to the position of Ag. HOD, Finance & Accounts.
                                                        <br></br>
                                                        <br></br>
                                                        Mr. Asanga has served in at least 30 Governing Board’s and Management’s committees. Notable among the committees are: Review of the Vision and Mission of the Board, Audit, Tax, Fixed Asset Verification, cost control and Reduction, Restructuring, Organogram Implementation, Revenue generation, IPPIS, IPSAS. In addition, he has received many commendations and awards from the Governing Board, Management, External Auditors etc.
                                                        <br></br>
                                                        <br></br>
                                                      Mr. Asanga fondly called Prof. by his colleagues has attended several workshops as paper presenter or participant.
                                                        <br></br>
                                                        <br></br>
                                                        He qualified as a Chartered Accountant in May, 1999 and became a Fellow of Institute Corporate Administration in 2014. Academically, he possessesMaster of Science Degree in Banking & Finance and Bachelor of Science Degree in Accounting. He is currently pursuing M.Phil./PHD in Agricultural Finance.
                                                        <br></br>
                                                        <br></br>
                                                        He is a seeker of knowledge who believes that there is no best way of doing a particular thing and that man must always invent or explore better ways of doing things.
                                                        <br></br>
                                                        <br></br>
                                                        He is happily married with lovely and promising children.
                                                        <br></br>
                                                        <br></br>
                                                        He likes among others music, cooking, reading, helping and sharing knowledge.
                                                        <br></br>
                                                        <br></br>

                                                         <p className='text-center'><b>FINANCE AND ACCOUNTS DEPARTMENT</b></p>
                                                         Receipt of all monies due to the Board and rendering proper accounts of all such monies collected;
                                                        <br></br>
                                                        <br></br>

                                                        <ul>
                                                          <li>Disbursement of funds to meet the Board’s operational needs;</li>
                                                          <li>Preparing the Board’s Financial Statements;</li>
                                                          <li>Ensuring that accounting and financial records are kept up to date in the manner prescribed in the Financial Act of 1968, the Audit Ordinance of 1956 and the Federal Government Financial Guidelines;</li>
                                                          <li>Building a comprehensive financial and accounting data of the Board’s activities for the relevant users;</li>
                                                          <li>Accounting for Pension Scheme;</li>
                                                          <li>Formulating Budget plans and preparation of Annual Budgets for the Board;</li>
                                                          <li>Liaising with Banks and other financial Institutions on behalf of the Board</li>
                                                          <li>Supervising and consolidating the Zonal Offices financial activities;</li>
                                                          <li>Control of the Board’s Revenue and Expenditure estimates;</li>
                                                          <li>Payment of Wages and Salaries to the Board’s staff.</li>

                                                        </ul>
                                                      <div className="modal-footer">
                                                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  </div>
              <div className="container">
                      <div className="modal fade" id="nnasia" role="dialog">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <button type="button" className="close" data-dismiss="modal">&times;</button>
                          <h4 className="modal-title text-center"><b>Mr. Nnasia Ndarake Asanga</b></h4>
                          <p className='text-center'><b>Finance and Accounts Department</b></p>
                        </div>
                        <div className="modal-body">
                         Mr. Nnasia Ndarake Asanga was born on 15th October, 1968 to the family of Apostle& Deaconess Ndarake Akpan Udo in Edem Urua, Ibiono Ibom Local Government Area of Akwa Ibom State.                                                        <br></br>
                          <br></br>
                          Mr. Asanga who has had refreshing work experienceas part time lecturer in several Universities, audit and account staff inseveral firms of Chartered Accountants joined the services of National Business & Technical Examinations Board (NABTEB) on 4th October, 1993 as Budget & Finance Officer II. Through dint of hard work, determination, self-improvement cum motivation and most importantly God’s favour rose to the position of Deputy Director, Finance & Accounts on 1st January, 2012 and on 16th March, 2016, he was elevated to the position of Ag. HOD, Finance & Accounts.
                          <br></br>
                          <br></br>
                          Mr. Asanga has served in at least 30 Governing Board’s and Management’s committees. Notable among the committees are: Review of the Vision and Mission of the Board, Audit, Tax, Fixed Asset Verification, cost control and Reduction, Restructuring, Organogram Implementation, Revenue generation, IPPIS, IPSAS. In addition, he has received many commendations and awards from the Governing Board, Management, External Auditors etc.
                          <br></br>
                          <br></br>
                        Mr. Asanga fondly called Prof. by his colleagues has attended several workshops as paper presenter or participant.
                          <br></br>
                          <br></br>
                          He qualified as a Chartered Accountant in May, 1999 and became a Fellow of Institute Corporate Administration in 2014. Academically, he possessesMaster of Science Degree in Banking & Finance and Bachelor of Science Degree in Accounting. He is currently pursuing M.Phil./PHD in Agricultural Finance.
                          <br></br>
                          <br></br>
                          He is a seeker of knowledge who believes that there is no best way of doing a particular thing and that man must always invent or explore better ways of doing things.
                          <br></br>
                          <br></br>
                          He is happily married with lovely and promising children.
                          <br></br>
                          <br></br>
                          He likes among others music, cooking, reading, helping and sharing knowledge.
                          <br></br>
                          <br></br>

                           <p className='text-center'><b>FINANCE AND ACCOUNTS DEPARTMENT</b></p>
                           Receipt of all monies due to the Board and rendering proper accounts of all such monies collected;
                          <br></br>
                          <br></br>

                          <ul>
                            <li>Disbursement of funds to meet the Board’s operational needs;</li>
                            <li>Preparing the Board’s Financial Statements;</li>
                            <li>Ensuring that accounting and financial records are kept up to date in the manner prescribed in the Financial Act of 1968, the Audit Ordinance of 1956 and the Federal Government Financial Guidelines;</li>
                            <li>Building a comprehensive financial and accounting data of the Board’s activities for the relevant users;</li>
                            <li>Accounting for Pension Scheme;</li>
                            <li>Formulating Budget plans and preparation of Annual Budgets for the Board;</li>
                            <li>Liaising with Banks and other financial Institutions on behalf of the Board</li>
                            <li>Supervising and consolidating the Zonal Offices financial activities;</li>
                            <li>Control of the Board’s Revenue and Expenditure estimates;</li>
                            <li>Payment of Wages and Salaries to the Board’s staff.</li>

                          </ul>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
            <div className="container">
                    <div className="modal fade" id="mark" role="dialog">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                        <h4 className="modal-title text-center"><b>Mr. Mark Eze Ugwoke</b></h4>
                        <p className='text-center'><b>RESEARCH AND QUALITY ASSURANCE DEPARTMENT</b></p>
                      </div>
                      <div className="modal-body">
                       MARK EZE UGWOKE, hails from Umuida, Enugu- Ezike, Igbo- Eze North Local Government Area of Enugu State, Nigeria.                                <br></br>

                        <br></br>
                        <br></br>
                        He attended prestigious St. Teresa’s College, Nsukka between 1978 and 1983 where he obtained West African School Certificate (WASC). He secured admission into University of Nigeria, Nsukka (UNN) in 1984 and graduated in 1988 with Second Class Honours, Upper Division and obtained Bachelor of Science (B.Sc) Degree in Physics/Education. Furthermore, he was awarded Master of Business Administration (M.B.A.) by the Senate of University of Benin (UNIBEN) in 1995 where he specialized in Financial Management. Again, he studied Educational Research, Measurement and Evaluation at Enugu State University of Science and Technology and obtained Master of Science (M.Sc) Degree in 2016. His area of specialization is Application of Item Response Theory in Test Development and Administration processes.                                <br></br>
                        <br></br>
                        His job experience started in 1988 under the National Youth Service Corps (N.Y.S.C.) Scheme where he taught Physics and Mathematics. In 1989, he got appointment with the Federal Ministry of Education as Education Officer and later joined the services of University of Benin Demonstration Secondary School (UDSS) in 1991, also, as a physics teacher. He secured appointment with the National Business and Technical Examinations Board (NABTEB) as a Senior Test Development Officer (Physics) in 1996 and worked as the subject specialist and also served as a foundational member of test production team while at the headquarters. He was deployed to Anambra State to open a Zonal Office (for Enugu and Anambra States) in the State in 2003 and later posted to Enugu in 2009 to establish the South East Zonal Office.  He was returned to the headquarters and elevated to the position of Director of Research and Quality Assurance Department in 2017.

                        <br></br>
                        <br></br>
                         He is computer literate, team player, mentor and has good numerical and organizational skills with special interest in the use of statistics to analyze events. He has obtained numerous awards from within and outside the Board and is a member of Science Teachers’ Association of Nigeria M(STAN) as well as a Member of Teachers’ Registration Council of Nigeria M(TRCN).
                         <br></br>
                        <br></br>


                         <p className='text-center'><b>Research and Quality Assurance Department</b></p>
                        <ul>
                          <li>Research on Low Enrolment in Technical and Vocational Education (TVE) in Nigeria.</li>
                          <li>Planning of Capacity Building Workshop for NABTEB Senior Staff and Examination Personnel.</li>
                          <li>Research Report on “Trend Analysis of Performance of Candidates at the National Common Entrance Examination using GABNOD as tracer of the performance at the NBC/NTC Examinations</li>
                          <li>Organization of professional Tri-annual Seminar Series for NABTEB Senior Staff.</li>
                          <li>Review of Research Study on the Monitoring of Learning Achievement (MLA) in Technical and Vocational Colleges.</li>
                          <li>Research Report on :: Analysis of Supervisors’ Performance as a key Determinant to Effective Conduct of NABTEB Examinations</li>
                          <li>Preparation of Monitoring Plan and Cost Implication for Examinations.</li>
                          <li>Monitoring of NBC/NTC and ANTC/ANBC Examinations.</li>
                          <li>Analysis of NBC/NTC and ANBC/ANTC Examinations Monitoring Reports.</li>
                          <li>Analysis of NBC/NTC and ANBC/ANTC Examinations Supervisors’ Reports.</li>
                          <li>Publication of the Board’s Examinations Centres Directory.</li>
                          <li>Preparation of Chief Examiners’ Reports.</li>
                          <li>Publication of NABTEB TVE Quarterly.</li>
                          <li>Reactivation of the Board’s Library.</li>
                          <li>Collection and collation of statistical data on all the Board’s examinations.</li>
                          <li>Interactive Workshop for Liaison, Regional and Zonal Offices.</li>

                        </ul>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
             <div className="container">
                        <div className="modal fade" id="alade" role="dialog">
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <button type="button" className="close" data-dismiss="modal">&times;</button>
                              <h4 className="modal-title text-center"><b>Mr. Alade Simon Olagbemiga</b></h4>
                              <p className='text-center'><b>INFORMATION AND COMMUNICATIONS TECHNOLOGY DEPARTMENT</b></p>
                            </div>
                            <div className="modal-body">
                              Mr. ALADE SIMON OLAGBEMIGA joined the services of the National Business and Technical Examinations Board (NABTEB) on the 27th of April, 1995 and confirmed as a Senior Test Development Officer on the 27th of April 1997. His highest academic qualification is Master Degree in Educational Research, Measurement and Evaluation, March 1993 University of Ilorin, Nigeria.
                              <br></br>
                              <br></br>
                              Alade S.O has served meritoriously as officer, Assistant Director and Deputy Director in many of the Departments of the Board.
                              <br></br>
                              <br></br>
                              <p>These Include:</p>
                              <br></br>
                              <p>Examination (Test) Development Department, April 1995 – November 2006;</p>
                              <p>Research, Quality Assurance Department, November 2006 – March 2011;</p>
                              <p>Examinations Administration Department, March 2011 – August 2011;</p>
                              <p>Registrar’s Office, South West Zonal Office (Zonal Coordinator) August, 2011 – August 2014;</p>
                              <p>Examinations Administration Department, September, 2014 – March 2015;</p>
                              <p>ICT Department as Deputy Director, March 2015 – April 9th 2015;</p>
                              <p>Reforms Coordination and Service Improvement (RCSI) Department as Deputy Director RCSI, April 2015 – 8th June 2017;</p>
                              <p>ICT Department (Ag. HOD), 9th June 2017 to date.</p>
                              <br></br>
                              <br></br>
                              Since his assumption of duty as an officer in NABTEB, Mr. Alade has been among the few who are totally committed to the overall success of the Board. He is very hardworking, humble, time conscious, resourceful, reliable, dependable and God-fearing. He is open to suggestions and utilizes delegated authority judiciously whenever the opportunity is given. He gets along with other staff and very sound in interpersonal relationship. On the whole, he has low tolerance for staff who do not take their duties seriously.
                              <br></br>
                              <br></br>
                              Since his assumption of duty as the Deputy Director in charge of ICT Department his watchword to the staff has been punctuality and integrity.
                               <br></br>
                              <br></br>


                               <p className='text-center'><b>Information and Communications Technology Department</b></p>
                               <br></br>
                               <br></br>
                              <ul>
                                <li>Processing the entries and results of all examinations conducted by NABTEB viz: May/June, NBC/NTC and Nov/Dec NBC/NTC, ANBC/ANTC, Common Entrance, Modular Trade Certificate Examinations, etc.</li>
                                <li>Computation of Statistics on all examinations conducted by the Board</li>
                                <li>Representing the Board on Information and Communications Technology (ICT) matters.</li>
                                <li>Liaising with external Consultants on Information and Communications Technology.</li>
                                <li>Ensuring smooth e-Registration</li>
                                <li>Managing Internet and Network infrastructure</li>
                                <li>Making results of the Examinations available at the appropriate time, locally and on the Internet.</li>
                                <li>Attending to complaints and queries arising from the Examinations.</li>
                                <li>Providing Routine maintenance of all the computer systems in the Board.</li>
                                <li>Managing the NABTEB Corporate Web-site and the On-line Result Checking System</li>
                                <li>It is aimed at: Processing Examination data accurately and produce timely and reliable results for NABTEB.</li>
                              </ul>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        </div>
                        <div className="container">
                                   <div className="modal fade" id="adeyemi" role="dialog">
                                   <div className="modal-dialog">
                                     <div className="modal-content">
                                       <div className="modal-header">
                                         <button type="button" className="close" data-dismiss="modal">&times;</button>
                                         <h4 className="modal-title text-center"><b>Mr. Adeyemi Michael Ademola</b></h4>
                                         <p className='text-center'><b>REFORM COORDINATION AND SERVICE IMPROVEMENT DEPARTMENT</b></p>
                                       </div>
                                       <div className="modal-body">
                                         Adeyemi Michael Ademola, popularly called Adeyemi Brown, was born to the family of the Adeyemis of Alapo’s compound at Inisa in Odo Otin Local Government Area of Osun State on the 24th day of December 1959.
                                         <br></br>
                                         <br></br>
                                         His educational career began on a sound footing with the accomplishment of the first six years elementary education programme in four years at the Roman Catholic Primary School, Anyinasu Ashanti Region, Ghana (1965 – 1969).
                                         <br></br>
                                         <br></br>
                                         Similarly, the young ambitious Adeyemi Brown completed the four years Middle School programme in three years with a Distinction Grade at the Local Authority Middle School, New Ayoma, Volta Region, Ghana in 1972.
                                         <br></br>
                                         <br></br>
                                         His burning desire for higher educational attainment took him to the Baptist Teacher Training College, Ede (1976 – 1979); the Polytechnic, Ibadan where he studied Mass Communication (1982 – 1984) and the then Ogun State Polytechnic, Abeokuta (now Moshood Abiola Polytechnic) between 1990 and 1992, for the Higher National Diploma (HND) in Mass Communication.

                                         <br></br>
                                         <br></br>
                                         Determined to add value to his educational career, Adeyemi Brown’s insatiable quest for academic laurels led him to the prestigious University of Benin where he bagged the Masters Degree in Public Administration in 1998.

                                         <br></br>
                                         <br></br>
                                         His career in the private and public service began as a classroom teacher at the St Saviour’s Primary School, Ikirun (1979 – 1980) and the Holy Michael’s High School, Ikirun (1980 – 1982).

                                         <br></br>
                                         <br></br>
                                         Although he has been practising as a journalist since 1982, freelancing with several private and public media, his formal entry into the pen pushing profession was in 1993 when he was engaged by the defunct Sketch Press Limited as a Reporter and later, Head, Education and Research Desk (1993 – 1995). He was later transferred to Benin where he assumed duty as the Zonal Editor for Edo and Delta States (1995 – 2000). He joined the Federal Civil Service as a Principal Officer in May, 2000 at the National Business and Technical Examinations Board (NABTEB), and rose through the ranks to the position of a Deputy Director and Head, Public Affairs in 2012. In 2014, he was elevated to the position of Head of Department, Office of the Registrar/Chief Executive.

                                         <br></br>
                                         <br></br>
                                         Significant among the numerous awards won by Mr. Adeyemi Brown in school and in the world of work include but not limited to the following:

                                         <br></br>
                                         <br></br>
                                         Best Broadcaster and Debater Award, Baptist College, Ede, 1979
                                         Nigeria Television Authority, Ibadan, Award for Best Drama & Poetry Presentation (1984)
                                         The Federal Road Safety Corps (FRSC), National Writing Competition Award (1989)
                                         Nigeria Union of Journalists Award for Professional Excellence (Sketch Press Limited) (1998)
                                         Also worthy of mention is Mr. Brown’s modest contribution to national and community development. Notable among these is his proposal on Civic Education for Sustainable National Development presented to the then Military Governor of Oyo State, Oladayo Popoola (1984) which was hijacked and later presented as the Mass Mobilization for Social and Economic Research (MAMSER) in 1985.                                         <br></br>
                                         <br></br>
                                         A prolific writer, Newspaper Columnist and Commentator on Public Affairs, Mr Adeyemi Brown has equally written several proposals bordering on Security and Sustainable National Development for State Governments and Parastatals of the Federal Government.

                                         <br></br>
                                         <br></br>
                                         Perhaps it will equally be pertinent to state that Mr. Brown served as a Research Assistant (on Politics and Religion in Africa) to the Nobel Laureate, Prof. Wole Soyinka in “the quest to end military rule in Africa by 1995,” under the aegis of the African Democratic League before the noble plan was aborted by the catastrophic annulment of the June 12, 1992 elections.

                                         <br></br>
                                         <br></br>
                                         He is happily married with children.

                                         <br></br>
                                         <br></br>
                                          <p><b>STRATEGY, REFORM COORDINATION, AND, SERVICE IMPROVEMENT DEPARTMENT(Mr. Adeyemi Michael Ademola – Deputy Director)</b></p>
                                          <br></br>
                                          <br></br>
                                          <p>The Department of Strategy, Reform Coordination, and Service Improvement was created in 2015 and has the following main Duties:</p>
                                         <ul>
                                           <li>Work with Leadership of the Board to identify processes, systems and service gap and with BPSR and OHCSF, FME, NCE, NBTE, NERDC and other agencies to develop interventions to eliminate such gaps;</li>
                                           <li>Coordinate, drive, monitor and report on the Reform Agenda for the Board;</li>
                                           <li>Manage the Department to serve as a focal point for driving all change, reform, innovation and improvement efforts within the Board in line with the overall framework set by BPSR, OHCSF and other Central Agencies of Government;</li>
                                           <li>Troubleshoot service failure and Develop proposals to address them;</li>
                                           <li>Research and identify good practices that can be adapted/adopted to improve service delivery in the Board;</li>
                                           <li>Liaise with the Board’s Departments and the OHCSF, FME etc to develop refine, improve and recommend more efficient processes and systems for the Board to achieve its objectives;</li>
                                           <li>Develop and launch initiatives to drive and maintain a continuous service improvement culture within the Board;</li>
                                           <li>Develop and deploy change management tools and practices to institute sustainable improvements in the Board;</li>
                                           <li>Assist the leadership of the Board to articulate and coordinate their change agenda in line with service policies and standards;</li>
                                           <li>Formulate, coordinate the implementation, and monitor strategic plans for the Board;</li>
                                           <li>Formulate , implement and monitor marketing plans for the Board;</li>
                                           <li>Stakeholder Engagements,</li>
                                           <li>Forging of strategic alliances and general Management of Stakeholders, partners and Regulators;</li>
                                           <li>Any other duties as may be assigned by the Registrar/Chief Executive</li>
                                         </ul>
                                       <div className="modal-footer">
                                         <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                           </div>
                                         </div>
                                       </div>
                                     </div>
                                   </div>
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
