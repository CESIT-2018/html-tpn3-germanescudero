import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router';
import {SubmissionError} from 'redux-form';
import {newProducto,saveProducto} from '../../actions/ActionsProductos';
import ProductoForm from './ProductoForm';

class NuevoProducto extends Component {
    state={
        redirect:false
    };

    componentDidMount(){
        this.props.newProducto();
    }

    submit=(producto)=>{
        return this.props.saveProducto(producto).then(response => this.setState({redirect:true}))
        .catch(err=>{
            throw new SubmissionError(this.props.errors)
        })
    }

    render() {
        return (
            <div>
                <h2>Nuevo Producto</h2>
                {this.state.redirect 
                ? <Redirect to="/productos"/>
                : <ProductoForm producto={this.props.producto} onSubmit={this.submit}/>
            }
            </div>
        )
    };
}

function mapStateToProps(state){
    return {producto:state.productos.producto,errors:state.productos.errors}
}

export default connect(mapStateToProps,{newProducto,saveProducto})(NuevoProducto);