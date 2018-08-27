import React, { Component } from 'react';
import Widget from
  '../components/Widget';
import Loading from
  '../components/Loading';
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


        </header>

        <div className="header">
           <h1 className="App-title">Welcome to my Dashboard</h1>
          <h2>{this.props.heading}</h2>
          {this.props.loading ? <Loading />:""}
        </div>
        <div className="content">
         {this.props.children}
        </div>

      </div>
    );
  }
}

export default App;



