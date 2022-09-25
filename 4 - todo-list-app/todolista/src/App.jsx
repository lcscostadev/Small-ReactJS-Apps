import React, { useState, useEffect } from 'react';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { v4 as uuidv4 } from 'uuid';
import './App.css'

function App() {

  const LOCAL_STORAGE_KEY = "todo.app";

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Estudar',
      completed: false,
    },
    {
      id: 2,
      title: 'Academia',
      completed: false,
    },
    {
      id: 3,
      title: 'Corrida 10km de costas',
      completed: true,
    },
  ])

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTasks) setTasks(storedTasks);
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])


  const handleTaskAddtion = (taskTitle) => {
    const newTasks = [...tasks, {
      title: taskTitle,
      id: uuidv4(),
      completed: false,
    }]

    setTasks(newTasks)
  }

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) return { ...task, completed: !task.completed }
      return task;
    })
    setTasks(newTasks);
  }

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasks(newTasks);
  }

  return (
    <>
      <AddTask handleTaskAddtion={handleTaskAddtion} />
      <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion} />
    </>
  )
}

export default App
