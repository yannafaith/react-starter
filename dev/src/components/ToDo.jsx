import React from 'react'; 

const ToDo = (props) => {

    return (
        <div 
            onClick={() => props.toggleComplete(props.task.id)} 
            className={`${props.task.completed}`}>
                {props.task.task}
        </div>
    )
}

export default ToDo;