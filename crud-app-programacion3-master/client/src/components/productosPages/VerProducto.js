import React, {Component} from 'react';
import {connect} from 'react-redux';
import {verProductoById} from '../../actions';
import { Link } from 'react-router-dom';

class VerProducto extends Component {


    componentDidMount(){
        const {id}=this.props.match.params;
        if(id){
            this.props.verProductoById(id);
        }
    }

    
  
   render() {
        return (
            <div>
                <h2>Ver Producto</h2>
               {this.props.producto.nombre}-
               {this.props.producto.descripcion}-
               {this.props.producto.precio}-
               {this.props.producto.stock}
               <div>
               <Link to={`/productos/${this.props.producto._id}/edit`} className="">Editar</Link>&nbsp;
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

export default connect(mapStateToProps,{verProductoById}) (VerProducto);

