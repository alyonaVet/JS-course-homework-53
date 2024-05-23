import './AddTaskForm.css';

const AddTaskForm = () => {
  return (
    <form className="taskForm">
      <textarea className="textInput" placeholder="Add new task"/>
      <button className="btn" type="submit">Add</button>
    </form>
  );
};

export default AddTaskForm;