import axios from 'axios';
import { NEW_CONTACTO,SAVE_CONTACTO,LISTADO_NACIONALIDAD } from './types';


export const fetchNacionalidad=()=> async dispatch=>{
  const res= await axios.get('/api/nacionalidades');
  dispatch({type:LISTADO_NACIONALIDAD, payload:res.data});
}

export const newContacto=()=> async dispatch=>{
    dispatch({type:NEW_CONTACTO});
  };
  
  export const saveContacto=(contacto)=> async dispatch=>{
    var res=await axios.post('/api/contactos',contacto);
    dispatch({type:SAVE_CONTACTO,payload:res});
  };
  