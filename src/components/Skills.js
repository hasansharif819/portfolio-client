import React from "react";
import FrontendSkills from "./FrontendSkills";
import BackendSkills from "./BackendSkills";
import Skill from "./Skill";

const Skills = () => {
    return(
        <div className="w-4/5 mx-auto mb-20" id="skills">
            <h1 className='text-4xl text-center text-gray-300 my-10'>
                My Skills
            </h1>
            <div className="flex mb-8 gap-8 justify-between">
               <FrontendSkills />
               <BackendSkills />
            </div>
            <div>
                <Skill />
            </div>
        </div>
    )
}

export default Skills;

