import { useContext } from "react";
import TaskInput from "./TaskInput";
import TaskItem from "./TaskItem";
import ProjectContext from "../context/ProjectContext";

const SingleProject = () => {
  const { singleProject } = useContext(ProjectContext);
  const { title, blurb, startDate, endDate, id, tasks } = singleProject;

  const startDateObject = new Date(startDate);
  const endDateObject = new Date(endDate);

  const formattedStart = startDateObject.toLocaleDateString();
  const formattedEnd = endDateObject.toLocaleDateString();
  return (
    <div className="singleProject">
      <h1>{title}</h1>

      <p>{blurb}</p>

      <div className="dates">
        <p>{formattedStart}</p>
        <p>{formattedEnd}</p>
      </div>
      <TaskInput id={id} />
      {tasks.length > 0 &&
        tasks.map((task, index) => <TaskItem task={task} key={index} />)}
    </div>
  );
};

export default SingleProject;
