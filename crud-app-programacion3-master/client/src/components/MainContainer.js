import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import Welcomes from './welcomePages/Welcomes';
import ListTodo from './todosPages/ListTodo';
import ShowTodo from './todosPages/ShowTodo';
import NewTodo from './todosPages/NewTodo';
import EditTodo from './todosPages/EditTodo';


import ListaProductos from './productosPages/ListaProductos';
import NuevoProducto from './productosPages/NuevoProducto';
import VerProducto from './productosPages/VerProducto';
import EditarProducto from './productosPages/EditarProducto';



class MainContainer extends Component {

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                        <Route exact path="/" component={Welcomes}/>

                        <Route exact path="/todos" component={ListTodo}/>
                        <Route exact path="/todos/new" component={NewTodo}/>
                        <Route exact path="/todos/:id/show" component={ShowTodo}/>
                        <Route exact path="/todos/:id/edit" component={EditTodo}/>
                       
                        
                        <Route exact path="/productos" component={ListaProductos}/>
                        <Route exact path="/productos/new" component={NuevoProducto}/>
                        <Route exact path="/productos/:id/show" component={VerProducto}/>
                        <Route exact path="/productos/:id/edit" component={EditarProducto}/>
                        
                    </main>
                </div>
            </div>
        );
    }
}

export default MainContainer;