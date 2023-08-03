import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
// for each object in the array render one ProjectIem comp
// with the correct props. use id for the key prop
// const project = projects.map((item) = >
//<div >key={user}</div>
  




  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{/* render ProjectItem components here */}</div>
   
    </div>
  );
}

export default ProjectList;
