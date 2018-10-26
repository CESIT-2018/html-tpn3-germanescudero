import React,{Component} from 'react';
import {reduxForm, Field} from 'redux-form';

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
        <div>
            <label>{label}</label>
            <input {...input} placeholder={label} type={type} style={{marginBottom:'5px'}}/>
            <div className="red-text" style={{marginBottom:'20px'}}>
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
                    <Field name="precio" type="text" component={this.renderField} label="Precio"/>
                    <Field name="stock" type="text" component={this.renderField} label="Stock"/>
                    <Field name="descripcion" type="text" component={this.renderField} label="Descripción"/>
                    <button type="submit">{this.isUpdated ? "Update":"Create"}</button>
                </form>
                </div>
        )
    }
}

export default reduxForm({form:'producto'},validate)(ProductoForm);