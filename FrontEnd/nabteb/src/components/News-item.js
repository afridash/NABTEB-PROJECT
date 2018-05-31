import React, {Component} from 'react'
import Paper from 'material-ui/Paper'

export default class NewsItem extends Component{
    render(){
        return(
            <div className="container">
                <h2>Upcoming NTC and NBC Examinations</h2>
                <label>28th March, 2018</label>
                <div className="row">
                    <div className="col-md-6  news-block">
                        <img src="http://placehold.it/400x250/cccccc/ffffff" style={{width:'100%', height:'100%'}} />
                    </div>
                    <div className="col-md-6 news-block">
                        <p className="text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam temporibus praesentium facere ad laborum veritatis quasi quaerat quo placeat ipsam. Eligendi, odit ad neque nihil dolore in reiciendis, reprehenderit. Quo fugit voluptate necessitatibus dignissimos eum ab error est sapiente earum, sit consequatur eius aliquam maxime suscipit autem quis nesciunt explicabo!
                        </p>
                        <p className="text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam temporibus praesentium facere ad laborum veritatis quasi quaerat quo placeat ipsam. Eligendi, odit ad neque nihil dolore in reiciendis, reprehenderit. Quo fugit voluptate necessitatibus dignissimos eum ab error est sapiente earum, sit consequatur eius aliquam maxime suscipit autem quis nesciunt explicabo!
                        </p>
                        <p className="text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam temporibus praesentium facere ad laborum veritatis quasi quaerat quo placeat ipsam. Eligendi, odit ad neque nihil dolore in reiciendis, reprehenderit. Quo fugit voluptate necessitatibus dignissimos eum ab error est sapiente earum, sit consequatur eius aliquam maxime suscipit autem quis nesciunt explicabo!
                        </p>
                        <p className="text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam temporibus praesentium facere ad laborum veritatis quasi quaerat quo placeat ipsam. Eligendi, odit ad neque nihil dolore in reiciendis, reprehenderit. Quo fugit voluptate necessitatibus dignissimos eum ab error est sapiente earum, sit consequatur eius aliquam maxime suscipit autem quis nesciunt explicabo!
                            <br/>
                            <a href="#">Register Now</a>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}