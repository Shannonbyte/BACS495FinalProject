import React, { Component } from 'react';
import Posts from './Posts';
import './Body.css'

class Body extends Component{
  render(){
    return (
      <div className="container-justify-content-start">
        <div className="row">
          <div className="col">
            <h2>Sidebar</h2>
          </div>
          <div class="col-7">
            <h2>Main Content (placeholder for posts)</h2>
            <Posts/>
          </div>
          <div class="col">
            <h2>Right Sidebar</h2>
          </div>
        </div>
      </div>
    )
  }
}

export default Body;
