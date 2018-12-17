import axios from 'axios';
import {FETCH_CARRITO_FULFILLED,FETCH_CARRITO_PENDING,FETCH_CARRITO_REJECTED,FETCH_CARRITO_BY_USUARIO,FETCH_CARRITO_BY_ID_FULFILLED,FETCH_CARRITO_BY_ID_PENDING,FETCH_CARRITO_BY_ID_REJECTED,NEW_CARRITO,SAVE_CARRITO,UPDATE_CARRITO,DELETE_CARRITO} from './types';

export const fetchCarrito = () => async dispatch => {
  //const res = await axios.get('/api/todos');

  dispatch({ type: FETCH_CARRITO_PENDING });
  try{
    var res=await axios.get('/api/carritos');
    dispatch({type:FETCH_CARRITO_FULFILLED,payload:res});
  }catch(error){
    dispatch({type:FETCH_CARRITO_REJECTED,payload:error});
  }
};

export const newCarrito=()=> async dispatch=>{
  dispatch({type:NEW_CARRITO});
};

export const saveCarrito=(carrito)=> async dispatch=>{
  var res=await axios.post('/api/carritos',carrito);
  dispatch({type:SAVE_CARRITO,payload:res});
};

export const fetchCarritoById=(id)=> async dispatch=>{
  dispatch({ type: FETCH_CARRITO_BY_ID_PENDING});
  try{
    var res=await axios.get('/api/productos/'+id);
    dispatch({type:FETCH_CARRITO_BY_ID_FULFILLED,payload:res});
  }catch(error){
    dispatch({type:FETCH_CARRITO_BY_ID_REJECTED});
  }
};

export const fetchCarritoByUsuario=(name)=> async dispatch=>{
  var res=await axios.get('/api/carritos/productos/'+name);
  dispatch({ type: FETCH_CARRITO_BY_USUARIO,payload:res});
   
};


export const updateCarrito=(carrito)=> async dispatch=>{
  var res=await axios.put(`/api/carritos/${carrito._id}`,carrito);
  return dispatch({
    type:UPDATE_CARRITO,
    payload:res
  })
};

export const deleteCarrito=(id)=>async dispatch=>{
  var res=await axios.delete(`/api/carritos/${id}`);
  return dispatch({
    type:DELETE_CARRITO,
    payload:res
  })
};