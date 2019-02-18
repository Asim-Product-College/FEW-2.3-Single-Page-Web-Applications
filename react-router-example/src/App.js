import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './HomePage/HomePage';
import Bio from './Bio/Bio';

import {
  Route,
  Link
} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/bio">Bio</Link>

        </div>

        <Route exact  path="/" component={Homepage}/>
        <Route path="/bio" component={Bio}/>

      </div>
    );
  }
}

export default App;
