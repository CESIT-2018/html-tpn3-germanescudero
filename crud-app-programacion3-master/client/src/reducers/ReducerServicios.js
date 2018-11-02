import {LISTA_SERVICIOS_CUMPLIDO,LISTA_SERVICIOS_PENDIENTE,LISTA_SERVICIOS_RECHAZADO,NEW_SERVICIO,SAVE_SERVICIO,FETCH_SERVICIO_BY_ID_PENDIENTE,FETCH_SERVICIO_BY_ID_CUMPLIDO,FETCH_SERVICIO_BY_ID_RECHAZADO,UPDATE_SERVICIO,DELETE_SERVICIO} from '../actions/types';
const SERVICIO_INITIAL_STATE={};
const INITIAL_STATE = {
  lista: [],
  servicio:SERVICIO_INITIAL_STATE,
  errors:{},
  loading:false
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case LISTA_SERVICIOS_CUMPLIDO:
      return {
        ...state,
        lista: action.payload.data,
        loading:false
      };

      case LISTA_SERVICIOS_PENDIENTE:
      return {
        ...state,
        loading:true
      };

      case LISTA_SERVICIOS_RECHAZADO:
      return {
        ...state,
        loading:false
      };

      case NEW_SERVICIO:{
        return {
          ...state
        }
      }
      case SAVE_SERVICIO:{
        return{
          ...state,
          lista:[...state.lista,action.payload.data],
          errors:{}
          
        }
      }

      case FETCH_SERVICIO_BY_ID_CUMPLIDO:{
        return{
          ...state,
          servicio:action.payload.data,
          loading:false
        }
      }


      case FETCH_SERVICIO_BY_ID_PENDIENTE:{
        return{
          ...state,
          servicio:{},
          loading:true
        }
      }

      case FETCH_SERVICIO_BY_ID_RECHAZADO:{
        return{
          ...state,
          loading:false
        }
      }

      case UPDATE_SERVICIO:{
        const servicio=action.payload.data;
        return{
          ...state,
          servicio:SERVICIO_INITIAL_STATE,
          lista:state.lista.map(item=>item._id === servicio._id ? servicio: item)
        }
      }

      case DELETE_SERVICIO:{
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