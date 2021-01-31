import React from 'react'

function Todo({task,removeTodo,id}) {
    return (
        <div>
            <button>Edit</button>
            <button onClick={()=>removeTodo(id)}>X</button>
            <li>{task}</li>
        </div>
    )
}

export default Todo
