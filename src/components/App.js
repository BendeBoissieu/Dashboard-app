import React, { Component } from 'react';
import Widget from
  '../components/Widget';
import '../styles/Widget.css';
import logo from '../logo.svg';
// Import widgets being used in this component

// Add in styles
import '../styles/App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
