import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchTodoById} from '../../actions';
import { Link } from 'react-router-dom';

class ShowTodo extends Component {


    componentDidMount(){
        const {id}=this.props.match.params;
        if(id){
            this.props.fetchTodoById(id);
        }
    }

    
  
   render() {
        return (
            <div>
                <h2>Show Todo</h2>
               {this.props.todo.name}-
               {this.props.todo.description}
               <div>
               <Link to={`/todos/${this.props.todo._id}/edit`} className="">Editar</Link>&nbsp;
               </div>

            </div>
        )
    };
}
function mapStateToProps(state) {//conecta a los estados
    return {
        todo: state.todos.todo
    };
}

export default connect(mapStateToProps,{fetchTodoById}) (ShowTodo);

