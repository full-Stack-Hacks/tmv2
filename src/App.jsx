import React from "react";
import DashBoard from "./components/DashBoard";
import Projects from "./components/Projects";
import { ProjectProvider } from "./context/ProjectContext";

function App() {
  return (
    <ProjectProvider>
      <div className="spaceEvenly outterContainer">
        <Projects />
        <DashBoard />
      </div>
    </ProjectProvider>
  );
}

export default App;
