import React from 'react';

const TodoForm = (props) => {
    return (
        <div>
            <input onChange={props.changeHandler} name="task"/>
            <button type="submit" onClick={props.submitNewTodo}>Add Todo</button>
            <button onClick={props.clearCompletedTodos}>Clear Completed</button>
        </div>
    )

}

export default TodoForm;