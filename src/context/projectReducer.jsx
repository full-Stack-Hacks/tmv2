import {
  ADD_PROJECT,
  SET_SINGLE_PROJECT,
  ADD_TASK,
  DELETE_PROJECT,
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
      const updatedProjects = state.projects.filter((elem) => {
        if (elem.id == action.payload.id) {
          return elem;
        }
      });
      return {
        ...state,
        singleProject: null,
        projects: updatedProjects,
      };
    }
  }
};
