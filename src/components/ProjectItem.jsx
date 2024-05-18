import { useContext } from "react";
import ProjectContext from "../context/ProjectContext";

const ProjectItem = ({ title, id }) => {
  const { setSingleProject, deleteProject } = useContext(ProjectContext);

  const handleClick = () => {
    setSingleProject(id);
  };

  const handleDelete = () => {
    deleteProject(id);
  };
  return (
    <div className="spaceBetween">
      <div className="listItem" onClick={handleClick}>
        {title}
      </div>
      <div className="btn" onClick={handleDelete}>
        Delete
      </div>
    </div>
  );
};

export default ProjectItem;
