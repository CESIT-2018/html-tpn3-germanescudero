import { NEW_CONTACTO,SAVE_CONTACTO } from '../actions/types';
const CONTACTO_INITIAL_STATE={};

const INITIAL_STATE = {
  lista: [],
  contacto:CONTACTO_INITIAL_STATE,
  errors:{},
  
  
  loading:false
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {

      

        case NEW_CONTACTO:{
           return {
             ...state
            }
          }
          case SAVE_CONTACTO:{
            return{
              ...state,
              lista:[...state.lista,action.payload.data],
              errors:{}
              
            }
          }
        default:
        return state;
    }
  }