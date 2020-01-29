import React,{Component} from 'react';
import TodoAdd from './todoadd';
import Todo from './Todo';

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state={todos:[],id:''}
        this.create=this.create.bind(this);
        this.remove=this.remove.bind(this);
    }
    create(task){
        const newTodos=[...this.state.todos,task];
        this.setState({todos:newTodos});
        }
    remove(id){
        const newtodos=this.state.todos.filter(t=>t.id!==id);
        this.setState({todos:newtodos});
    }    
    render(){
        const todos=this.state.todos.map(todo=>{
            return <Todo  key={todo.id} task={todo.task} id={todo.id} remove={this.remove}/>
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