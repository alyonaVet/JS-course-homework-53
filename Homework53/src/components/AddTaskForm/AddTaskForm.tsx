import './AddTaskForm.css';
import React, {ChangeEvent, useState} from 'react';
import {TypeTask} from '../../types';

interface Props {
  onSubmit: (task: TypeTask) => void;
}

const AddTaskForm: React.FC<Props> = ({onSubmit}) => {
  const [currentTask, setCurrentTask] = useState('');

  const onTaskChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentTask((prevTask) => {
      prevTask = event.target.value;
      return prevTask;
    });
  };

  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newTask: TypeTask = {
      taskText: currentTask,
      id: Math.random().toString(),
    };
    onSubmit(newTask);
  };

  return (
    <form className="taskForm" onSubmit={onFormSubmit}>
      <textarea className="textInput" placeholder="Add new task" onChange={onTaskChange}/>
      <button className="btn" type="submit">Add</button>
    </form>
  );
};

export default AddTaskForm;