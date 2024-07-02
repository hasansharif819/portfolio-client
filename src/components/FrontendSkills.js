import axios from "axios";
import React, { useEffect, useState } from "react";
import FrontendSkill from "./FrontendSkill";

const FrontendSkills = () => {
    const [frontendSkills, setFrontendSkills] = useState([]);

    useEffect(() => {
        axios.get('https://portfolio-server-ten-eta.vercel.app/api/v1/skills/frontend')
            .then(response => {
                setFrontendSkills(response.data.data);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }, []);

    return(
        <div className="card-body text-gray-300">
            <h2 className="card-title mx-auto mb-3">Front-End / Client Side</h2>
            <div className="skills-section">
                {
                    frontendSkills?.map((frontendSkill) => <FrontendSkill key={frontendSkill._id} frontendSkill={frontendSkill}/>)
                }
            </div>
        </div>
    )
}

export default FrontendSkills;