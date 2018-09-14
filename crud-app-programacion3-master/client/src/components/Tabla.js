import React,{Component} from 'react';
    const productos=[{nombre:"yerba",cantidad:3},{nombre:"azucar",cantidad:5},{nombre:"arroz",cantidad:10}];
    
class Tabla extends Component{
   
  getFilas(){
      return(
          <tbody>
                {productos.map(p=><tr><td>{p.nombre}</td><td>{p.cantidad}</td></tr>)}
          </tbody>   
      );
  }

    render(){
        return(
            <div>
            <table border="1">
            {this.props.cadena}
            <thead >
                <tr>
                <th >Producto</th>
               
                <th >Cantidad</th>
                </tr>
            </thead>
            {this.getFilas()} 
        </table>
        </div>
        );
    }
}



export default Tabla;