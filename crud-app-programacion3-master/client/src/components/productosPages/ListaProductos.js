import React, {Component} from 'react';//importa las acciones , las conecta y las mapea con el state
import {connect} from 'react-redux';
import {fetchProductos,deleteProducto} from '../../actions';
import { Link } from 'react-router-dom';

class ListaProductos extends Component {

    componentDidMount(){
        this.props.fetchProductos();
    }

    renderProductos() {
        return this.props.listaProductos.map(producto => {
            return (
            <tr key={producto._id}>
                
                <td>{producto.nombre}</td>
                <td>{producto.precio}</td>
                <td>{producto.stock}</td>
                <td>{producto.descripcion}</td>
                <td>
                <Link to={`/productos/${producto._id}/show`} className=""><i className="material-icons">visibility</i></Link>&nbsp;
                <Link to={`/productos/${producto._id}/edit`} className=""><i className="material-icons" >edit</i></Link>&nbsp;
                <a className="mr-2" href={`/productos`} onClick={()=>{if(window.confirm('¿Estás seguro de eliminar este item: '+producto.nombre+ '?'))this.props.deleteProducto(producto._id)}}  ><i className="material-icons">delete</i></a>
               
                </td>
            </tr>
            )
        });
    }
    

    renderTabla() {
        return (
            <div>
                 <table className="table table-striped table-sm">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Stock</th>
                                <th>Descripcion</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.renderProductos()
                            }
                        </tbody>
                    </table>
            
            </div>
        )
    };

    render(){
        return(
            <div>
                
                <h2>Listando Productos</h2>

                <p>
                    <Link to="/productos/new" className="btn btn-primary">Nuevo</Link>
                </p>
                
                <div className="table-responsive">
                        {this.renderTabla()}
                 </div>
            </div>
        );
    }
}

function mapStateToProps(state) {//conecta a los estados
    return {
        listaProductos: state.productos.lista
    };
}

export default connect(mapStateToProps, {fetchProductos,deleteProducto})(ListaProductos);