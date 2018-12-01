import {FETCH_CALIFICACIONES_PENDING,FETCH_CALIFICACIONES_FULFILLED,FETCH_CALIFICACIONES_REJECTED,NEW_CALIFICACION,SAVE_CALIFICACION,FETCH_CALIFICACION_BY_ID} from '../actions/types';
const CALIFICACION_INITIAL_STATE={};

const INITIAL_STATE = {
  list: [],
  calificacion:CALIFICACION_INITIAL_STATE,
  errors:{},
  loading:false
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_CALIFICACIONES_FULFILLED:
      return {
        ...state,
        list: action.payload.data,
        loading:false
      };

      case FETCH_CALIFICACIONES_PENDING:
      return {
        ...state,
        loading:true
      };

      case FETCH_CALIFICACIONES_REJECTED:
      return {
        ...state,
        loading:false
      };

      case NEW_CALIFICACION:{
        return {
          ...state
        }
      }
      case SAVE_CALIFICACION:{
        return{
          ...state,
          list:[...state.list,action.payload.data],
          errors:{}
          
        }
      }

      case FETCH_CALIFICACION_BY_ID:{
        return{
          ...state,
          list:action.payload.data,
          loading:false
        }
      }




    default:
      return state;
  }
}
