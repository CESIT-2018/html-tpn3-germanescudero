import axios from 'axios';
import {LISTA_SERVICIOS_PENDIENTE,LISTA_SERVICIOS_CUMPLIDO,LISTA_SERVICIOS_RECHAZADO,NEW_SERVICIO,SAVE_SERVICIO,FETCH_SERVICIO_BY_ID_PENDIENTE,FETCH_SERVICIO_BY_ID_CUMPLIDO,FETCH_SERVICIO_BY_ID_RECHAZADO,UPDATE_SERVICIO,DELETE_SERVICIO} from './types';

export const fetchServicios = () => async dispatch => {
    //const res = await axios.get('/api/todos');
  
    dispatch({ type: LISTA_SERVICIOS_PENDIENTE });
    try{
      var res=await axios.get('/api/servicios');
      dispatch({type:LISTA_SERVICIOS_CUMPLIDO,payload:res});
    }catch(error){
      dispatch({type:LISTA_SERVICIOS_RECHAZADO,payload:error});
    }
  };

  export const newServicio=()=> async dispatch=>{
    dispatch({type:NEW_SERVICIO});
  };
  
  export const saveServicio=(servicio)=> async dispatch=>{
    var res=await axios.post('/api/servicios',servicio);
    dispatch({type:SAVE_SERVICIO,payload:res});
  };
  
  export const fetchServicioById=(id)=> async dispatch=>{
    dispatch({ type: FETCH_SERVICIO_BY_ID_PENDIENTE});
    try{
      var res=await axios.get('/api/servicios/'+id);
      dispatch({type:FETCH_SERVICIO_BY_ID_CUMPLIDO,payload:res});
    }catch(error){
      dispatch({type:FETCH_SERVICIO_BY_ID_RECHAZADO});
    }
  };
  
  
  export const updateServicio=(servicio)=> async dispatch=>{
    var res=await axios.put(`/api/servicios/${servicio._id}`,servicio);
    return dispatch({
      type:UPDATE_SERVICIO,
      payload:res
    })
  };

  export const deleteServicio=(id)=>async dispatch=>{
    var res=await axios.delete(`/api/servicios/${id}`);
    return dispatch({
      type:DELETE_SERVICIO,
      payload:res
    })
  };