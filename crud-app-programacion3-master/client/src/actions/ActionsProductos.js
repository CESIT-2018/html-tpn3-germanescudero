import axios from 'axios';
import { LISTA_PRODUCTOS_PENDIENTE,LISTA_PRODUCTOS_CUMPLIDO,LISTA_PRODUCTOS_RECHAZADO,NEW_PRODUCTO,SAVE_PRODUCTO,FETCH_PRODUCTO_BY_ID_PENDIENTE,FETCH_PRODUCTO_BY_ID_CUMPLIDO,FETCH_PRODUCTO_BY_ID_RECHAZADO,UPDATE_PRODUCTO,DELETE_PRODUCTO } from './types';

export const fetchProductos = () => async dispatch => {
  //const res = await axios.get('/api/todos');

  dispatch({ type: LISTA_PRODUCTOS_PENDIENTE });
  try{
    var res=await axios.get('/api/productos');
    dispatch({type:LISTA_PRODUCTOS_CUMPLIDO,payload:res});
  }catch(error){
    dispatch({type:LISTA_PRODUCTOS_RECHAZADO,payload:error});
  }
};

export const newProducto=()=> async dispatch=>{
  dispatch({type:NEW_PRODUCTO});
};

export const saveProducto=(producto)=> async dispatch=>{
  var res=await axios.post('/api/productos',producto);
  dispatch({type:SAVE_PRODUCTO,payload:res});
};

export const fetchProductoById=(id)=> async dispatch=>{
  dispatch({ type: FETCH_PRODUCTO_BY_ID_PENDIENTE});
  try{
    var res=await axios.get('/api/productos/'+id);
    dispatch({type:FETCH_PRODUCTO_BY_ID_CUMPLIDO,payload:res});
  }catch(error){
    dispatch({type:FETCH_PRODUCTO_BY_ID_RECHAZADO});
  }
};


export const updateProducto=(producto)=> async dispatch=>{
  var res=await axios.put(`/api/productos/${producto._id}`,producto);
  return dispatch({
    type:UPDATE_PRODUCTO,
    payload:res
  })
};

export const deleteProducto=(id)=>async dispatch=>{
  var res=await axios.delete(`/api/productos/${id}`);
  return dispatch({
    type:DELETE_PRODUCTO,
    payload:res
  })
};