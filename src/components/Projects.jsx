import { useContext } from "react";
import ProjectContes from "../context/ProjectContext";
import ProjectItem from "./ProjectItem";
const Projects = () => {
  const { projects } = useContext(ProjectContes);

  if (projects.length < 1) return <h1>No project currently...</h1>;

  const projectList = projects.map((elem) => {
    return <ProjectItem {...elem} key={elem.id} />;
  });

  return (
    <div className="projectContainer">
      <div className="spaceBetween">
        <h1 className="titleMedium">Projects</h1>
        <div className="btn">new project</div>
      </div>

      {projectList}
    </div>
  );
};

export default Projects;
