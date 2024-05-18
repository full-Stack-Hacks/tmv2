import { useContext, useState } from "react";
import Project from "../models/projectClass";
import ProjectContext from "../context/ProjectContext";

const ProjectInput = () => {
  const { addProject, singleProject } = useContext(ProjectContext);

  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [blurb, setBlurb] = useState("");

  const clearFields = () => {
    setTitle("");
    setStartDate("");
    setEndDate("");
    setBlurb("");
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Log the values
    console.log({ title, startDate, endDate, blurb });
    const newProject = new Project(title, startDate, endDate, blurb);
    console.log(newProject);
    addProject(newProject);
    clearFields();
  };

  return (
    <form onSubmit={handleSubmit} className="formControl verticalFlexContainer">
      <h2 className="titleMedium">Add Project</h2>
      <div className="label-wrapper">
        <label htmlFor="title" className="label-wrapper__label">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="label-wrapper__input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="label-wrapper">
        <label htmlFor="startDate" className="label-wrapper__label">
          Start Date
        </label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          className="label-wrapper__input"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>
      <div className="label-wrapper">
        <label htmlFor="endDate" className="label-wrapper__label">
          End Date
        </label>
        <input
          type="date"
          id="endDate"
          name="endDate"
          className="label-wrapper__input"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>
      <div className="label-wrapper">
        <label htmlFor="blurb" className="label-wrapper__label">
          Blurb
        </label>
        <textarea
          id="blurb"
          name="blurb"
          rows="4"
          cols="50"
          placeholder="Enter your blurb here"
          className="label-wrapper__input"
          value={blurb}
          onChange={(e) => setBlurb(e.target.value)}
        ></textarea>
      </div>
      <button type="submit" className="submitButton">
        Submit
      </button>
    </form>
  );
};

export default ProjectInput;
