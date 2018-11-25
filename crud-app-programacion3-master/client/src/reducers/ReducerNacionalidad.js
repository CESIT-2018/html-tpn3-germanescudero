import {LISTADO_NACIONALIDAD} from '../actions/types';

const NACIONALIDAD_INITIAL_STATE={};

const INITIAL_STATE = {
  listaN: [],
  nacionalidad:NACIONALIDAD_INITIAL_STATE,
  errors:{},
  loading:false
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {

        case LISTADO_NACIONALIDAD:
           return {
             ...state,
             listaN:action.payload
            };
          
          
        default:
        return state;
    }
  }