import React,{Component} from 'react';

class Todo extends Component{
    constructor(props){
        super(props);
        this.state={task:this.props.task}
    }
    render(){
        return(
            <div>
                <button>edit</button>
                <button>delete</button>
                <li>{this.props.task}</li>
            </div>
        )
    }
}
export default Todo;