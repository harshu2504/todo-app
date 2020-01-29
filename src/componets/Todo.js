import React,{Component} from 'react';

class Todo extends Component{
    constructor(props){
        super(props);
        this.state={task:this.props.task}
        this.handleRemove=this.handleRemove.bind(this);
    }
    handleRemove(){
        this.props.remove(this.props.id);
        
    }
    render(){
        return(
            <div>
                <button>edit</button>
                <button onClick={this.handleRemove}>delete</button>
                <li>{this.props.task}</li>
            </div>
        )
    }
}
export default Todo;