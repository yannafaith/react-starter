import React from 'react';
import '../index.css'

const ToDo = (props) => {
    return (
        <div>
            {props.todos.map(item => {
                return (
                    <p 
                        className={`${item.completed}`}
                        onClick={() => props.toggleComplete(item.id)}>
                        {item.task}
                    </p>)
            })}
        </div>
    )
}

export default ToDo;