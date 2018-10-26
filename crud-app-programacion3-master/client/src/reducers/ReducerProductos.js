import {LISTA_PRODUCTOS, NEW_PRODUCTO, SAVE_PRODUCTO, UPDATE_PRODUCTO,FETCH_PRODUCTO_BY_ID,VER_PRODUCTO_BY_ID} from '../actions/types';
const PRODUCTO_INITIAL_STATE={};
const INITIAL_STATE = {
  lista: [],
  producto:PRODUCTO_INITIAL_STATE,
  errors:{}
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {//quien lo escucha si es si meustra el resultado
    case LISTA_PRODUCTOS:
      return {
        ...state,
        lista: action.payload
      }
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

      case FETCH_PRODUCTO_BY_ID:{
        return{
          ...state,
          producto:action.payload.data
        }
      }

      case VER_PRODUCTO_BY_ID:{
        return{
          ...state,
          producto:action.payload.data,
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
    default:
      return state;
  }
}