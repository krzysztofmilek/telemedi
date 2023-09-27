import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Todo from './component/Todo';
import FormAdd from './component/FormAdd';

interface TaskData {
  _id: number;
  content: string;
  done: boolean;
}

function App() {
    const [tasks, setTasks] = useState<TaskData[]>([]);
const getTasks = async () => {
  try {
    const response = await axios.get("http://localhost:7002/tasks");
    setTasks(response.data);
  } catch (error) {
    console.error("Błąd podczas pobierania zadań:", error);
  }
};

const handleDelete = async (_id: number) => {
  try {
    await axios.delete(`http://localhost:7002/tasks/${_id}`);
    const updatedTasks = tasks.filter(task => task._id !== _id);
    setTasks(updatedTasks);

  } catch (error) {
    console.error("Błąd podczas usuwania zadania:", error);
  }
};

const handleDone = async (_id: number) => {
  try {
    const apiUrl = `http://localhost:7002/tasks/${_id}`;
    await axios.patch(apiUrl, {done: !tasks.find(task=> task._id === _id)?.done} );
    const updatedTasks = tasks.map(task =>
      task._id === _id ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
  } catch (error) {
    console.error("Błąd podczas aktualizowania zadania:", error);
  }
};

  useEffect(() => {
    getTasks();
  }, []);
  return (
    <div className='App'>
 
    <div className="">
    <p> Zadanie rekrytacyjne Full Stack Dev</p>
      <p> Krzysztof Miłek</p>
      <p> www.krzysztofmilek.pl</p>
    <div className='centerBody'>
    <FormAdd getTasks={getTasks}  />
 
  </div>
  <div className='centerBody'>
      <table>
   
      <tbody>
      {tasks.map((task: TaskData) => (
        <Todo
          key={task._id}
          task={task}
          handleDelete={handleDelete}
          handleDone={handleDone}
        />
      ))}
      </tbody>
      </table>
      </div>
    </div>
    </div>
  );
}

export default App;