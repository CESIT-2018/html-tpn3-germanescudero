import React,{Component} from 'react';
//import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCarritoByUsuario,deleteCarrito,fetchCarritoById,updateCarrito} from '../../actions';

class ShoppingCart extends Component{
 
  componentDidMount() {
    const { name } = this.props.match.params;
    if (name) {
        this.props.fetchCarritoByUsuario(name);
    }
    
  }

    render(){
       
       
        return(
          <div>
            <div className="container">
            <div className="row clearfix">
              <div className="col-md-12">
                <table className="table table-bordered " id="tab_logic">
                  <thead>
                    <tr>
                      <th className="text-center">Confirma</th>
                      <th className="text-center"> Producto </th>
                      <th className="text-center"> Cantidad </th>
                      <th className="text-center"> Precio </th>
                      <th className="text-center"> SubTotal </th>
                      <th className="text-center">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                  {this.props.carritos.map(carrito => {
                                    return (
                    <tr key={carrito._id}>
                    
                      <td className="text-center"><input type="checkbox"  name="estado"/></td>
                      <td className="text-center" >{carrito.productos.nombre}</td>
                      <td className="text-center" >{carrito.cantidad}</td>
                      <td className="text-center" >{carrito.productos.precio}</td>
                      <td className="text-center" >{carrito.subtotal}</td>
                      <th className="text-center">
                     
                      <a className="mr-2" href={`/shoppingCart/${this.props.auth.name}`} onClick={()=>{if(window.confirm('¿Estás seguro de eliminar este item: ?'))this.props.deleteCarrito(carrito._id)}}  ><i className="material-icons">delete</i></a>
                      </th>
                    </tr>
                      );
                    })
                    }
                  </tbody>
                </table>
              </div>
            </div>

            <div  className="row clearfix" >
              <div className="pull-right col-md-6">
                <table className="table-herned table-hover" id="tab_logic_total">
                  <tbody>
                    <tr>
                      <th className="text-center">Sub Total</th>
                      <td className="text-center"><input type="number" name='sub_total' placeholder='0.00' class="form-control" id="sub_total"/></td>
                    </tr>
                    <tr>
                      <th className="text-center">Tax Amount</th>
                      <td className="text-center"><input type="number" name='tax_amount' id="tax_amount" placeholder='0.00' class="form-control" /></td>
                    </tr>
                    <tr>
                      <th className="text-center">Grand Total</th>
                      <td className="text-center"><input type="number" name='total_amount' id="total_amount" placeholder='0.00' class="form-control" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
<hr/>
         <div class="row">        
           <div class="col-md-5 mb-3">
           <label for="address">Dirección</label>
           <input type="text" class="form-control" id="address" placeholder="1234 Main St"/>
            </div>

        </div>
        <div class="row">
           <div class="col-md-5 mb-3">
             <label for="country">Despacho</label>
             <select class="custom-select d-block w-100" id="country" >
               <option value="">Retira en Local</option>
               <option>Envío a Domicilio</option>
             </select>
            
           </div>
           </div>
         
         <div class="row">
         <h4 class="col-md-3 mb-3">Payment</h4>
         </div>
         
         <div class="row">
         <div class="col-md-5 mb-3">
           <div class="custom-control custom-radio">
             <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" />
             <label class="custom-control-label" for="credit">Credit card</label>
           </div>
           <div class="custom-control custom-radio">
             <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" />
             <label class="custom-control-label" for="debit">Debit card</label>
           </div>
           <div class="custom-control custom-radio">
             <input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" />
             <label class="custom-control-label" for="paypal">PayPal</label>
           </div>
         </div>
         </div>
         </div>
        )
    }
}

function mapStateToProps(state) {//conecta a los estados
  return {
      auth: state.auth.user,
      carritos: state.carritos.list
  };
}

export default connect(mapStateToProps, {fetchCarritoByUsuario,deleteCarrito,fetchCarritoById ,updateCarrito})(ShoppingCart);