import React, { Component } from 'react';
import './Header.css'

class Header extends Component{
  render(){
    return (
      <div className="BigHeader">
      <div className="row py-2">
        <div className="col-5">
          <h1> University Q&A App </h1>
        </div>
        <div className="col-5">
          <h1> Another Placeholder </h1>
        </div>
        <div className="col-2">
          <button
            className="LoginButton"
            type="button"
            class="btn btn-outline-primary btn-lg w-75">
            Login
          </button>
        </div>
      </div>
      </div>
    )
  }
}

export default Header;
