import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './iconosSociales.css';

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

                                        <i className="material-icons" >  desktop_mac</i> Inicio
                            </NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink exact={true} className="nav-link" to={'/todos'}>
                                        <i className="material-icons" > cloud_done</i> Todos
                            </NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink exact={true} className="nav-link" to={'/productos'}>
                                        <i className="material-icons" >local_grocery_store</i>Productos
                            </NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink exact={true} className="nav-link" to={'/servicios'}>
                                       <i className="material-icons" >supervisor_account</i>Servicios
                            </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact={true} className="nav-link" to={'/contactos'}>
                                        <i className="material-icons" >contact_mail</i> Contacto
                            </NavLink>
                                </li>
                            </ul>

                           <hr />

                            <ul className="nav flex-column">

                                <li className="nav-item"><NavLink exact={true} className="nav-link" to={'/blog'}> <i className="material-icons" >perm_media</i> Blog</NavLink> </li>
                                <li className="nav-item"><NavLink exact={true} className="nav-link" to={'/about'}><i className="material-icons" >domain</i> About</NavLink></li>
                                <li className="nav-item"><NavLink exact={true} className="nav-link" to={'/providers'}><i className="material-icons" >build</i> Providers</NavLink></li>

                            </ul>

                            
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}

export default LeftMenu;