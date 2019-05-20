import React from 'react';


const TodoForm = (props) => {
    return (
        <div>
            <input onChange={props.changehandler} name="newTodo" />
            <button onClick={props.addTodo}>Add Todo</button>
            <button onClick={props.clearCompleted}>Clear Completed</button>
        </div>
    )

}

export default TodoForm;
