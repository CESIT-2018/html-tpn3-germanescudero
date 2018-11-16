import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './Navbar';
import Register from '../components/sesionPages/Register';
import Login from '../components/sesionPages/Login';
import Inicio from './Inicio'; 


class App extends Component {
  render() {
    return (
      <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={ Inicio } />
              <div className="container">
                <Route exact path="/register" component={ Register } />
                <Route exact path="/login" component={ Login } />
              </div>
          </div>
        </Router>
    );
  }
}

export default App;