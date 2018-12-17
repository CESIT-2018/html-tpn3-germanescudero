import axios from 'axios';
import { FETCH_PEDIDO_FULFILLED,FETCH_PEDIDO_PENDING ,FETCH_PEDIDO_REJECTED ,NEW_PEDIDO,SAVE_PEDIDO,FETCH_PEDIDO_BY_ID_PENDING,FETCH_PEDIDO_BY_ID_REJECTED,FETCH_PEDIDO_BY_ID_FULFILLED,UPDATE_PEDIDO,DELETE_PEDIDO } from './types';

//import NewTodo from '../components/todosPages/NewTodo';

export const fetchPedido = () => async dispatch => {
  //const res = await axios.get('/api/todos');

  dispatch({ type: FETCH_PEDIDO_PENDING });
  try{
    var res=await axios.get('/api/pedidos');
    dispatch({type:FETCH_PEDIDO_FULFILLED,payload:res});
  }catch(error){
    dispatch({type:FETCH_PEDIDO_REJECTED,payload:error});
  }
};

export const newPedido=()=> async dispatch=>{
  dispatch({type:NEW_PEDIDO});
};

export const savePedido=(pedido)=> async dispatch=>{
  var res=await axios.post('/api/pedidos',pedido);
  dispatch({type:SAVE_PEDIDO,payload:res});
};

export const fetchPedidoById=(id)=> async dispatch=>{
  dispatch({ type: FETCH_PEDIDO_BY_ID_PENDING});
  try{
    var res=await axios.get('/api/pedidos/'+id);
    dispatch({type:FETCH_PEDIDO_BY_ID_FULFILLED,payload:res});
  }catch(error){
    dispatch({type:FETCH_PEDIDO_BY_ID_REJECTED});
  }
};

export const updatePedido=(pedido)=> async dispatch=>{
  var res=await axios.put(`/api/pedidos/${pedido._id}`,pedido);
  return dispatch({
    type:UPDATE_PEDIDO,
    payload:res
  })
};

export const deletePedido=(id)=>async dispatch=>{
  var res=await axios.delete(`/api/pedidos/${id}`);
  return dispatch({
    type:DELETE_PEDIDO,
    payload:res
  })
};