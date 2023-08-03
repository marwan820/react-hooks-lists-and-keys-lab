import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
// for each object in the array render one ProjectIem comp
// with the correct props. use id for the key prop
//<div >key={user}</div>



const project = projects.map((item) =>{
  return (

    
    

   <ProjectItem key={item.id} name = {item.name} about = {item.about} technologies= {item.technologies}/>
  )})


  


  return (

    <div id="projects">
      <h2>My Projects</h2>
      {project} 
    </div>
  )};


export default ProjectList;
