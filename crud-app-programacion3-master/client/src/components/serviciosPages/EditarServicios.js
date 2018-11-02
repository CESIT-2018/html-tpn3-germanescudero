import React, {Component} from 'react';
import {connect} from 'react-redux';

import {SubmissionError} from 'redux-form';
import ServiciosForm from './ServiciosForm';
import {fetchServicioById,updateServicio} from '../../actions';

import {Redirect} from 'react-router'

class EditarServicios extends Component {

    state={redirect:false};

    componentDidMount(){
        const {id}=this.props.match.params;
        if(id){
            this.props.fetchServicioById(id);
        }
    }

    submit=(servicio)=>{
        return this.props.updateServicio(servicio)
        .then(response=>this.setState({redirect:true}))
        .catch(err=>{
            throw new SubmissionError(this.props.errors)
        })
    }

    render() {
        return (
            <div>
                <h2>Editar Servicio</h2>
                <div>
                    {this.state.redirect
                    ? <Redirect to="/servicios" />
                    : <ServiciosForm 
                        servicio={this.props.servicio}
                        onSubmit={this.submit}/>
                    }
                </div>    
            </div>

        )
    };
}

function mapStateToProps(state){
    return {servicio:state.servicios.servicio,errors:state.servicios.errors};
}

export default connect(mapStateToProps,{fetchServicioById,updateServicio}) (EditarServicios);