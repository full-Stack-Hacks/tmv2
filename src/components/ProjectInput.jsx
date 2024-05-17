import { useContext } from "react";
import Project from "../models/projectClass";
import ProjectContext from "../context/ProjectContext";

const ProjectInput = () => {
  const { addProject, singleProject } = useContext(ProjectContext);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const formData = new FormData(e.target); // Create a FormData object from the form

    // Extract the values using FormData's get method
    const title = formData.get("title");
    const startDate = formData.get("startDate");
    const endDate = formData.get("endDate");
    const blurb = formData.get("blurb");

    // Log the values
    console.log({ title, startDate, endDate, blurb });
    const newProject = new Project(title, startDate, endDate, blurb);
    addProject(newProject);
  };

  return (
    <form onSubmit={handleSubmit} className="verticalFlexContainer">
      <label htmlFor="title">Title</label>
      <input type="text" id="title" name="title" />
      <label htmlFor="startDate">Start Date</label>
      <input type="date" id="startDate" name="startDate" />
      <label htmlFor="endDate">End Date</label>
      <input type="date" id="endDate" name="endDate" />
      <label htmlFor="blurb">Blurb</label>
      <textarea
        id="blurb"
        name="blurb"
        rows="4"
        cols="50"
        placeholder="Enter your blurb here"
      ></textarea>
      <button type="submit">Submit</button> {/* Added a submit button */}
    </form>
  );
};

export default ProjectInput;
