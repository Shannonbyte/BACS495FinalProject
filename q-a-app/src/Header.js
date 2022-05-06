import React, { Component } from 'react';
import './Header.css'

class Header extends Component{
  render(){
    return (
      <div className="BigHeader">
      <div className="row py-2">
        <div className="col-5">
          <h1 className="ms-2"> University of Northern Colorado</h1>
        </div>
        <div className="col-5">
          <h1> Q & A App </h1>
        </div>
        <div className="col-2">
        

        </div>
      </div>
      </div>
    )
  }
}

export default Header;
