import {FETCH_TODOS_PENDING,FETCH_TODOS_FULFILLED,FETCH_TODOS_REJECTED,NEW_TODO,SAVE_TODO,FETCH_TODOS_BY_ID_REJECTED,FETCH_TODOS_BY_ID_FULFILLED,FETCH_TODOS_BY_ID_PENDING,UPDATE_TODO,DELETE_TODO} from '../actions/types';

const TODO_INITIAL_STATE={};

const INITIAL_STATE = {
  list: [],
  todo:TODO_INITIAL_STATE,
  errors:{},
  loading:false
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_TODOS_FULFILLED:
      return {
        ...state,
        list: action.payload.data,
        loading:false
      };

      case FETCH_TODOS_PENDING:
      return {
        ...state,
        loading:true
      };

      case FETCH_TODOS_REJECTED:
      return {
        ...state,
        loading:false
      };

      case NEW_TODO:{
        return {
          ...state
        }
      }
      case SAVE_TODO:{
        return{
          ...state,
          list:[...state.list,action.payload.data],
          errors:{}
          
        }
      }

      case FETCH_TODOS_BY_ID_FULFILLED:{
        return{
          ...state,
          todo:action.payload.data,
          loading:false
        }
      }


      case FETCH_TODOS_BY_ID_PENDING:{
        return{
          ...state,
          todo:{},
          loading:true
        }
      }

      case FETCH_TODOS_BY_ID_REJECTED:{
        return{
          ...state,
          loading:false
        }
      }

      case UPDATE_TODO:{
        const todo=action.payload.data;
        return{
          ...state,
          todo:TODO_INITIAL_STATE,
          list:state.list.map(item=>item._id === todo._id ? todo: item)
        }
      }

      case DELETE_TODO:{
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
