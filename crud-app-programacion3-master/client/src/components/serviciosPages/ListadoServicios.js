import React, {Component} from 'react';//importa las acciones , las conecta y las mapea con el state
import {connect} from 'react-redux';
import {fetchServicios,deleteServicio} from '../../actions';
import { Link } from 'react-router-dom';

class ListadoServicios extends Component {

    componentDidMount(){
        this.props.fetchServicios();
    }

    renderServicios() {
        return this.props.listaServicios.map(servicio => {
            return (
            <tr key={servicio._id}>
                
                <td>{servicio.nombre}</td>
                <td>{servicio.descripcion}</td>
                <td>
                <Link to={`/servicios/${servicio._id}/show`} className=""><i className="material-icons">visibility</i></Link>&nbsp;
                <Link to={`/servicios/${servicio._id}/edit`} className=""><i className="material-icons" >edit</i></Link>&nbsp;
                <a className="mr-2" href={`/servicios`} onClick={()=>{if(window.confirm('¿Estás seguro de eliminar el item: '+servicio.nombre+' ?'))this.props.deleteServicio(servicio._id)}}  ><i className="material-icons">delete</i></a>
               
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
                                <th>Descripcion</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.renderServicios()
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
                    <Link to="/servicios/new" className="btn btn-primary">Nuevo</Link>
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
        listaServicios: state.servicios.lista
    };
}

export default connect(mapStateToProps, {fetchServicios,deleteServicio})(ListadoServicios);