import { useContext } from "react";
import ProjectContext from "../context/ProjectContext";
import Task from "../models/taskClass";

const TaskInput = ({ id }) => {
  const { addTask } = useContext(ProjectContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formObj = new FormData(e.target);
    const title = formObj.get("title");
    const newTask = new Task(title);
    addTask(newTask, id);
  };
  return (
    <form onSubmit={handleSubmit} className="formControl verticalFlexContainer">
      <h2 className="titleMedium">Add Task</h2>
      <div className="label-wrapper">
        <label htmlFor="title" className="label-wrapper__label">
          Explain task
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="label-wrapper__input"
        />
        <button type="submit" className="submitButton">
          Submit
        </button>
      </div>
    </form>
  );
};

export default TaskInput;
