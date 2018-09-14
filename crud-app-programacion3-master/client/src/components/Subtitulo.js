import React,{Component} from 'react';

class Subtitulo extends Component{
   /* getMensaje(){
        return "Esto es un subtitulo";
    }

    getHTML(){
        return(
            <h3>{this.getMensaje()}
            </h3>
        );
    }

    render(){
        return(this.getHTML());
    }*/
    render(){
        return(
            <h3>
                {this.props.cadena}
                </h3>
        );
    }
}

export default Subtitulo;