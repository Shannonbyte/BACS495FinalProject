import React, { Component } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Body from './Body.js';

class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = { apiResponse: '' };
}

callAPI() {
    fetch('http://localhost:9000/test')
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
}

componentWillMount() {
    this.callAPI();
}

  render() {
    return (
      <div className = 'homepage'>
        <Header/>
        <Body/>
        <p className='api-response'>;{this.state.apiResponse}</p>
        <Footer/>
      </div>
    )
  }
}

export default HomePage;
