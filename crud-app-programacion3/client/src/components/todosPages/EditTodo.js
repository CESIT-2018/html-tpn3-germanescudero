import React, {Component} from 'react';
import {connect} from 'react-redux';

import {SubmissionError} from 'redux-form';
import TodoForm from './TodoForm';
import {fetchTodoById,updateTodo} from '../../actions';

import {Redirect} from 'react-router'

class EditTodo extends Component {

    state={redirect:false};

    componentDidMount(){
        const {id}=this.props.match.params;
        if(id){
            this.props.fetchTodoById(id);
        }
    }

    submit=(todo)=>{
        return this.props.updateTodo(todo)
        .then(response=>this.setState({redirect:true}))
        .catch(err=>{
            throw new SubmissionError(this.props.errors)
        })
    }

    render() {
        return (
            <div>
                <h2>Edit Todo</h2>
                <div>
                    {this.state.redirect
                    ? <Redirect to="/todos" />
                    : <TodoForm 
                        todo={this.props.todo}
                        onSubmit={this.submit}/>
                    }
                </div>    
            </div>

        )
    };
}

function mapStateToProps(state){
    return {todo:state.todos.todo,errors:state.todos.errors};
}

export default connect(mapStateToProps,{fetchTodoById,updateTodo}) (EditTodo);