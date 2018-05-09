import React, { Component } from 'react';
import logo from '../logo.jpg'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Footer from './Footer'
import '../App.css';
import {Redirect, Link} from 'react-router-dom'

export default class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
       <MuiThemeProvider >
         <div style={{marginTop:-20}}>
           {this.state.redirect && <Redirect to='/' push />}
           {this.state.searchRedirect && <Redirect to={'/search/'+this.state.search} push />}
           <div className='row hidden-xs' style={{border: '0.5px solid lightgrey', }}>
             <div className='row' style={{margin:10}}>
               <div className='col-md-6 col-sm-6'>
                 <div className='row'>
                   <div className='col-sm-2'>
                     <img src={logo} alt="logo" style={{height:50, width:100}} />
                   </div>
                   <div className='col-sm-10 text-center'>
                     <p className='lead' style={{marginTop:10}}>National Business and Technical Examinations Board</p>
                   </div>
                 </div>
               </div>
               <div className='col-md-3 col-sm-3'>
                 <div className='row'>
                   <div className='col-sm-3' style={{marginRight:-20}}>
                     <div className='pull-right'>
                       <i className='fas fa-map-marker-alt' style={{color:'#16a085'}}></i>
                     </div>
                   </div>
                   <div className='col-sm-9' style={{fontSize:10, lineHeight:1, lineSpace:1}}>
                     <div className='pull-left'>
                       <p>No. 1, Benin-Agbor Road, Ikpoba Hill, P.M.B 1747, Benin-City, Edo State, Nigeria,</p>
                       <p></p>
                     </div>
                   </div>
                 </div>
                 <div className='row'>
                   <div className='col-sm-3 text-center'>
                     <div className='pull-right'>
                       <i className="fas fa-copy" style={{color:'#16a085'}}></i>
                     </div>
                   </div>
                   <div className='col-sm-9' style={{marginLeft:-20}}>
                     <div className='pull-left' style={{fontSize:10, lineHeight:1, lineSpace:1}}>
                       <p> support@nabtebnigeria.gov.ng</p>
                       <span>+2348078840770</span>
                     </div>
                   </div>
                 </div>
               </div>
               <div className='col-md-3 col-sm-3'>
                 <div className='row'>
                   <div className='col-sm-12'>
                     <input type='text' className='form-control' placeholder="Search" style={{marginBottom:5}} />
                   </div>
                   <div className='col-sm-8'>
                     <select className='form-control'>
                       <option value='Everything'>Everything</option>
                       <option value='Centers'>Centers</option>
                       <option value="Courses">Courses</option>
                     </select>
                   </div>
                   <div className='col-sm-4'>
                     <span className='pull-right'>
                       <button className='btn btn-danger btn-sm'>GO</button>
                     </span>
                   </div>
                 </div>



               </div>
             </div>
         </div>
         <nav className="navbar navbar-default " style={{backgroundColor:'#16a085'}}>
     <div className="container-fluid " style={{marginLeft:'8%'}}>
       <div className="navbar-header">
         <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
           <span className="sr-only">Toggle navigation</span>
           <span className="icon-bar"></span>
           <span className="icon-bar"></span>
           <span className="icon-bar"></span>
         </button>
       </div>
         <div className='col-sm-10 col-sm-offset-1'>
           <div className="collapse navbar-collapse " id="bs-example-navbar-collapse-1">
             <ul className="nav navbar-nav">
               <li onClick={()=>this.setState({selected:'home'})}> <Link  to='/' style={{color: this.state.selected === 'home' ? 'black' :'white'}}>HOME <span className="sr-only">(current)</span></Link></li>
               <li onClick={()=>this.setState({selected:'funding'})}><Link to="/offers" style={{color:this.state.selected === 'funding' ? 'black' :'white'}}>OUR MANDATE</Link></li>
               <li onClick={()=>this.setState({selected:'training'})}><Link to="/examinations" style={{color:this.state.selected === 'training' ? 'black' :'white'}}>EXAMINATIONS</Link></li>
               <li onClick={()=>this.setState({selected:'market'})}><Link to="/centers" style={{color:this.state.selected === 'market' ? 'black' :'white'}}>CENTERS</Link></li>
               <li onClick={()=>this.setState({selected:'news'})}><Link to="/news" style={{color:this.state.selected === 'news' ? 'black' :'white'}}>NEWS</Link></li>
               <li onClick={()=>this.setState({selected:'contact'})}><Link to="/contact" style={{color:this.state.selected === 'contact' ? 'black' :'white'}}>CONTACT US</Link></li>
               <li onClick={()=>this.setState({selected:'register'})}>
                 {!this.state.loggedIn ? <Link style={{color:this.state.selected === 'register' ? 'black' :'white'}} to='/login'>REGISTER/LOGIN</Link>:
                   <Link onClick={()=>this.signOut()} style={{color:this.state.selected === 'contact' ? 'black' :'white'}}>
                   LOGOUT
                 </Link>
               }
               </li>
             </ul>
             {/* <div className='pull-right' style={{margin:5}}>
               <Link  to='/cart'>
               <img src={require('../images/cart.png')} style={{ height:40, width:40}} />
               </Link>
             </div> */}

           </div>
         </div>


     </div>
   </nav>
   <div className='row hidden-lg hidden-sm hidden-md' style={{margin:10}}>
     <div className='col-xs-12'>
       <div className='row'>
         <div className='col-xs-2'>
           <img src={logo} alt="logo" style={{height:50, width:100}} />
         </div>
         <div className='col-xs-10 text-center'>
           <p className='lead'>National Business and Technical Examinations Board</p>
         </div>
       </div>
     </div>
   </div>
           {this.props.children}
         </div>
         <div className='col-sm-12' style={{backgroundColor:'#E0E0E0', marginTop:40}}>
           <Footer />
         </div>
       </MuiThemeProvider>
    );
  }
}
