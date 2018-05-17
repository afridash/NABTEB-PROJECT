import React, { Component } from 'react'
import '../App.css'
import {Link, Redirect} from 'react-router-dom'
import Paper from 'material-ui/Paper'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DashboardHeader from './Dashboard-header'
import RaisedButton from 'material-ui/RaisedButton'
import '../assets/css/slider.css'
import getSymbolFromCurrency from 'currency-symbol-map/'

export default class AdminCenterInfo extends Component {
  constructor (props) {
    super(props)
    this.centerId = this.props.match.params.id
    this.state = {
      pictures:[],
      loading:true,
      currency:getSymbolFromCurrency("NGN")
    }
  }
  componentWillMount () {
    fetch("http://localhost:8080/centers/"+this.centerId).then(response => response.json()).then(center => {
      fetch("http://localhost:8080/users/"+center.ownerId).then(response => response.json()).then(user => {
        this.setState(center)
        this.setState(user)
        this.setState({centerState:center.state})
      }).catch(error => {
        alert(error)
      })
    }).catch(error => {
      alert(error)
    })
  }
  updateStatus () {
    fetch("http://localhost:8080/centers/"+this.centerId+"/update/approved").then(()=> {
      alert("Center has been successfully approved")
      this.setState({redirect:true})
    }).catch(error => {

    })
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
                <p><b>First Name: </b> {this.state.firstName} </p>
                <p><b>Middle Name: </b> {this.state.middleName}</p>
                <p><b>Surname: </b>{this.state.lastName}</p>
                <p><b>Phone Number: </b> {this.state.phoneNumber}</p>
                <p><b>Gender: </b>{this.state.gender}</p>
                <p><b>State: </b>{this.state.state}</p>
                <p><b>LGA: </b>{this.state.lga}</p>
                <p><b>Address: </b>{this.state.address}</p>
                <p style={{textAlign:'center', fontSize:22}}><b>Next of Kin</b></p>
                <p><b>Full Name: </b> {this.state.kinFullName} </p>
                <p><b>Address: </b>{this.state.kinAddress}</p>
                <p><b>Phone Number: </b> {this.state.kinPhoneNumber}</p>
              </div>
              </div>
            </div>
            <div className='col-sm-12'>
              <p className='lead text-center text-info' style={{fontSize:25, fontWeight:400}}>Examination Center Details</p>
              <div style={{borderBottomStyle:'solid', borderWidth:'1px',margin: 20, padding:10}}>
              <div style={{padding:10, fontSize:20, fontFamily:'Times New Roman'}}>
                <p><b>Exam Center: </b>{this.state.centerName}</p>
                <p><b>State: </b> {this.state.centerState} </p>
                <p><b>Local government: </b> {this.state.localGovernment}</p>
                <p><b>Address: </b>{this.state.location}</p>
                <p><b>Type: </b>{this.state.centerType}</p>
                <p className='lead text-center text-info' style={{fontSize:25, fontWeight:400}}>Photos of centers</p>

                 {/* Add a limit for photo uploaded with from the cbo to a max of 4 */}

                  <div className="row">
                    <div className="col-sm-12">
                      {this.state.pictures.map((picture)=>
                        <div className="col-sm-3">
                            <a href="#galleryImg1" className="link-gallery" data-toggle="modal" data-target="#modalGallery" onClick={()=>this.setState({attachment:picture.attachment})}>
                              <img src={picture.attachment} style={{ height:200, width:200}} className="img-responsive img-gallery" alt="Mabel"/>
                            </a>
                        </div>
                      )}
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
                            <img src={this.state.attachment} style={{ height:400, width:600}} className="img-responsive img-gallery" alt="Mabel"/>
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
                <p><b>Centre Inspection: </b> {this.state.currency}50,000.00</p>
                <p><b>Registration Charges: </b>{this.state.currency}1,500.00</p>
                <p><b>Contractor Registration Form: </b>{this.state.currency}500.00</p>
                <br />
                <p style={{fontSize:22}}><b>Total: </b>{this.state.currency}52,000.00</p>
              </div>
              </div>
            </div>
          </div>
        </Paper>
            <div className='text-center' style={{marginTop:20 }}>
              <RaisedButton
                labelStyle={{color:'white'}}
                buttonStyle={{backgroundColor:'#16a085', borderColor:'white'}}
                label="Approve"
                onClick={()=>this.updateStatus()}
                //send email to notify center users on Acceptance of their center(s)
              />&nbsp; &nbsp;
              <Link to='/user/admin/centers'>
              <RaisedButton
                labelStyle={{color:'white'}}
                buttonStyle={{backgroundColor:'#b71c1c', borderColor:'white'}}
                label="Close"
              />
              </Link>
            </div>
            {this.state.redirect && <Redirect to='/user/admin/centers' push  />}
      </div>
    )
  }
  render() {
    return (
      <MuiThemeProvider><DashboardHeader materials={true} children={this.showPageContent()} /></MuiThemeProvider>
    );
  }
}
