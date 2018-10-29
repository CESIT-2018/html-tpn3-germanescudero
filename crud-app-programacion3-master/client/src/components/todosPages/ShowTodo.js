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
                <br/>
                <div className="row">
                     <div className="col-sm-2"><p className="font-weight-bold text-right">Name:</p></div>
                     <div className="col-sm-10">{this.props.todo.name}</div>
                </div>            
                <div className="row">
                     <div className="col-sm-2"><p className="font-weight-bold text-right">Description:</p></div>
                     <div className="col-sm-10">{this.props.todo.description}</div>
                </div>   
               
               <div className="row">
               <Link className="btn btn-light mr-2" to="/todos">Volver</Link>
               <Link to={`/todos/${this.props.todo._id}/edit`} className="btn btn-secondary mr-2">Editar</Link>&nbsp;
               
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

