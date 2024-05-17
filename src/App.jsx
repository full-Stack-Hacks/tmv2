import React from "react";
import ProjectInput from "./components/ProjectInput";
import Projects from "./components/Projects";
import { ProjectProvider } from "./context/ProjectContext";

function App() {
  return (
    <ProjectProvider>
      <div className="evenSpacedFlexContainer outterContainer">
        <Projects />
        <ProjectInput />
      </div>
    </ProjectProvider>
  );
}

export default App;
