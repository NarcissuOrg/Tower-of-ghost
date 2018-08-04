import React, { Component } from 'react';
import './App.css';

import Header from './Header/Header';
import Content from './Content/Content';
import Footer from './Footer/Footer';
class App extends Component {
  render() {
    let env = process.env.REACT_APP_ENV == `develop` ? `dev` : 'prod';
    console.log(process.env)
    return (
      <div className={"App" + ` ${env}`}>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
