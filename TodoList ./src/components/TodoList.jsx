import React from 'react'

export const TodoList = ({todos , deleteTodo}) => {
   const todo1 = todos.length ? (
       todos.map(todo => {
           return (
               <div className="collection-item" key={todo.id}>
                   <span onClick= {() => {deleteTodo(todo.id)}}>
                       {todo.content} 
                    </span>
               </div>
           )
       })
   ) : (
       <p className="center"> You have no work left 🎉 </p>
   )
    return (
        <div className="todos collection">
            {todo1}
        </div>
    )
}
