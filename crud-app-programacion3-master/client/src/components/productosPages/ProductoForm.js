import React,{Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import {Link} from 'react-router-dom';

const validate =(values)=>{
    const errors ={name:{}};

    if(!values.name){
        errors.name={
            message:'You need to provide Name'
        }
    }
    return errors;
}

class ProductoForm extends Component{
    componentWillReceiveProps=(nextProps)=>{
        const {producto}=nextProps;
        if(producto._id !==this.props.producto._id){
            this.props.initialize(producto);
            this.isUpdated=true;
        }
    }

    renderField=({input,label,type,meta:{touched,error}})=>(
        <div className="form-group">
            <label forname={input.name}>{label}</label>
            <input {...input} placeholder={input.label} className="form-control" id={input.name} type={type}/>
        </div>    
    )

    render(){
        const{handleSubmit}=this.props;
       
        return(
            <div>
                <form onSubmit={handleSubmit}>
                    <Field name="nombre" type="text" component={this.renderField} label="Nombre"/>
                    <Field name="descripcion" type="text" component={this.renderField} label="Descripción"/>
                    <Field name="precio" type="text" component={this.renderField} label="Precio"/>
                    <Field name="stock" type="text" component={this.renderField} label="stock"/>
                    <Link className="btn btn-light mr-2" to="/productos">Cancelar</Link>
                    <button type="submit" className="btn btn-primary mr-2">{this.isUpdated ? "Update":"Create"}</button>
                </form>
                </div>
        )
    }
}

export default reduxForm({form:'producto'},validate)(ProductoForm);