import { useContext } from "react";
import ProjectContext from "../context/ProjectContext";

const SingleProject = () => {
  const { singleProject } = useContext(ProjectContext);
  const { title, blurb, startDate, endDate } = singleProject;
  return (
    <>
      <h1>{title}</h1>
      <p>{blurb}</p>
    </>
  );
};

export default SingleProject;
