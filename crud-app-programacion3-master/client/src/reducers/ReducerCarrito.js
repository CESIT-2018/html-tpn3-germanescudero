import {FETCH_CARRITO_PENDING,FETCH_CARRITO_FULFILLED,FETCH_CARRITO_REJECTED,NEW_CARRITO,SAVE_CARRITO,FETCH_CARRITO_BY_ID_REJECTED,FETCH_CARRITO_BY_ID_FULFILLED,FETCH_CARRITO_BY_ID_PENDING,FETCH_CARRITO_BY_USUARIO,UPDATE_CARRITO,DELETE_CARRITO} from '../actions/types';

const CARRITO_INITIAL_STATE={};

const INITIAL_STATE = {
  list: [],
  carrito:CARRITO_INITIAL_STATE,
  errors:{},
  loading:false
};
 
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_CARRITO_FULFILLED:
      return {
        ...state,
        list: action.payload.data,
        loading:false
      };

      case FETCH_CARRITO_PENDING:
      return {
        ...state,
        loading:true
      };

      case FETCH_CARRITO_REJECTED:
      return {
        ...state,
        loading:false
      };

      case NEW_CARRITO:{
        return {
          ...state
        }
      }
      case SAVE_CARRITO:{
        return{
          ...state,
          list:[...state.list,action.payload.data],
          errors:{}
          
        }
      }

      case FETCH_CARRITO_BY_ID_FULFILLED:{
        return{
          ...state,
          carrito:action.payload.data,
          loading:false
        }
      }


      case FETCH_CARRITO_BY_ID_PENDING:{
        return{
          ...state,
          carrito:{},
          loading:true
        }
      }

      case FETCH_CARRITO_BY_ID_REJECTED:{
        return{
          ...state,
          loading:false
        }
      }

      case FETCH_CARRITO_BY_USUARIO:{
        return{
          ...state,
          list:action.payload.data,
          loading:false
        }
      }

      case UPDATE_CARRITO:{
        const carrito=action.payload.data;
        return{
          ...state,
          carrito:CARRITO_INITIAL_STATE,
          list:state.list.map(item=>item._id === carrito._id ? carrito: item)
        }
      }

      case DELETE_CARRITO:{
        const id=action.payload.data._id;
        
        return{
          ...state,
          
         list:state.list.filter(item=>item._id !== id)
        }
      }
    default:
      return state;
  }
}
