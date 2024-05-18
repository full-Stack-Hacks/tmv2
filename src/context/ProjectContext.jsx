import { createContext, useReducer } from "react";
import { initialState, projectReducer } from "./projectReducer";
import {
  ADD_PROJECT,
  SET_SINGLE_PROJECT,
  ADD_TASK,
  DELETE_PROJECT,
  DELETE_TASK,
  SHOW_NEW_PROJECT_FORM,
} from "./types";

const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [state, dispatch] = useReducer(projectReducer, initialState);

  const addProject = (newProject) => {
    dispatch({
      type: ADD_PROJECT,
      payload: {
        newProject,
      },
    });
  };

  const setSingleProject = (id) => {
    dispatch({
      type: SET_SINGLE_PROJECT,
      payload: {
        id,
      },
    });
  };

  const addTask = (newTask, id) => {
    console.log("context");
    dispatch({
      type: ADD_TASK,
      payload: {
        newTask,
        id,
      },
    });
  };

  const deleteProject = (id) => {
    dispatch({
      type: DELETE_PROJECT,
      payload: {
        id,
      },
    });
  };

  const deleteTask = (id, projectId) => {
    dispatch({
      type: DELETE_TASK,
      payload: {
        id,
        projectId,
      },
    });
  };

  const showNewProjectForm = () => {
    dispatch({
      type: SHOW_NEW_PROJECT_FORM,
    });
  };

  return (
    <ProjectContext.Provider
      value={{
        addProject,
        addTask,
        deleteProject,
        setSingleProject,
        deleteTask,
        showNewProjectForm,
        singleProject: state.singleProject,
        projects: state.projects,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectContext;
