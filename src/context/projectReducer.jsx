import {
  ADD_PROJECT,
  SET_SINGLE_PROJECT,
  ADD_TASK,
  DELETE_PROJECT,
  DELETE_TASK,
} from "./types";

export const initialState = {
  projects: [
    {
      title: "Test Project",
      startDate: "2024-05-18",
      endDate: "2024-05-25",
      id: "07756144-e1cd-4743-ab10-16654d52d644",
      blurb:
        "Just trying to make sure I don't have to re-write this every time.",
      tasks: [{ body: "This is the first task", id: "1234" }],
    },
  ],
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
  }
};
