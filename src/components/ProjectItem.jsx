import { useContext } from "react";
import ProjectContext from "../context/ProjectContext";

const ProjectItem = ({ title, id }) => {
  const { setSingleProject } = useContext(ProjectContext);

  const handleClick = () => {
    setSingleProject(id);
  };
  return (
    <div className="listItem" onClick={handleClick}>
      {title}
    </div>
  );
};

export default ProjectItem;
