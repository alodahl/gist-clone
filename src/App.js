import React, { Component } from 'react';
import Dashboard from "./components/Dashboard"
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
       <Router>
        <Route path="/" component={Dashboard}/>
       </Router>
    );
  }
}

export default App;
