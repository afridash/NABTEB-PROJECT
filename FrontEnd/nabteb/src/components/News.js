import React, {Component} from 'react'
import Paper from 'material-ui/Paper'

export default class News extends Component {
  render() {
    return (
      <div className="container col-sm-10 col-sm-offset-1">
        <h3 className='text-info text-center'>News</h3>
        <br/>
        <div className="row">
          <div className="col-md-6">
            <Paper zDepth={1}>
              <div className='panel panel-default'>
                <div className='panel-heading'>
                  <div className='panel-title'>
                    Upcoming NTC and NBC Examinations
                  </div>
                </div>
                <div className='panel-body'>
                  <img src="http://placehold.it/250x150/cccccc/ffffff" style={{width:'100%', height:'100%'}} />
                  <br/>
                  <br/>
                  <p>Registration now open for the National Technical Certificate (NTC)examinations, and National Business Certificate (NBC) examinations twice every year. </p>
                  <p><b><a href="/news/{id}" class="btn btn-primary">Read More</a></b></p>
                </div>
              </div>
            </Paper>
          </div>
          <div className="col-md-6">
            <Paper zDepth={1}>
              <div className='panel panel-default'>
                <div className='panel-heading'>
                  <div className='panel-title'>Upcoming NTC and NBC Examinations</div>
                </div>
                <div className='panel-body'>
                  <img src="http://placehold.it/250x150/cccccc/ffffff" style={{width:'100%', height:'100%'}} />
                  <br/>
                  <br/>
                  <p>Registration now open for the National Technical Certificate (NTC)examinations, and National Business Certificate (NBC) examinations twice every year. </p>
                  <p><b><a href="/news/{id}" class="btn btn-primary">Read More</a></b></p>
                </div>
              </div>
            </Paper>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <Paper zDepth={1}>
              <div className='panel panel-default'>
                <div className='panel-heading'>
                  <div className='panel-title'>
                    Upcoming NTC and NBC Examinations
                  </div>
                </div>
                <div className='panel-body'>
                  <img src="http://placehold.it/250x150/cccccc/ffffff" style={{width:'100%', height:'100%'}} />
                  <br/>
                  <br/>
                  <p>Registration now open for the National Technical Certificate (NTC)examinations, and National Business Certificate (NBC) examinations twice every year. </p>
                  <p><b><a href="/news/{id}" class="btn btn-primary">Read More</a></b></p>
                </div>
              </div>
            </Paper>
          </div>
          <div className="col-md-6">
            <Paper zDepth={1}>
              <div className='panel panel-default'>
                <div className='panel-heading'>
                  <div className='panel-title'>Upcoming NTC and NBC Examinations</div>
                </div>
                <div className='panel-body'>
                  <img src="http://placehold.it/250x150/cccccc/ffffff" style={{width:'100%', height:'100%'}} />
                  <br/>
                  <br/>
                  <p>Registration now open for the National Technical Certificate (NTC)examinations, and National Business Certificate (NBC) examinations twice every year. </p>
                  <p><b><a href="/news/{id}" class="btn btn-primary">Read More</a></b></p>
                </div>
              </div>
            </Paper>
          </div>
        </div>
      </div>
    );
  }
}
