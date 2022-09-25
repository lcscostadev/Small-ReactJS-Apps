import React, { useState } from 'react';
import './AddTask.css';

const AddTask = ({ handleTaskAddtion }) => {
    const [inputData, setInputData] = useState('');

    const handleInputChange = (e) => {
        const data = e.target.value;
        setInputData(data);
    }

    const handleAddTaskClick = () => {
        if (inputData !== '') {
            handleTaskAddtion(inputData);
            setInputData('');
        } else {
            return;
        }
    }

    return (
        <>
            <input type="text" className='input-text' placeholder='Enter your task here' onChange={handleInputChange} value={inputData} />
            <button className='btn' onClick={handleAddTaskClick}>Add Task</button>
        </>
    );
}

export default AddTask;