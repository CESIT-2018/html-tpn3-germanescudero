import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchProductoById,fetchCalificaciones} from '../../actions';
import { Link } from 'react-router-dom';

class VerProducto extends Component {


    componentDidMount(){
        const {id}=this.props.match.params;
        if(id){
            this.props.fetchProductoById(id);
        }
        this.props.fetchCalificaciones();
    }

    renderFilas() {
        return this.props.listaCalificaciones.map(calificacion => {
            return (
                <tr key={this.props.producto._id}>
                    <th>
                        {calificacion.calificacion}
                    </th>
                    <th><p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                    
                        <strong className="d-block text-gray-dark">{calificacion.email}</strong>{calificacion.comentario}</p></th>
                </tr>
            )
        });
    }



    
  
   render() {
        return (
            <div>
            <div>
                <h3>Ver Producto</h3>
                <br/>
                
                <div class="row">   
                     <div className="col-sm-2"><p className="font-weight-bold text-right">Nombre:</p></div>
                     <div className="col-sm-10">{this.props.producto.nombre}</div>
                </div>
                <div class="row"> 
                     <div className="col-sm-2"><p className="font-weight-bold text-right">Descripción:</p></div>
                     <div className="col-sm-10">{this.props.producto.descripcion}</div>
                </div>
                <div class="row"> 
                     <div className="col-sm-2"><p className="font-weight-bold text-right">Precio:</p></div>
                     <div className="col-sm-10">{this.props.producto.precio}</div>
                     </div>
                <div class="row"> 
                     <div className="col-sm-2"><p className="font-weight-bold text-right">Stock:</p></div>
                     <div className="col-sm-10">{this.props.producto.stock}</div>
                 
                     </div>
                
              
                <Link className="btn btn-light mr-2" to="/productos">Volver</Link>
                <Link to={`/productos/${this.props.producto._id}/edit`} className="btn btn-secondary mr-2">Editar</Link>&nbsp;
               
               
               </div>
            
                <div className="my-3 p-3 bg-white rounded box-shadow">
                    <h6 className="border-bottom border-gray pb-2 mb-0">Opiniones sobre el producto</h6>
                    <div className="media text-muted pt-3">
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                               {this.renderFilas()}
                            </tbody>
                        </table>
                    </div>


                    <small className="d-block text-right mt-3">
                        <a href="">All updates</a>
                    </small>
                </div>


            </div>






        )
    };
}
function mapStateToProps(state) {//conecta a los estados
    return {
        producto: state.productos.producto,
        listaCalificaciones:state.calificaciones.list
    };
}

export default connect(mapStateToProps,{fetchProductoById,fetchCalificaciones}) (VerProducto);

