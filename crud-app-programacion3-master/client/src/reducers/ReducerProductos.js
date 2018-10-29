import {LISTA_PRODUCTOS_PENDIENTE,LISTA_PRODUCTOS_CUMPLIDO,LISTA_PRODUCTOS_RECHAZADO,NEW_PRODUCTO,SAVE_PRODUCTO,FETCH_PRODUCTO_BY_ID_PENDIENTE,FETCH_PRODUCTO_BY_ID_CUMPLIDO,FETCH_PRODUCTO_BY_ID_RECHAZADO,UPDATE_PRODUCTO,DELETE_PRODUCTO } from '../actions/types';
const PRODUCTO_INITIAL_STATE={};
const INITIAL_STATE = {
  lista: [],
  producto:PRODUCTO_INITIAL_STATE,
  errors:{},
  loading:false
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case LISTA_PRODUCTOS_CUMPLIDO:
      return {
        ...state,
        lista: action.payload.data,
        loading:false
      };

      case LISTA_PRODUCTOS_PENDIENTE:
      return {
        ...state,
        loading:true
      };

      case LISTA_PRODUCTOS_RECHAZADO:
      return {
        ...state,
        loading:false
      };

      case NEW_PRODUCTO:{
        return {
          ...state
        }
      }
      case SAVE_PRODUCTO:{
        return{
          ...state,
          lista:[...state.lista,action.payload.data],
          errors:{}
          
        }
      }

      case FETCH_PRODUCTO_BY_ID_CUMPLIDO:{
        return{
          ...state,
          producto:action.payload.data,
          loading:false
        }
      }


      case FETCH_PRODUCTO_BY_ID_PENDIENTE:{
        return{
          ...state,
          producto:{},
          loading:true
        }
      }

      case FETCH_PRODUCTO_BY_ID_RECHAZADO:{
        return{
          ...state,
          loading:false
        }
      }

      case UPDATE_PRODUCTO:{
        const producto=action.payload.data;
        return{
          ...state,
          producto:PRODUCTO_INITIAL_STATE,
          lista:state.lista.map(item=>item._id === producto._id ? producto: item)
        }
      }

      case DELETE_PRODUCTO:{
        const id=action.payload.data._id;
        return{
          ...state,
        
         lista:state.lista.filter(item=>item._id !== id)
        }
      }
    default:
      return state;
  }
}