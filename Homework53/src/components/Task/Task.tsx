import './Task.css';
import React from 'react';

interface Props {
  task: string;
  onRemove: React.MouseEventHandler;
}

const Task: React.FC<Props> = ({task, onRemove}) => {
  return (
    <div className="taskContainer">
      <div className="taskItem">{task}</div>
      <button onClick={onRemove} className="deleteBtn">Delete</button>
    </div>);
};

export default Task;