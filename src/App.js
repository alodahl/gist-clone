import React, { Component } from 'react';
import './App.css';
import Dashboard from "./components/Dashboard"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div><Dashboard/></div>
      </div>
    );
  }
}

export default App;