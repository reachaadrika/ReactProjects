import React, { Component } from 'react'

export class AddTodo extends Component {


    state = {
        content:" "
    }

    ChangeHandler = (e) =>
    this.setState ({
        content:e.target.value
    })

    handleSubmit = (e) =>
    {
        e.preventDefault();
        this.props.AddTodo(this.state);
        this.setState({
           content : " " 
        })
        
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add New Todo</label>
                    <input type="text" onChange={this.ChangeHandler} value={this.state.content}>

                    </input>
                </form>    
            </div>
        )
    }
}

export default AddTodo
