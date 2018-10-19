import {LISTA_PRODUCTOS} from '../actions/types';

const INITIAL_STATE = {
  lista: []
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {//quien lo escucha si es si meustra el resultado
    case LISTA_PRODUCTOS:
      return {
        ...state,
        lista: action.payload
      };
    default:
      return state;
  }
}