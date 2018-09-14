import React, {Component} from 'react';
import Titulo from './Titulo';
import Subtitulo from './Subtitulo';
//import Tabla from './Tabla';
import Boton from './Boton';
import Axios from 'axios';

class App extends Component {

    state={
        miSubtitulo:"Este es mi Subtitulo",
        tieneSubtitulo:true
    };
    
    miMetodo=()=>{
        this.llamarAPI2();
        //this.setState({miSubtitulo:"Nuevo Subtitulo "+new Date()});
        //this.setState({tieneSubtitulo:!this.state.tieneSubtitulo});
    };

    llamarAPI2 =async()=>{
        try {
            return await Axios.get('http://localhost:5000/api/productos');
            console.log(this.llamarAPI2());
        } catch (error) {
            console.error(error);
        }
    }

     llamarAPI=async()=>{
        const res=await Axios.get("https://localhost:5000/api/todos");//consumio la api
        console.log(res);
    };
    

    
    renderSubtitulo(){
        if(this.state.tieneSubtitulo){
            return(<Subtitulo cadena={this.state.miSubtitulo}/>)
        }
        return(<div>NOOOOOOOOOOOOOOOOOOOOOOOOOOOOO!</div>)
    }
    render() {
        return (
            <div>
                <h1>First Application</h1>
                <Titulo cadena="Mi primera aplicación"/>
            {this.renderSubtitulo()}
                
              
                
                <Boton cadena="Agregar" hacerClick={this.miMetodo}/>
                
                
            </div>
        );
    }
}

export default App;