import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import reducerTodos from './ReducerTodos';
import reducerProductos from './ReducerProductos';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import reducerServicios from './ReducerServicios';

export default combineReducers({
  form: reduxForm,
  todos: reducerTodos,
  productos:reducerProductos,
  servicios:reducerServicios,
  errors: errorReducer,
  auth: authReducer
});
