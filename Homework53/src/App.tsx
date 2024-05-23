import './App.css';
import {useState} from 'react';
import {TypeTask} from './types';
import AddTaskForm from './components/AddTaskForm/AddTaskForm';
import Task from './components/Task/Task';

const App = () => {
  const [tasks, setTasks] = useState<TypeTask[]>([
    {taskText: 'Do workout', id: '1'},
    {taskText: 'Do homework', id: '2'},
    {taskText: 'Water flowers', id: '3'},
  ]);

  return (
    <>
      <h2>Create your tasks list:</h2>
      <AddTaskForm/>
      <div className="container">
        {tasks.map((task) => {
          return <Task key={task.id} task={task.taskText}/>
        })}
      </div>
    </>
  );
};


export default App;
