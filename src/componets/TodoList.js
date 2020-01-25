import React,{Component} from 'react';
import TodoAdd from './todoadd';
import Todo from './Todo';

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state={todos:[],id:''}
        this.create=this.create.bind(this)
    }
    create(task){
        const newTodos=[...this.state.todos,task];
        this.setState({todos:newTodos});
        }
    render(){
        const todos=this.state.todos.map(todo=>{
            return <Todo task={todo}/>
        })
        return(
           <div>
            <TodoAdd handleSubmit={this.create}/>
           <ul>{todos}</ul>
           </div>
        );
    }
}
export default TodoList;