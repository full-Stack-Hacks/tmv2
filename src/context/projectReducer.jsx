import {
  ADD_PROJECT,
  SET_SINGLE_PROJECT,
  ADD_TASK,
  DELETE_PROJECT,
  DELETE_TASK,
  SHOW_NEW_PROJECT_FORM,
} from "./types";

export const initialState = {
  projects: [],
  singleProject: null,
};

export const projectReducer = (state, action) => {
  switch (action.type) {
    case ADD_PROJECT: {
      return {
        ...state,
        projects: [...state.projects, action.payload.newProject],
      };
    }
    case SET_SINGLE_PROJECT: {
      const selectedProject = state.projects.filter((elem) => {
        return elem.id === action.payload.id;
      });
      console.log(selectedProject[0]);
      return {
        ...state,
        singleProject: selectedProject[0],
      };
    }
    case ADD_TASK: {
      console.log("hit case");
      const updatedTodos = state.projects.map((elem) => {
        if (elem.id === action.payload.id) {
          return elem.tasks.push(action.payload.newTask);
        } else {
          return elem;
        }
      });

      return {
        ...state,
        todos: updatedTodos,
      };
    }
    case DELETE_PROJECT: {
      console.log(action.payload.id);
      const updatedProjects = state.projects.filter((elem) => {
        if (elem.id !== action.payload.id) {
          return elem;
        }
      });
      console.log(updatedProjects);
      return {
        ...state,
        singleProject: null,
        projects: updatedProjects,
      };
    }
    case DELETE_TASK: {
      const updatedProjects = state.projects.map((elem) => {
        if (elem.id === action.payload.projectId) {
          const updatedTasks = elem.tasks.filter((elem) => {
            return elem.id !== action.payload.id;
          });
          elem.tasks = updatedTasks;
          return elem;
        } else {
          return elem;
        }
      });
      return {
        ...state,
        projects: updatedProjects,
      };
    }
    case SHOW_NEW_PROJECT_FORM: {
      return {
        ...state,
        singleProject: null,
      };
    }
  }
};
