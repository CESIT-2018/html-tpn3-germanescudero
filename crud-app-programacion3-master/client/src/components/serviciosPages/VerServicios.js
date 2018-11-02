import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchServicioById} from '../../actions';
import { Link } from 'react-router-dom';

class VerServicios extends Component {


    componentDidMount(){
        const {id}=this.props.match.params;
        if(id){
            this.props.fetchServicioById(id);
        }
    }

    
  
   render() {
        return (
            <div>
                <h2>Ver Servicio</h2>
                <br/>
                <div className="row">
                     <div className="col-sm-2"><p className="font-weight-bold text-right">Nombre:</p></div>
                     <div className="col-sm-10">{this.props.servicio.nombre}</div>
                </div>            
                <div className="row">
                     <div className="col-sm-2"><p className="font-weight-bold text-right">Descripción:</p></div>
                     <div className="col-sm-10">{this.props.servicio.descripcion}</div>
                </div>   
             
               
               <div className="row">
               <Link className="btn btn-light mr-2" to="/servicios">Volver</Link>
               <Link to={`/servicios/${this.props.servicio._id}/edit`} className="btn btn-secondary mr-2">Editar</Link>&nbsp;
               
               </div>

            </div>
        )
    };
}
function mapStateToProps(state) {//conecta a los estados
    return {
        servicio: state.servicios.servicio
    };
}

export default connect(mapStateToProps,{fetchServicioById}) (VerServicios);

