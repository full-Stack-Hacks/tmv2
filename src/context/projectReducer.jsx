export const initialState = {
  projects: [],
  singleProject: null,
};

export const projectReducer = (state, action) => {
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
  }
};
