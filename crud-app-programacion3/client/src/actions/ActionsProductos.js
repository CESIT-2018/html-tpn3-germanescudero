import axios from 'axios';
import { LISTA_PRODUCTOS } from './types';

export const fetchProductos = () => async dispatch => {
  const res = await axios.get('/api/productos');

  dispatch({ type: LISTA_PRODUCTOS  , payload: res.data });
};