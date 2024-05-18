import React from "react";
import ProjectItem from "../components/ProjectItem";
import Proj1 from "../assets/e-market-trove.png";

function Projects() {
    return (
    <div className="projects">
        <h1>My Projects</h1>
        <div className="projectList">
            <ProjectItem name="E-Market-Trove" image={Proj1}/>
            <ProjectItem />

        </div>
    </div> 
 )
}

export default Projects;