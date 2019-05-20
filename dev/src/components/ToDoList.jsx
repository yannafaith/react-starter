import React from 'react'; 
import ToDo from './ToDo.jsx'

const ToDoList = (props) => {
    return (
        <div>
            {props.data.map(task => {
                return <ToDo task={task} toggleComplete={props.toggleComplete}/>
            })
        } 
    </div>
)


}

export default ToDoList;