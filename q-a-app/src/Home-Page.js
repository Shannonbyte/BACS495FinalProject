import React, { Component } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Body from './Body.js';

class HomePage extends Component {

  render() {
    return (
      <div className = 'homepage'>
        <Header/>
        <Body/>
        <Footer/>
      </div>
    )
  }
}

export default HomePage;
