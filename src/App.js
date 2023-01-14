
import './App.css';
import React, { useState } from 'react';

function App() {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
      setTasks([...tasks, newTask]);
      setNewTask('');

  }

  const deleteTask = (index) => {
      setTasks(tasks.filter((task, i) => i !== index));


  }

  const modifyTask = (index, newValue) => {
      let modifiedTasks = [...tasks];
      modifiedTasks[index] = newValue;
      setTasks(modifiedTasks);
  }

  const sortTaskByColor = (color) => {
      setTasks(tasks.sort((a, b) => {
          if(a.color === color) return -1;
          if(b.color === color) return 1;
          return 0;
      }));
  }

  const prioritizeTask = (index) => {
      let modifiedTasks = [...tasks];
      let task = modifiedTasks.splice(index, 1);
      modifiedTasks.unshift(task[0]);
      setTasks(modifiedTasks);
  }

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Enter a new task"
        value={newTask}
        onChange={e => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>

      <ul>
          {tasks.map((task, index) => (
              <li key={index}>
                  {task}
                  <button onClick={() => deleteTask(index)}>Delete</button>
                  <button onClick={() => modifyTask(index, prompt("Enter the new task"))}>Modify</button>
                  <button onClick={() => prioritizeTask(index)}>Prioritize</button>
              </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
