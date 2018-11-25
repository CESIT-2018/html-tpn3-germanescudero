import React,{Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import {Link} from 'react-router-dom';

const validate=(values)=>{
    const errors ={};

    if(!values.nombre ){
        errors.nombre='Nombre Requerido';
    }else if(/^[a-zA-Z][a-zA-Z]*/.test(values.nombre)===false){
        errors.nombre=' Debes ingresar letras';
    }

    if(!values.descripcion){
        errors.descripcion='Descripcion Requerida'
    }

    if(!values.precioPorHora){
        errors.precioPorHora='Precio Requerido'
    }else if(isNaN(values.precioPorHora)){
        errors.precioPorHora=' Debes ingresar números';
    }

    return errors;
}
class ServiciosForm extends Component{
    componentWillReceiveProps=(nextProps)=>{
        const {servicio}=nextProps;
        if(servicio._id !==this.props.servicio._id){
            this.props.initialize(servicio);
            this.isUpdated=true;
        }
    }

    renderField=({input,label,type,meta:{touched,error}})=>(
        <div className="form-group">
            <label forname={input.name}>{label}</label>
            <input {...input} placeholder={input.label} className="form-control" id={input.name} type={type}/>
            <div className="text-danger" style={{marginBottom:'20px'}}>
                {touched && error}
            </div>
        </div>    
    )

    render(){
        const{handleSubmit}=this.props;
       
        return(
            <div>
                <form onSubmit={handleSubmit}>
                    <Field name="nombre" type="text" component={this.renderField} label="Nombre"/>
                    <Field name="descripcion" type="text" component={this.renderField} label="Descripción"/>
                    <Field name="precioPorHora" type="text" component={this.renderField} label="Precio/Hora"/>
                    <Link className="btn btn-light mr-2" to="/servicios">Cancelar</Link>
                    <button type="submit" className="btn btn-primary mr-2">{this.isUpdated ? "Update":"Create"}</button>
                </form>
                </div>
        )
    }
}

export default reduxForm({form:'servicio',validate})(ServiciosForm);