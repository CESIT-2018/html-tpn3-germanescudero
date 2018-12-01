import axios from 'axios';
import {FETCH_CALIFICACIONES_PENDING,FETCH_CALIFICACIONES_FULFILLED,FETCH_CALIFICACIONES_REJECTED,NEW_CALIFICACION,SAVE_CALIFICACION,FETCH_CALIFICACION_BY_ID} from './types';


export const fetchCalificaciones = () => async dispatch => {
  
    dispatch({ type: FETCH_CALIFICACIONES_PENDING });
    try{
      var res=await axios.get('/api/calificaciones');
      dispatch({type:FETCH_CALIFICACIONES_FULFILLED,payload:res});
    }catch(error){
      dispatch({type:FETCH_CALIFICACIONES_REJECTED,payload:error});
    }
  };


export const newCalificacion=()=> async dispatch=>{
    dispatch({type:NEW_CALIFICACION});
  };
  
  export const saveCalificacion=(calificacion)=> async dispatch=>{
    var res=await axios.post('/api/calificaciones',calificacion);
    dispatch({type:SAVE_CALIFICACION,payload:res});
  };
  
  export const fetchCalificacionById=(idProducto)=> async dispatch=>{
    var res=await axios.get('/api/calificaciones/productos/'+idProducto);
    dispatch({ type: FETCH_CALIFICACION_BY_ID,payload:res});
     
  };
  
  