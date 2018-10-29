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

class TodoForm extends Component{
    componentWillReceiveProps=(nextProps)=>{
        const {todo}=nextProps;
        if(todo._id !==this.props.todo._id){
            this.props.initialize(todo);
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
                    <Field name="name" type="text" component={this.renderField} label="Name"/>
                    <Field name="description" type="text" component={this.renderField} label="Description"/>
                    <Link className="btn btn-light mr-2" to="/todos">Cancelar</Link>
                    <button type="submit" className="btn btn-primary mr-2">{this.isUpdated ? "Update":"Create"}</button>
                </form>
                </div>
        )
    }
}

export default reduxForm({form:'todo'},validate)(TodoForm);