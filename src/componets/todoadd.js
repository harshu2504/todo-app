import React,{Component} from 'react';
import uuid from 'uuid';
class todoadd extends Component{
    constructor(props){
        super(props);
        this.state={task:""};
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    
    }
    handleChange(evt){
        this.setState({
            [evt.target.name]:evt.target.value
        })
    }
    handleSubmit(evt){
        evt.preventDefault();
        this.props.createTodo({...this.state,id:uuid()});
        this.setState({
            task:""
        })

    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="task">New Todo</label>
                <input type="text" placeholder="new todo" id="task" value={this.state.task}
                onChange={this.handleChange} name="task"/>
                <button>add item</button>
            </form>
        )
    }
}
export default todoadd;