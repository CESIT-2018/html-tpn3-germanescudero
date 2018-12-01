import React, { Component } from 'react';
import {connect} from 'react-redux';

import {saveContacto,fetchNacionalidad,newContacto} from '../../actions/ActionsContacto';
//import {Redirect} from 'react-router';
//import {SubmissionError} from 'redux-form';
//import ListaProductos from '../productosPages/ListaProductos';

class NuevoContacto extends Component {

    constructor() {
        super();
        this.state = {
            nombre: '',
            apellido:'',
            sexo:'',
            nacionalidad:'',
            email: '',
            comentario:'',
           
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
        const contacto = {
            nombre: this.state.nombre,
            apellido:this.state.apellido,
            sexo:this.state.sexo,
            nacionalidad:this.state.nacionalidad,
            email: this.state.email,
            comentario:this.state.comentario
        }
        this.props.saveContacto(contacto, this.props.history);
        this.setState({nombre:"",apellido:"",email:"",sexo:"",nacionalidad:"",comentario:""})
    }
 
    componentDidMount(){
        this.props.newContacto();
        this.props.fetchNacionalidad();
    }



    render() {
        
        
        return (

            <form onSubmit={this.handleSubmit}>
            <h3><b>Formulario de Contacto</b></h3>
            <div className="row">
                <div className="col-md-4 mb-3">
                    <label >Nombre :</label>
                    <input type="text"  className="form-control" name="nombre" onChange={this.handleInputChange} value={this.state.nombre} />
                    
                </div>

                <div className="col-md-4 mb-3">
                    <label >Apellido:</label>
                    <input type="text" name="apellido" className="form-control" onChange={this.handleInputChange} value={this.state.apellido}/>
                   
                </div>
            </div>
            <div className="row">
                
            
                <div className="col-md-4 mb-3">

                <label >Sexo</label>

                <div className="custom-control custom-radio">
                <input id="femenino" value="mujer" name="sexo" onChange={this.handleInputChange} type="radio" className="custom-control-input" required/>
                <label className="custom-control-label" htmlFor="femenino"> Femenino</label></div>
              
                <div className="custom-control custom-radio">
                <input id="masculino" name="sexo" value="hombre" onChange={this.handleInputChange} type="radio" className="custom-control-input" required/>
                <label className="custom-control-label" htmlFor="masculino" >Masculino</label></div>
                    
                
                </div>
               
                  <div className="col-md-4 mb-3">
                    <label >Nacionalidad:</label>
                    <select className="custom-select d-block w-100"  value={this.state.nacionalidad} name="nacionalidad" onChange={this.handleInputChange} >
                    
                   { this.props.listaNacionalidad.map(nacionalidad => {
        
                         return(
                                 <option  key={nacionalidad._id}  value={nacionalidad._id}>{nacionalidad.nombrePais}</option>
                                )
                                 })}
                    </select>
                   
                       
            
                    </div>
                
                </div>
                <div className="row">
                <div className="col-md-8 mb-3">
                    <label >Email     :</label>
                    <input type="email" name="email" id="email" value={this.state.email} onChange={this.handleInputChange} className="form-control" />
                    
                </div>
                </div>
                <div className="row">
                <div className="col-md-8 mb-3">
                    <p><label  >Comentario:</label></p>
                    <textarea name="comentario" id="comentario" value={this.state.comentario} onChange={this.handleInputChange} cols="117" rows="6" />
                    

                </div>
                
                <div className="col-md-8 mb-3">
                <button type="submit"  className="btn btn-primary btn-lg btn-block" >Enviar</button>
                </div>
                </div>
            </form>
        );
    };

}
function mapStateToProps(state){
    return {
        contacto:state.contactos.contacto,errors:state.contactos.errors,
        listaNacionalidad:state.nacionalidades.listaN
    }
}

export default connect(mapStateToProps,{saveContacto,fetchNacionalidad,newContacto})(NuevoContacto);