import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Link} from 'react'
import CatAdd from './Components/CatAdd'
import logo from './logo.svg';
import './App.css';
// import CatIndex from './Components/CatIndex'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Cat World!</h2>
        </div>
        <Router>
          <div>
            <Route path="/catadd" component={CatAdd}  />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
