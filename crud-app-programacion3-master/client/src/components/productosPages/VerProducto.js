import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchProductoById} from '../../actions';
import { Link } from 'react-router-dom';

class VerProducto extends Component {


    componentDidMount(){
        const {id}=this.props.match.params;
        if(id){
            this.props.fetchProductoById(id);
        }
    }

    
  
   render() {
        return (
            <div>
                <h2>Ver Producto</h2>
                <br/>
                <div className="row">
                     <div className="col-sm-2"><p className="font-weight-bold text-right">Nombre:</p></div>
                     <div className="col-sm-10">{this.props.producto.nombre}</div>
                </div>            
                <div className="row">
                     <div className="col-sm-2"><p className="font-weight-bold text-right">Descripción:</p></div>
                     <div className="col-sm-10">{this.props.producto.descripcion}</div>
                </div>   
                <div className="row">
                     <div className="col-sm-2"><p className="font-weight-bold text-right">Precio:</p></div>
                     <div className="col-sm-10">{this.props.producto.precio}</div>
                </div>  
                <div className="row">
                     <div className="col-sm-2"><p className="font-weight-bold text-right">Stock:</p></div>
                     <div className="col-sm-10">{this.props.producto.stock}</div>
                </div>  
               
               <div className="row">
               <Link className="btn btn-light mr-2" to="/productos">Volver</Link>
               <Link to={`/productos/${this.props.producto._id}/edit`} className="btn btn-secondary mr-2">Editar</Link>&nbsp;
               
               </div>

            </div>
        )
    };
}
function mapStateToProps(state) {//conecta a los estados
    return {
        producto: state.productos.producto
    };
}

export default connect(mapStateToProps,{fetchProductoById}) (VerProducto);

