import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProductoById, fetchCalificacionById, saveCalificacion, newCalificacion } from '../../actions';
import { Link } from 'react-router-dom';
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

            errors: {}
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
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

    componentDidMount() {
        const { id } = this.props.match.params;
        if (id) {
            this.props.fetchProductoById(id);

        }
        this.props.fetchCalificacionById(id);
        this.props.newCalificacion();

    }

    render() {
        return (
            <div>
                <div>
                    <h3>Ver Producto</h3>
                    <br />

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


                    <Link className="btn btn-light mr-2" to="/productos">Volver</Link>
                    <Link to={`/productos/${this.props.producto._id}/edit`} className="btn btn-secondary mr-2">Editar</Link>&nbsp;
                   </div>

                <hr />
                <div className="my-3 p-3 bg-white rounded box-shadow">







                    <form onSubmit={this.handleSubmit}>
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
        calificaciones: state.calificaciones.list
    };
}

export default connect(mapStateToProps, { fetchProductoById, fetchCalificacionById, saveCalificacion, newCalificacion })(VerProducto);

