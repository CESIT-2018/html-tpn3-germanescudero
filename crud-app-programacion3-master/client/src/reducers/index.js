import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import reducerTodos from './ReducerTodos';
import reducerProductos from './ReducerProductos';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import reducerServicios from './ReducerServicios';
import reducerContactos from './ReducerContacto';
import reducerNacionalidad from './ReducerNacionalidad';
import reducerCalificacion from './ReducerCalificacion';
import reducerCarrito from './ReducerCarrito';
import reducerPedido from './ReducerPedido';

export default combineReducers({
  form: reduxForm,
  todos: reducerTodos,
  productos:reducerProductos,
  servicios:reducerServicios,
  errors: errorReducer,
  auth: authReducer,
  contactos:reducerContactos,
  nacionalidades:reducerNacionalidad,
  calificaciones:reducerCalificacion,
  carritos:reducerCarrito,
  pedidos:reducerPedido
});
