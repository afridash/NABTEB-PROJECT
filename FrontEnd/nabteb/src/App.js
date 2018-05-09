import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Redirect, Link} from 'react-router-dom'
import './assets/css/slider.css'

class App extends Component {
  render() {
    return (
      <div className='col-sm-12' >
        <div className="row" style={{marginTop:-20}}>
    <div id="myCarousel" className="carousel slide" data-ride="carousel">

      <div className="carousel-inner">

        <div className="item active">
          <img src="http://placehold.it/1200x400/cccccc/ffffff" style={{width:'100%', height:'50%'}} />
           <div className="carousel-caption">
            <button className='btn btn-primary' style={{backgroundColor:'#16a085', borderColor:'transparent'}}>Read More</button>
          </div>
        </div>

         <div className="item">
          <img src="http://placehold.it/1200x400/999999/cccccc" style={{width:'100%', height:'50%'}} />
           <div className="carousel-caption">
            <button className='btn btn-primary' style={{backgroundColor:'#16a085', borderColor:'transparent'}}>Read More</button>
          </div>
        </div>

        <div className="item">
          <img src="http://placehold.it/1200x400/dddddd/333333" style={{width:'100%'}}/>
           <div className="carousel-caption">
            <button className='btn btn-primary' style={{backgroundColor:'#16a085', borderColor:'transparent'}}>Read More</button>
          </div>
        </div>

        <div className="item">
          <img src="http://placehold.it/1200x400/999999/cccccc" style={{width:'100%'}} />
           <div className="carousel-caption">
            <button className='btn btn-primary' style={{backgroundColor:'#16a085', borderColor:'transparent'}}>Read More</button>
          </div>
        </div>

      </div>


    	<ul className="nav nav-pills nav-justified nav2 red">
          <li data-target="#myCarousel" data-slide-to="0" className="active" style={{fontSize:16}}><a href="#">Examinations</a></li>
          <li data-target="#myCarousel" data-slide-to="1" style={{fontSize:16}}><a href="#">National Vocation Qualification</a></li>
          <li data-target="#myCarousel" data-slide-to="2" style={{fontSize:16}}><a href="#">Research</a></li>
          <li data-target="#myCarousel" data-slide-to="3" style={{fontSize:16}}><a href="#">Achievements</a></li>
        </ul>
        <div className='row' style={{marginTop:15, padding:10, }}>
        <div className='col-sm-4' style={{borderRadius:5, fontSize:20}}>
          <h3 className='text-center' style={{color:'#16a085'}}>Mission</h3>
          <div style={{borderBottomStyle:'solid', borderWidth:'1px', margin:10, textAlign:'justify'}}>
            <h4 style={{lineHeight:1.3, fontFamily:"Times New Roman, Times, serif"}}>Become a Globally Acknowledged Assessment Body for Craftsmen and Technicians.</h4>
          </div>
          <h3 className='text-center' style={{color:'#16a085'}}>Vision</h3>
          <div style={{borderBottomStyle:'solid', borderWidth:'1px', textAlign:'justify', marginLeft:10}}>
            <h4 style={{lineHeight:1.3, fontFamily:"Times New Roman, Times, serif"}}>NABTEB is a vision-led, mission-driven public institution with a vision:
              Be a Globally Recognized Assessment and Certification Body Preparing Candidates for the World of Work and Academic/Professional Excellence.</h4>
          </div>
          <h3 className='text-center' style={{color:'#16a085'}}>Brief of NABTEB</h3>
          <div style={{textAlign:'justify', marginLeft:10}}>
            <h4 style={{lineHeight:1.3, fontFamily:"Times New Roman, Times, serif"}}>The National Business and Technical Examinations Board was established in 1992 to domesticate craft level examinations which were hitherto conducted by City & Guilds, Pittman’s, and Royal Society of Arts all of UK in accordance with the provisions of the National Policy on Education. Its establishment was the climax of an evolutionary process which spanned 15 years from 1977 to 1992 and in which FOUR Government Panels at different times were set up to review the place and structure of public examinations in our educational system.</h4>
          </div>

        </div>
        <div className='col-sm-4' style={{fontSize:20}}>
          <h3 className='text-center' style={{color:'#16a085'}}>Quick Links</h3>
          <div style={{border:'1px solid black', borderRadius:4, textAlign:'left', fontFamily:"Times New Roman, Times, serif"}}>
            <ul>
              <li><h4><Link to='#'>Entry Guide</Link></h4></li>
              <li><h4><Link to='#'>Management Team</Link></h4></li>
              <li><h4><Link to='#'>Research activities</Link></h4></li>
              <li><h4><Link to='#'>Department</Link></h4></li>
              <li><h4><Link to='#'>Examination Fees</Link></h4></li>
              <li><h4><Link to='#'>NABTEB Centers</Link></h4></li>
              <li><h4><Link to='#'>Federal Science Technical College</Link></h4></li>
              <li><h4><Link to='#'> About NABTEB</Link></h4></li>


            </ul>
          </div>

        </div>
        <div className='col-sm-4' style={{fontSize:20, marginTop:-5}}>
          <h3 className='text-center' style={{color:'#16a085'}}>News & Events</h3>
          <div style={{marginTop:-10}}>
            <div className='row' style={{borderBottomStyle:'solid', borderWidth:'1px', margin:5}}>
              <div className='col-sm-4'>
                <img src={require('./images/bird.jpeg')} style={{ height:'100%', width:'100%', marginTop:15}} />
              </div>
                <div className='col-sm-8' style={{textAlign:'left'}}>
                  <h4 style={{lineHeight:1.3, fontFamily:"Times New Roman, Times, serif"}}>Nabteb registrar charges candidates on educational advancement, career progression <Link to="#" style={{color:'#e74c3c'}}>Read More &raquo; </Link></h4>
                </div>
            </div>
            <div className='row' style={{borderBottomStyle:'solid', borderWidth:'1px', margin:5}}>
              <div className='col-sm-4'>
                <img src={require('./images/bird.jpeg')} style={{ height:'100%', width:'100%', marginTop:15}} />
              </div>
                <div className='col-sm-8' style={{textAlign:'left'}}>
                  <h4 style={{lineHeight:1.3, fontFamily:"Times New Roman, Times, serif"}}>Nabteb registrar charges candidates on educational advancement, career progression <Link to="#" style={{color:'#e74c3c'}}>Read More &raquo; </Link></h4>
                </div>
            </div>
            <div className='row' style={{borderBottomStyle:'solid', borderWidth:'1px', margin:5}}>
              <div className='col-sm-4'>
                <img src={require('./images/bird.jpeg')} style={{ height:'100%', width:'100%', marginTop:15}} />
              </div>
                <div className='col-sm-8' style={{textAlign:'left'}}>
                  <h4 style={{lineHeight:1.3, fontFamily:"Times New Roman, Times, serif"}}>Nabteb registrar charges candidates on educational advancement, career progression <Link to="#" style={{color:'#e74c3c'}}>Read More &raquo; </Link></h4>
                </div>
            </div>

             <div className='row' style={{ margin:5, marginTop:10}}>
               <div className='col-sm-4'>
                 <img src={require('./images/bird.jpeg')} style={{ height:'100%', width:'100%', marginTop:15}} />
               </div>
                 <div className='col-sm-8' style={{textAlign:'left'}}>
                   <h4 style={{lineHeight:1.3, fontFamily:"Times New Roman, Times, serif"}}>Nabteb registrar charges candidates on educational advancement, career progression <Link to="#" style={{color:'red'}}>Read More &raquo; </Link></h4>
                 </div>
             </div>
             <button className='btn btn-primary' style={{backgroundColor:'#16a085', borderColor:'#16a085'}}> Read More News &raquo;</button>
          </div>


          </div>
        </div>

        <div className='row'>
        <div className='col-sm-4' style={{fontSize:20}}>


        </div>
        </div>
        </div>
</div>
</div>

    );
  }
}

export default App;
