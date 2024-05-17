export const initialState = {
  projects: [],
  singleProject: null,
};

export const projectReducer = (state, action) => {
  console.log("before switch");
  switch (action.type) {
    case "addProject": {
      return {
        ...state,
        projects: [...state.projects, action.payload.newProject],
      };
    }
    case "setSingleProject": {
      const selectedProject = state.projects.filter((elem) => {
        return elem.id === action.payload.id;
      });
      console.log(selectedProject[0]);
      return {
        ...state,
        singleProject: selectedProject[0],
      };
    }
    case "addTask": {
      console.log("hit case");
      const updatedTodos = state.projects.map((elem) => {
        if (elem.id === action.payload.id) {
          return elem.tasks.push(action.payload.title);
        } else {
          return elem;
        }
      });
      console.log(updatedTodos);
      return {
        ...state,
        todos: updatedTodos,
      };
    }
  }
};
