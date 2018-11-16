import React, {Component} from 'react';
//import {BrowserRouter} from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './dashboard.css'
//import Header from './Header';
import LeftMenu from './LeftMenu';
import MainContainer from './MainContainer';
import Navbar from './Navbar';
import Register from '../components/sesionPages/Register';
import Login from '../components/sesionPages/Login';
//import Inicio from './Inicio'; <Route exact path="/" component={Inicio} />

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div>
                        <Navbar>
                        <div className="container">
                            <Route exact path="/register" component={Register} />
                            <Route exact path="/login" component={Login} />
                        </div>
                        </Navbar>
                    </div>
                   
                    <LeftMenu />
                    <MainContainer />


                </div>
            </Router>
        );
    }
}

export default App;