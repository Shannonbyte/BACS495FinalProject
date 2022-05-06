import React, { Component } from 'react';
import Posts from './Posts';
import Users from './Users';
import './Body.css'




class Body extends Component{


  render(){
    return (
      <div className="container-justify-content-start">
        <div className="row">
          <div className="col m-2">
            <h5>
            Place for additional features
            Like Searching, categories, or social features
            </h5>
          </div>
          <div class="col-7 m-2">
            <Posts/>
          </div>
          <div class="col m-2">
            <Users/>
          </div>
        </div>
      </div>
    )
  }
}

export default Body;
