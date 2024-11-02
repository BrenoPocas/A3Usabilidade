import React, { useState } from 'react'
import Task from './Task'
import './App.css'

function App() {
  const [tasks, setTasks] = useState(['Estudar React', 'Fazer exercício', 'Caminhar'])
  const [newTask, setNewTask] = useState('')

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([newTask, ...tasks])
      setNewTask('')
    }
  }

  const handleDeleteTask = () => {
    const temp = tasks.map(item => item.toLowerCase())
    newTask.toLowerCase()
    if(temp.indexOf(newTask)!== -1){
      tasks.splice(temp.indexOf(newTask),1)
      setNewTask('')
    } else if(newTask !== '' && newTask -1 < tasks.length){
      tasks.splice(newTask-1,1)
      setNewTask('')
    }
  }

  return (
    <div className="App">
      <h1>Minha Lista de Tarefas</h1>

      <button onClick={handleDeleteTask}>Remover</button>
      <input
        type="text"
        value={newTask}
        onChange={(e) => {
          setNewTask(e.target.value)
        }}
        placeholder="Tarefa"
      />
      <button onClick={handleAddTask}>Adicionar</button>

      {tasks.map((task, index) => (
        <Task key={index} task={task} index={index}/>
      ))}
    </div>
  )
}

export default App