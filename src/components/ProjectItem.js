import React from "react";
 

function ProjectItem({name, about, technologies }) {


  const project = technologies.map((item)=> {
  return <span key = {Math.floor(Math.random()*100)}>{item}</span>
  })

  return (


    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
      {project}
        {/* render a <span> for each technology in the technologies array */}
        </div>
      </div>
  );
}

export default ProjectItem;
