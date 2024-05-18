import { useContext } from "react";
import ProjectContext from "../context/ProjectContext";

const TaskItem = ({ body, id, projectId }) => {
  const { deleteTask } = useContext(ProjectContext);

  const handleDelete = () => {
    deleteTask(id, projectId);
  };

  return (
    <div className="taskItem">
      <h3>{body}</h3>
      <div className="btn" onClick={handleDelete}>
        Delete
      </div>
    </div>
  );
};

export default TaskItem;
