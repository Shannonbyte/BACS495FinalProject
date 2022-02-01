import React, { Component } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';

class HomePage extends Component {
  render() {
    return (
      <div className = 'homepage'>
        <Header/>
        <Footer/>
      </div>
    )
  }
}

export default HomePage;
