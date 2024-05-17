import { createContext, useReducer } from "react";
import { initialState, projectReducer } from "./projectReducer";
import SingleProject from "../components/SingleProject";

const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [state, dispatch] = useReducer(projectReducer, initialState);

  const addProject = (newProject) => {
    dispatch({
      type: "addProject",
      payload: {
        newProject,
      },
    });
  };

  const setSingleProject = (id) => {
    dispatch({
      type: "setSingleProject",
      payload: {
        id,
      },
    });
  };

  return (
    <ProjectContext.Provider
      value={{
        addProject,
        setSingleProject,
        singleProject: state.singleProject,
        projects: state.projects,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectContext;
