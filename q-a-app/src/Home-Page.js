import React, { Component } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Body from './Body.js';

class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
}

callAPI() {
    fetch('http://localhost:9000/test')
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));

}

componentDidMount() {
    this.callAPI();
}

  render() {
    return (
      <div className = 'homepage'>
        <Header/>
        <Body/>
        <div>
          <p>{this.state.apiResponse}</p>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default HomePage;
