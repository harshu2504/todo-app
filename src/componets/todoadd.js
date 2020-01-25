import React,{Component} from 'react';

class TodoAdd extends Component{
    constructor(props){
        super(props);
        this.state={task:""}
        this.onhandleSubmit=this.onhandleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(evt){
        this.setState({
            [evt.target.name]:evt.target.value
        })
    }
    onhandleSubmit(evt){
        evt.preventDefault();
        
        this.props.handleSubmit(this.state.task)
        this.setState({
            task:""
        })
    }
    render(){
        
        return(
            <form onSubmit={this.onhandleSubmit}>
                <label htnlFor="task">New Todo</label>
                <input type="text" placeholder="enter todo" id="task" value={this.state.task} name="task" onChange={this.handleChange} />
                <button type="submit">add todo</button>
            </form>
        )
    }
}
export default TodoAdd;