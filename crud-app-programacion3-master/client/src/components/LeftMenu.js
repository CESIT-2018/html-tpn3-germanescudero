import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './iconosSociales.css';

import {fetchCarritoByUsuario}from '../actions';

import { connect } from 'react-redux';

class LeftMenu extends Component {
    

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                        <div className="sidebar-sticky">
                            <ul className="nav flex-column">

                                <li className="nav-item">

                                    <NavLink exact={true} className="nav-link" to={'/'}>
                                    <h6>   
                                        <i className="fa fa-desktop" aria-hidden="true"></i> Inicio</h6> 
                                    </NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink exact={true} className="nav-link" to={'/todos'}>
                                    <h6> <i className="fa fa-cloud-upload-alt" aria-hidden="true"></i> Todos</h6> 
                                    </NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink exact={true} className="nav-link" to={'/productos'}>
                                    <h6><i className="fa fa-box-open" aria-hidden="true"></i> Productos</h6> 
                                    </NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink exact={true} className="nav-link" to={'/servicios'}>
                                    <h6><i className="fa fa-diagnoses" aria-hidden="true"></i> Servicios</h6>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact={true} className="nav-link" to={'/contactos'}>
                                    <h6><i className="fa fa-file-signature" aria-hidden="true"></i> Contacto</h6>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                     <NavLink exact={true} className="nav-link" to={`/shoppingCart/${this.props.auth.name}`}>
                                   <h6> <i className="fa fa-shopping-cart" aria-hidden="true"></i>  
                                      Shopping Cart</h6> 
                                     
                                     </NavLink>
                                </li>
                                
                            </ul>

                          
                                    
                                  
                                    
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {//conecta a los estados
    return {
        auth: state.auth.user,
        carritos: state.carritos.list
    };
}

export default connect(mapStateToProps, { fetchCarritoByUsuario})(LeftMenu);