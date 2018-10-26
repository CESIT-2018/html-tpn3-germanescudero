import React, {Component} from 'react';
import {connect} from 'react-redux';

import {SubmissionError} from 'redux-form';
import ProductoForm from './ProductoForm';
import {fetchProductoById,updateProducto} from '../../actions';

import {Redirect} from 'react-router'

class EditarProducto extends Component {

    state={redirect:false};

    componentDidMount(){
        const {id}=this.props.match.params;
        if(id){
            this.props.fetchProductoById(id);
        }
    }

    submit=(producto)=>{
        return this.props.updateProducto(producto)
        .then(response=>this.setState({redirect:true}))
        .catch(err=>{
            throw new SubmissionError(this.props.errors)
        })
    }

    render() {
        return (
            <div>
                <h2>Editar Producto</h2>
                <div>
                    {this.state.redirect
                    ? <Redirect to="/productos" />
                    : <ProductoForm 
                        producto={this.props.producto}
                        onSubmit={this.submit}/>
                    }
                </div>    
            </div>

        )
    };
}

function mapStateToProps(state){
    return {producto:state.productos.producto,errors:state.productos.errors};
}

export default connect(mapStateToProps,{fetchProductoById,updateProducto}) (EditarProducto);