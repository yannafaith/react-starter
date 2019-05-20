import React from 'react';


const TodoForm = (props) => {
    return (
        <div>
            <input onChange={props.changehandler} name="newTodo" />
            <button onClick={props.addTodo}>Add Todo</button>
            <button>Clear Completed</button>
        </div>
    )

}

export default TodoForm;
