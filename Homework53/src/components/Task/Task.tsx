import './Task.css';
import React from 'react';

interface Props {
  task: string;
}
const Task: React.FC<Props> = ({task}) => {
  return (
    <div className="taskItem">{task}</div>
  );
};

export default Task;