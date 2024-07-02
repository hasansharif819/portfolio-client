import React from "react";
import FrontendSkills from "./FrontendSkills";
import BackendSkills from "./BackendSkills";

const Skills = () => {
    return(
        <div className="flex">
               <FrontendSkills />
               <BackendSkills />
        </div>
    )
}

export default Skills;