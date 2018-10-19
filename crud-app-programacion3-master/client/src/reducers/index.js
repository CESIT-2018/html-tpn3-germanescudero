import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import reducerTodos from './ReducerTodos';
import reducerProductos from './ReducerProductos';

export default combineReducers({
  form: reduxForm,
  todos: reducerTodos,
  productos:reducerProductos
});
