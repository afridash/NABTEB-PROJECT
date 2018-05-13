import React, { Component } from 'react'
import '../App.css'
import {Link} from 'react-router-dom'
import Paper from 'material-ui/Paper'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DashboardHeader from './Dashboard-header'
import RaisedButton from 'material-ui/RaisedButton'
import '../assets/css/slider.css'


export default class AdminCenterInfo extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  showPageContent () {
    return (
      <div className='col-sm-10 col-sm-offset-1' style={{padding:10}}>
        <Paper zDepth={2}>
          <div className='row'>
            <div className='col-sm-12'>
              <div className='text-center'>
              </div>
              <p className='lead text-center text-info' style={{fontSize:25, fontWeight:400, marginTop:10}}>Personal Data</p>
              <div style={{borderBottomStyle:'solid', borderWidth:'1px',margin: 20, padding:10}}>
              <div style={{padding:10, fontSize:20, fontFamily:'Times New Roman'}}>
                <p><b>First Name: </b> John </p>
                <p><b>Middle Name: </b> Micheal</p>
                <p><b>Surname: </b>Doe</p>
                <p><b>Phone Number: </b> 08011123434</p>
                <p><b>Gender: </b>Male</p>
                <p><b>Address: </b>No1. Aguiyi Ironsi Road, Off Setraco Estate, Benin City, Nigeria</p>
                <p style={{textAlign:'center', fontSize:22}}><b>Next of Kin</b></p>
                <p><b>Full Name: </b> Daniel Raymond Doe </p>
                <p><b>Address: </b>Plot 2, Jaycee Avenue, Niger State</p>
                <p><b>Phone Number: </b> 08011123434</p>

              </div>
              </div>
            </div>
            <div className='col-sm-12'>
              <p className='lead text-center text-info' style={{fontSize:25, fontWeight:400}}>Examination Center Details</p>
              <div style={{borderBottomStyle:'solid', borderWidth:'1px',margin: 20, padding:10}}>
              <div style={{padding:10, fontSize:20, fontFamily:'Times New Roman'}}>
                <p><b>State: </b> Aba </p>
                <p><b>Local government: </b> Asaba LGA</p>
                <p><b>Exam Center: </b>Uratta Tech. College Aba 01003 Technical/Commercial Aba North No.300 Uratta Road, Aba P.O Box 946 Aba</p>
                <p><b>Exam Type: </b>National Business Certificate</p>
                <p className='lead text-center text-info' style={{fontSize:25, fontWeight:400}}>Photos of centers</p>

                 {/* Add a limit for photo uploaded with from the cbo to a max of 4 */}

                <div class="gallery">
                        <div className="container">
                          <div className="row">
                                    <div className="col-xs-3 gallery-item">
                                        <a href="#galleryImg1" className="link-gallery" data-toggle="modal" data-target="#modalGallery">
                                          <img src={require('../images/bird.jpeg')} style={{ height:'286px', width:'558px'}} className="img-responsive img-gallery" alt="Mabel"/>

                                        </a>
                                    </div>

                                    <div className="col-xs-3 gallery-item">
                                        <a href="#galleryImg1" className="link-gallery" data-toggle="modal" data-target="#modalGallery">
                                          <img src={require('../images/book.jpg')} style={{ height:'286px', width:'558px'}} className="img-responsive img-gallery" alt="Second Image"/>
                                        </a>
                                    </div>

                                    <div className="col-xs-3 gallery-item">
                                        <a href="#galleryImg1" className="link-gallery" data-toggle="modal" data-target="#modalGallery">
                                          <img src={require('../images/flo.jpg')} style={{ height:'286px', width:'558px'}} className="img-responsive img-gallery" alt="Third Image"/>
                                        </a>
                                    </div>

                                    <div className="col-xs-3 gallery-item">
                                        <a href="#galleryImg1" className="link-gallery" data-toggle="modal" data-target="#modalGallery">
                                          <img src={require('../images/flower.jpeg')} style={{ height:'286px', width:'558px'}} className="img-responsive img-gallery" alt="Fourth Image"/>
                                        </a>
                                    </div>
                                </div>
                        </div>
                      </div>
                      <div className="modal fade" id="modalGallery" tabindex="-1" role="dialog" aria-labelledby="modalGalleryLabel" aria-hidden="true">
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                              <h4 className="modal-title" id="modalGalleryLabel">Gallery</h4>
                            </div>

                            <div className="modal-body">
                              <div id="carouselGallery" className="carousel slide" data-ride="carousel" data-interval="false">
                                <div className="carousel-inner">
                                </div>
                              </div>
                            </div>
                            <div className="modal-footer">
                              <ul className="pagination">
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
              </div>

              </div>
            </div>
            <div className='col-sm-12'>
              <p className='lead text-center text-info' style={{fontSize:25, fontWeight:400}}>Payments</p>
              <div style={{margin: 20, padding:10}}>
              <div style={{padding:10, fontSize:20, fontFamily:'Times New Roman'}}>
                <p><b>Centre Inspection: </b> #50,000</p>
                <p><b>Registration Charges: </b> #1,500</p>
                <p><b>Contractor Registration Form: </b> #500</p>
                <br />
                <br />
                <p style={{fontSize:18}}><b>Total: </b> #52,000</p>
              </div>
              </div>
            </div>
          </div>
        </Paper>
            <div className='text-center' style={{marginTop:20 }}>
              <Link to='/user/admin/dashboard'>
                  <RaisedButton
                    labelStyle={{color:'white'}}
                    buttonStyle={{backgroundColor:'#16a085', borderColor:'white'}}
                    label="Approve"
                    //send email to notify center users on Acceptance of their center(s)
                  />
              </Link>&nbsp; &nbsp;
              <Link to='/user/admin/dashboard'>
                  <RaisedButton
                    labelStyle={{color:'white'}}
                    buttonStyle={{backgroundColor:'#b71c1c', borderColor:'white'}}
                    label="Reject"
                    //send email to notify center users on rejectionof their center(s)
                  />
              </Link>
           </div>
      </div>
    )
  }
  render() {
    return (
      <MuiThemeProvider><DashboardHeader children={this.showPageContent()} /></MuiThemeProvider>
    );
  }
}
