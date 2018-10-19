import React,{Component} from 'react';

class Boton extends Component{
    
    

    manejarEvento=()=>{
        this.props.hacerClick();
    }

    render(){
        return(
            <button  onClick={this.manejarEvento}>
            {this.props.cadena}
            </button>
        );
    }
 
   //npm install axios --save
   //cd..
   //npm run dev
   //App  import axios from 'axios' permite request a aplicaciones apiRest
   //Redux app state una aplicacion tiene varias Reducers que se bindean con cada componentes, cuando alteree una estado creo un reducer
   //acciones(actions)(accion especifica)....boton activa un accion busqueda de algo...le informa al redcers,,,de ese dato...pero solo el reducers q lo necesita se va actualizar...una vez actualizado el componente se ejecuta el render de nuevo,,,teniendo cuidado que no pise a otro state
   //flux de facebook
}

export default Boton;