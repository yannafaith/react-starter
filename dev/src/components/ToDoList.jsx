import React from 'react';
import ToDo from './ToDo.jsx'

const ToDoList = (props) => {
    return (
        <div>
            <ToDo 
                todos={props.todos} 
                toggleComplete={props.toggleComplete}
            />
        </div>
    )
}

export default ToDoList;