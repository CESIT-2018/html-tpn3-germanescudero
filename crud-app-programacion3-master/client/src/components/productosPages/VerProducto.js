import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProductoById, fetchCalificacionById, saveCalificacion, newCalificacion,saveCarrito,newCarrito} from '../../actions';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../actions/authentication';
import './estrellas.css';

class VerProducto extends Component {
    constructor() {
        super();
        this.state = {
            nombres: '',
            email: '',
            calificacion: '',
            comentario: '',
            productos: '',
            usuario:'',
            cantidad:'',
            subtotal:'',
            errors: {},
            error:{}
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.agregarACarrito=this.agregarACarrito.bind(this);
       // this.handleInputChangeCarrito=this.handleInputChangeCarrito.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
   /* handleInputChangeCarrito(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }*/

    agregarACarrito(e) {
        e.preventDefault();
        const calificacion = {
            nombres: this.state.nombres,
            email: this.state.email,
            calificacion: this.state.calificacion,
            comentario: this.state.comentario,
            productos: this.props.producto
        }
        this.props.saveCalificacion(calificacion, this.props.history);
        this.setState({ nombres: "", email: "", calificacion: "", comentario: "" })
    }

    handleSubmit(e) {
        e.preventDefault();
        //const { user} = this.props.auth;
        const carrito={
            usuario:this.props.auth.name,
            productos:this.props.producto,
            cantidad:this.state.cantidad,
            subtotal:this.state.subtotal
        }
        this.props.saveCarrito(carrito,this.props.history);
     
        
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        if (id) {
            this.props.fetchProductoById(id);

        }
        this.props.fetchCalificacionById(id);
        this.props.newCarrito();
        this.props.newCalificacion();

    }

    render() {
        return (
            <div>
                <div>
                
                    <h3 className="d-flex justify-content-between align-items-center mb-3">Ver Producto</h3>
                    <br />
<div className="row">
    <div className="col-md-6 order-md-2 mb-3">
          
          <ul className="list-group mb-3">
          
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 className="text-success"><i className="fa fa-credit-card" aria-hidden="true"></i> Pagá en 6 cuotas sin interés</h6>
                <small className="text-muted">Brief description</small>
              </div>
              
            </li>
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 className="text-success"><i className="fa fa-truck" aria-hidden="true"></i> Envío gratis a todo el país</h6>
                <small className="text-muted">Brief description</small>
              </div>
              
            </li>
            <li className="list-group-item d-flex justify-content-between bg-light">
              <div className="text-success">
                <h6 className="my-0"><i className="fa fa-undo-alt" aria-hidden="true"></i> Devolución gratis</h6>
                <small className="text-muted">Tenés 10 dias antes de lo recibís</small>
              </div>
             
            </li>
          </ul>

          <form className="card p-2" onSubmit={this.handleSubmit}>
            <div className="input-group">
              <input type="text" onChange={this.handleInputChange} value={this.state.cantidad} name="cantidad" className="form-control" placeholder="Ingrese Cantidad"/>
              <input type="text" onChange={this.handleInputChange} value={this.state.subtotal=this.state.cantidad*this.props.producto.precio} name="subtotal" className="form-control" placeholder="total $"/>
              <div className="input-group-append">
              <button type="submit" className="btn btn-success"  >Add to Shopping Cart</button> 
              </div>
            </div>
          </form>
        </div>
        
                        <div className="col-md-6 order-md-1">
                            <form className="needs-validation" >
                                <div className="row">
                                    <div className="col-sm-2"><p className="font-weight-bold text-right">Nombre:</p></div>
                                    <div className="col-sm-10">{this.props.producto.nombre}</div>


                                    <div className="col-sm-2"><p className="font-weight-bold text-right">Descripción:</p></div>
                                    <div className="col-sm-10">{this.props.producto.descripcion}</div>

                                    <div className="col-sm-2"><p className="font-weight-bold text-right">Precio:</p></div>
                                    <div className="col-sm-10">{this.props.producto.precio}</div>

                                    <div className="col-sm-2"><p className="font-weight-bold text-right">Stock:</p></div>
                                    <div className="col-sm-10">{this.props.producto.stock}</div>

                                </div>
                                <Link className="btn btn-light mr-3" to="/productos">Volver</Link>
                                <Link to={`/productos/${this.props.producto._id}/edit`} className="btn btn-primary mr-3">Editar</Link>&nbsp;
                            </form>
                        </div>

                    </div>

                </div>
                   
                <hr />
                <div className="my-3 p-3 bg-white rounded box-shadow">
                    <form onSubmit={this.agregarACarrito}>
                        <div className="row">
                            <div className="col-md-4 mb-3">

                                <label>Calificación: </label>
                                <h3>   <p className="clasificacion">
                                    <input id="radio1" type="radio" name="calificacion" value="5" onChange={this.handleInputChange} />
                                    <label htmlFor="radio1">★</label>
                                    <input id="radio2" type="radio" name="calificacion" value="4" onChange={this.handleInputChange} />
                                    <label htmlFor="radio2">★</label>
                                    <input id="radio3" type="radio" name="calificacion" value="3" onChange={this.handleInputChange} />
                                    <label htmlFor="radio3">★</label>
                                    <input id="radio4" type="radio" name="calificacion" value="2" onChange={this.handleInputChange} />
                                    <label htmlFor="radio4">★</label>
                                    <input id="radio5" type="radio" name="calificacion" value="1" onChange={this.handleInputChange} />
                                    <label htmlFor="radio5">★</label>
                                </p></h3>

                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-5 mb-3">
                                <p><label  >Dejá un comentario:</label></p>
                                <textarea name="comentario" id="comentario" cols="83" rows="6" value={this.state.comentario} onChange={this.handleInputChange} />


                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label >Nombres :</label>
                                <input type="text" className="form-control" name="nombres" onChange={this.handleInputChange} value={this.state.nombres} />

                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6 mb-4">
                                <label >Email     :</label>
                                <input type="email" name="email" id="email" className="form-control" value={this.state.email} onChange={this.handleInputChange} />

                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <button type="submit" className="btn btn-black btn-lg btn-block" >Publicar Comentario</button>
                            </div>
                        </div>
                    </form>
                </div>


                <hr />




                <div className="my-3 p-3 bg-white rounded box-shadow">
                    <h6>Opiniones sobre el producto</h6>
                    <div>
                        <table className="table table-sm">
                            <thead className="thead-dark">
                                <tr>
                                    <th>Puntajes</th>

                                    <th>Comentarios</th>
                                    <th>Fecha de publicación</th>
                                </tr>
                            </thead>
                            <tbody>

                                {this.props.calificaciones.map(t => {
                                    return (
                                        <tr key={t._id}>
                                            <td ><span className="text-muted">

                                                {t.calificacion}</span></td>

                                            <td> <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                                <strong className="d-block text-gray-dark">{t.nombres}</strong>
                                                {t.comentario}
                                            </p></td>
                                            <td>{t.fecha}</td>
                                        </tr>
                                    );
                                })
                                }

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
        calificacion: state.calificaciones.calificacion, errors: state.calificaciones.errors,
        calificaciones: state.calificaciones.list,
        carrito: state.carritos.carrito, error: state.carritos.errors,
        auth: state.auth.user
    };
}

export default connect(mapStateToProps, { logoutUser,fetchProductoById, fetchCalificacionById, saveCalificacion, newCalificacion,newCarrito,saveCarrito})(VerProducto);

