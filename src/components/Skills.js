import React from "react";
import FrontendSkills from "./FrontendSkills";
import BackendSkills from "./BackendSkills";
import Skill from "./Skill";

const Skills = () => {
    return (
        <div className="w-[80%] mx-auto mb-20" id="skills">
            <h1 className='title text-4xl text-center text-gray-300 my-10'>
                My Expertise
            </h1>
            <div className="flex flex-col lg:flex-row mb-8 gap-8 justify-between">
                <div className="flex-1">
                    <FrontendSkills />
                </div>
                <div className="flex-1">
                    <BackendSkills />
                </div>
            </div>
            <div>
                <Skill />
            </div>
        </div>
    )
}

export default Skills;

