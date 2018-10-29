import axios from 'axios';
import { FETCH_TODOS_FULFILLED,FETCH_TODOS_PENDING ,FETCH_TODOS_REJECTED ,NEW_TODO,SAVE_TODO,FETCH_TODOS_BY_ID_PENDING,FETCH_TODOS_BY_ID_REJECTED,FETCH_TODOS_BY_ID_FULFILLED,UPDATE_TODO,DELETE_TODO } from './types';

//import NewTodo from '../components/todosPages/NewTodo';

export const fetchTodos = () => async dispatch => {
  //const res = await axios.get('/api/todos');

  dispatch({ type: FETCH_TODOS_PENDING });
  try{
    var res=await axios.get('/api/todos');
    dispatch({type:FETCH_TODOS_FULFILLED,payload:res});
  }catch(error){
    dispatch({type:FETCH_TODOS_REJECTED,payload:error});
  }
};

export const newTodo=()=> async dispatch=>{
  dispatch({type:NEW_TODO});
};

export const saveTodo=(todo)=> async dispatch=>{
  var res=await axios.post('/api/todos',todo);
  dispatch({type:SAVE_TODO,payload:res});
};

export const fetchTodoById=(id)=> async dispatch=>{
  dispatch({ type: FETCH_TODOS_BY_ID_PENDING});
  try{
    var res=await axios.get('/api/todos/'+id);
    dispatch({type:FETCH_TODOS_BY_ID_FULFILLED,payload:res});
  }catch(error){
    dispatch({type:FETCH_TODOS_BY_ID_REJECTED});
  }
};

export const updateTodo=(todo)=> async dispatch=>{
  var res=await axios.put(`/api/todos/${todo._id}`,todo);
  return dispatch({
    type:UPDATE_TODO,
    payload:res
  })
};

export const deleteTodo=(id)=>async dispatch=>{
  var res=await axios.delete(`/api/todos/${id}`);
  return dispatch({
    type:DELETE_TODO,
    payload:res
  })
};