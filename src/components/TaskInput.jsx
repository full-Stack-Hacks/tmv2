import { useContext, useState } from "react";
import ProjectContext from "../context/ProjectContext";
import Task from "../models/taskClass";

const TaskInput = ({ id }) => {
  const { addTask } = useContext(ProjectContext);

  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = new Task(title);
    addTask(newTask, id);
    setTitle("");
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
          value={title}
          onChange={handleChange}
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
