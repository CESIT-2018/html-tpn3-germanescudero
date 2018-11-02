import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router';
import {SubmissionError} from 'redux-form';
import {newServicio,saveServicio} from '../../actions/ActionsServicios';
import ServiciosForm from './ServiciosForm';

class NuevoServicio extends Component {
    state={
        redirect:false
    };

    componentDidMount(){
        this.props.newServicio();
    }

    submit=(servicio)=>{
        return this.props.saveServicio(servicio).then(response => this.setState({redirect:true}))
        .catch(err=>{
            throw new SubmissionError(this.props.errors)
        })
    }

    render() {
        return (
            <div>
                <h2>Nuevo Servicio</h2>
                {this.state.redirect 
                ? <Redirect to="/servicios"/>
                : <ServiciosForm servicio={this.props.servicio} onSubmit={this.submit}/>
            }
            </div>
        )
    };
}

function mapStateToProps(state){
    return {servicio:state.servicios.servicio,errors:state.servicios.errors}
}

export default connect(mapStateToProps,{newServicio,saveServicio})(NuevoServicio);