import {FETCH_PEDIDO_PENDING,FETCH_PEDIDO_FULFILLED,FETCH_PEDIDO_REJECTED,NEW_PEDIDO,SAVE_PEDIDO,FETCH_PEDIDO_BY_ID_REJECTED,FETCH_PEDIDO_BY_ID_FULFILLED,FETCH_PEDIDO_BY_ID_PENDING,UPDATE_PEDIDO,DELETE_PEDIDO} from '../actions/types';

const PEDIDO_INITIAL_STATE={};

const INITIAL_STATE = {
  list: [],
  pedido:PEDIDO_INITIAL_STATE,
  errors:{},
  loading:false
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_PEDIDO_FULFILLED:
      return {
        ...state,
        list: action.payload.data,
        loading:false
      };

      case FETCH_PEDIDO_PENDING:
      return {
        ...state,
        loading:true
      };

      case FETCH_PEDIDO_REJECTED:
      return {
        ...state,
        loading:false
      };

      case NEW_PEDIDO:{
        return {
          ...state
        }
      }
      case SAVE_PEDIDO:{
        return{
          ...state,
          list:[...state.list,action.payload.data],
          errors:{}
          
        }
      }

      case FETCH_PEDIDO_BY_ID_FULFILLED:{
        return{
          ...state,
          pedido:action.payload.data,
          loading:false
        }
      }


      case FETCH_PEDIDO_BY_ID_PENDING:{
        return{
          ...state,
          pedido:{},
          loading:true
        }
      }

      case FETCH_PEDIDO_BY_ID_REJECTED:{
        return{
          ...state,
          loading:false
        }
      }

      case UPDATE_PEDIDO:{
        const pedido=action.payload.data;
        return{
          ...state,
          pedido:PEDIDO_INITIAL_STATE,
          list:state.list.map(item=>item._id === pedido._id ? pedido: item)
        }
      }

      case DELETE_PEDIDO:{
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
