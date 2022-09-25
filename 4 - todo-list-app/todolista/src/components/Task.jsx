import React from 'react';
import './Task.css';

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
    return (
        <div className='task-container' style={task.completed ? { borderLeft: '6px solid chartreuse' } : {}}>
            <div onClick={() => handleTaskClick(task.id)} >
                {task.title}
            </div>

            <div>
                <button onClick={() => handleTaskDeletion(task.id)}>X</button>
            </div>
        </div>
    );
}

export default Task;