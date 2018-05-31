import React, {Component} from 'react'
import Paper from 'material-ui/Paper'

export default class Centers extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          Centers
        </p>
        <div className="accordion row" id="accordion">
          <div className="col-sm-10 col-sm-offset-1">

            <div className="card col-sm-4">
              <Paper zDepth={1}>
                <div className="card-header location" id="headingOne">
                  <h5 className="mb-0">
                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    <p className="location">Lagos</p> 
                    </button>
                  </h5>
                </div>
              </Paper>
            <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
              <div class="card-body">
                  <ul class="list-group">
                    <li class="list-group-item">FEDERAL SCIENCE TECHNICAL COLLEGE, OHANSO</li>
                    <li class="list-group-item">FEDERAL SCIENCE TECHNICAL COLLEGE, MICHIKA</li>
                    <li class="list-group-item">FEDERAL SCIENCE TECHNICAL COLLEGE , TUNGBO</li>
                    <li class="list-group-item">FEDERAL SCIENCE TECHNICAL COLLEGE, KAFANCHA</li>
                    <li class="list-group-item">FEDERAL SCIENCE TECHNICAL COLLEGE, IKARE AKOKO</li>
                  </ul>
              </div>
            </div>
          </div>

          <div className="card col-sm-4">
              <Paper zDepth={1}>
                <div className="card-header location" id="headingTwo">
                  <h5 className="mb-0">
                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <p className="location">Abuja</p> 
                    </button>
                  </h5>
                </div>
              </Paper>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
              <div class="card-body">
                  <ul class="list-group">
                    <li class="list-group-item">FEDERAL SCIENCE TECHNICAL COLLEGE, OHANSO</li>
                    <li class="list-group-item">FEDERAL SCIENCE TECHNICAL COLLEGE, MICHIKA</li>
                    <li class="list-group-item">FEDERAL SCIENCE TECHNICAL COLLEGE , TUNGBO</li>
                    <li class="list-group-item">FEDERAL SCIENCE TECHNICAL COLLEGE, KAFANCHA</li>
                    <li class="list-group-item">FEDERAL SCIENCE TECHNICAL COLLEGE, IKARE AKOKO</li>
                  </ul>
              </div>
            </div>
          </div>


          <div className="card col-sm-4">
              <Paper zDepth={1}>
                <div className="card-header location" id="headingOne">
                  <h5 className="mb-0">
                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <p className="location">Port-Harcourt</p> 
                    </button>
                  </h5>
                </div>
              </Paper>
            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
              <div class="card-body">
                 <ul class="list-group">
                    <li class="list-group-item">FEDERAL SCIENCE TECHNICAL COLLEGE, OHANSO</li>
                    <li class="list-group-item">FEDERAL SCIENCE TECHNICAL COLLEGE, MICHIKA</li>
                    <li class="list-group-item">FEDERAL SCIENCE TECHNICAL COLLEGE , TUNGBO</li>
                    <li class="list-group-item">FEDERAL SCIENCE TECHNICAL COLLEGE, KAFANCHA</li>
                    <li class="list-group-item">FEDERAL SCIENCE TECHNICAL COLLEGE, IKARE AKOKO</li>
                  </ul>
              </div>
            </div>
          </div>

          </div>
        </div>
      </div>
    );
  }
}
