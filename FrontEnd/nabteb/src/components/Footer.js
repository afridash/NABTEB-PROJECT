import React, {Component} from 'react'
import {Link} from 'react-router-dom'
export default class Footer extends Component {
  render () {
    return (
      <div className='col-sm-10 col-sm-offset-1'>
        <div className='col-sm-4' style={{color:'#34495e'}}>
          <h4 className='text-center'>FAQs</h4>
          <p>For more information, see frequently asked questions <Link to='/faqs'>here</Link></p>
        </div>
        <div className='col-sm-4' style={{color:'#34495e'}}>
          <h4 className='text-center' >Contact Us</h4>
          <p>No. 1, Benin-Agbor Road
            Ikpoba Hill, P.M.B 1747, Benin-City,
            Edo State, Nigeria </p>
            <p>
              T: +2348078840770
            </p>
            <p>E: support@nabteb.gov.ng</p>
        </div>
        <div className='col-sm-4' style={{color:'#34495e'}}>
          <h4 className='text-center'>Downloads</h4>
          <ul>
            <li><a style={{color:'#34495e'}} href="#">Download NTC/NBC Examination Structure</a></li>
            <li><a style={{color:'#34495e'}} href="#">Download ANTC/ANBC Examination Structure</a></li>
            <li><a style={{color:'#34495e'}} href="#">Download Entry Guide</a></li>
            <li><a style={{color:'#34495e'}} href="#">Download TA60</a></li>
            <li><a style={{color:'#34495e'}} href="#">Download TA61</a></li>
          </ul>
        </div>
      </div>
    )
  }
}
