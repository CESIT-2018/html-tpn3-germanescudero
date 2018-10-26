import axios from 'axios';
import { LISTA_PRODUCTOS,NEW_PRODUCTO,SAVE_PRODUCTO,FETCH_PRODUCTO_BY_ID,UPDATE_PRODUCTO,VER_PRODUCTO_BY_ID } from './types';

export const fetchProductos = () => async dispatch => {
  const res = await axios.get('/api/productos');

  dispatch({ type: LISTA_PRODUCTOS  , payload: res.data }); 
};

export const newProducto=()=> async dispatch=>{
  dispatch({type:NEW_PRODUCTO});
};

export const saveProducto=(producto)=> async dispatch=>{
  var res=await axios.post('/api/productos',producto);
  dispatch({type:SAVE_PRODUCTO,payload:res});
};

export const fetchProductoById=(id)=> async dispatch=>{
  var res=await axios.get('/api/productos/'+id);
  dispatch({type:FETCH_PRODUCTO_BY_ID, payload:res});
};

export const verProductoById=(id)=> async dispatch=>{
  var res=await axios.get('/api/productos/'+id);
  dispatch({type:VER_PRODUCTO_BY_ID,payload:res});
};

export const updateProducto=(producto)=> async dispatch=>{
  var res=await axios.put(`/api/productos/${producto._id}`,producto);
  return dispatch({
    type:UPDATE_PRODUCTO,
    payload:res
  })
};
