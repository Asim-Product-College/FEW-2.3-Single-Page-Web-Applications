import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './Title';
import DisplayTime from './DisplayTime';
import Clock from './Clock';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">        
        <Title title="It was at this moment in time"/>
        {/* <DisplayTime displayTime={new Date()}/> */}
        <Clock />
        <Title title="Asim Meets React"/>

          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
