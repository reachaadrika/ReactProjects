import React, { Component } from 'react'
import AddTodo from './AddTodo';
import { TodoList } from './TodoList'

export class App extends Component {
    state= 
    {
        todos:  [
            {id : 1,content : 'Solve 10 problems'},
            {id :2,content:'Watch Netflix'},
        ]
    }

    deleteTodo = (id) => 
    {
        const todos = this.state.todos.filter (todo => 
            {
                return todo.id !==id
            });
            this.setState({ todos });
    }

    AddTodo = (todo) =>
    {
         todo.id = Math.random();

         let todos = [...this.state.todos , todo];
         this.setState ({
             todos 
         })
    }

    render() {
        return (
            <div className="todo container">
                <h1 className="center blue-text">Todo List</h1>
                <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo}  />
                <AddTodo AddTodo = {this.AddTodo} />
            </div>
        )
    }
}

export default App
