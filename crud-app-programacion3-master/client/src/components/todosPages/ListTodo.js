import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchTodos,deleteTodo} from '../../actions';
import { Link } from 'react-router-dom';

class ListTodo extends Component {

    

    componentDidMount() {
        this.props.fetchTodos();
       
        
    }




    renderTodos() {
        return this.props.listTodos.map(todo => {
            return (
            <tr key={todo._id}>
                <td>{todo.isDone ? "hecho" : "no"}</td>
                <td>{todo.name}</td>
                <td>{todo.description}</td>
                <td>
                <Link to={`/todos/${todo._id}/show`} className=""><i className="material-icons">visibility</i></Link>&nbsp;
                <Link to={`/todos/${todo._id}/edit`} className="" ><i className="material-icons" >edit</i></Link>&nbsp;
                <a className="mr-2" href={`/todos`} onClick={()=>{if(window.confirm('¿Estás seguro de eliminar este item: '+todo.name+' ?'))this.props.deleteTodo(todo._id)}}  ><i className="material-icons">delete</i></a>
                </td>
            </tr>
            )
        });
    }

    render() {
        return (
            <div>
                
                <h2>Listando Todos</h2>

                <p>
                    <Link to="/todos/new" className="btn btn-primary">Nuevo</Link>
                </p>
                
                <div className="table-responsive">
                    <table className="table table-striped table-sm">
                        <thead>
                            <tr>
                                <th>Hecho</th>
                                <th>Nombre</th>
                                <th>Descripción</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.renderTodos()
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {//conecta a los estados
    return {
        listTodos: state.todos.list
    };
}

export default connect(mapStateToProps, {fetchTodos,deleteTodo})(ListTodo);