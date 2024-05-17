import { useContext } from "react";
import ProjectContext from "../context/ProjectContext";

const SingleProject = () => {
  const { singleProject } = useContext(ProjectContext);
  const { title, blurb, startDate, endDate } = singleProject;

  const startDateObject = new Date(startDate);
  const endDateObject = new Date(endDate);

  const formattedStart = startDateObject.toLocaleDateString();
  const formattedEnd = endDateObject.toLocaleDateString();
  return (
    <>
      <h1>{title}</h1>

      <p>{blurb}</p>

      <p>{formattedStart}</p>
      <p>{formattedEnd}</p>
    </>
  );
};

export default SingleProject;
