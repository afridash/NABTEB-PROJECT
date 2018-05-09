import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
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
            <h3>Headline</h3>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. <a href="http://sevenx.de/demo/bootstrap-carousel/" target="_blank" className="label label-danger">Bootstrap 3 - Carousel Collection</a></p>
          </div>
        </div>

         <div className="item">
          <img src="http://placehold.it/1200x400/999999/cccccc" style={{width:'100%', height:'50%'}} />
           <div className="carousel-caption">
            <h3>Headline</h3>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. <a href="http://sevenx.de/demo/bootstrap-carousel/" target="_blank" className="label label-danger">Bootstrap 3 - Carousel Collection</a></p>
          </div>
        </div>

        <div className="item">
          <img src="http://placehold.it/1200x400/dddddd/333333" style={{width:'100%'}}/>
           <div className="carousel-caption">
            <h3>Headline</h3>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. <a href="http://sevenx.de/demo/bootstrap-carousel/" target="_blank" className="label label-danger">Bootstrap 3 - Carousel Collection</a></p>
          </div>
        </div>

        <div className="item">
          <img src="http://placehold.it/1200x400/999999/cccccc" style={{width:'100%'}} />
           <div className="carousel-caption">
            <h3>Headline</h3>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
          </div>
        </div>

      </div>


    	<ul className="nav nav-pills nav-justified nav2">
          <li data-target="#myCarousel" data-slide-to="0" className="active" style={{fontSize:16}}><a href="#">Examinations</a></li>
          <li data-target="#myCarousel" data-slide-to="1" style={{fontSize:16}}><a href="#">National Vocation Qualification</a></li>
          <li data-target="#myCarousel" data-slide-to="2" style={{fontSize:16}}><a href="#">Research</a></li>
          <li data-target="#myCarousel" data-slide-to="3" style={{fontSize:16}}><a href="#">Achievements</a></li>
        </ul>
        <div className='col-sm-4' style={{borderRadius:5, border:'1px solid black'}}>hello</div>
        <div className='col-sm-4' style={{backgroundColor:'green'}}>hello</div>
        <div className='col-sm-4' style={{backgroundColor:'brown'}}>hello</div>
    </div>
</div>
</div>

    );
  }
}

export default App;
