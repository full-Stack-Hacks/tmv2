import { useContext } from "react";
import ProjectContext from "../context/ProjectContext";
import ProjectInput from "./ProjectInput";
import SingleProject from "./SingleProject";

const DashBoard = () => {
  const { singleProject } = useContext(ProjectContext);

  return <>{singleProject !== null ? <SingleProject /> : <ProjectInput />}</>;
};

export default DashBoard;
