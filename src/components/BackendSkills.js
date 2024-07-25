import axios from "axios";
import React, { useEffect, useState } from "react";
import BackendSkill from "./BackendSkill";
import './Skills.css';

const BackendSkills = () => {
    const [backendSkills, setBackendSkills] = useState([]);

    useEffect(() => {
        axios.get('https://portfolio-server-ten-eta.vercel.app/api/v1/skills/backend')
            .then(response => {
                setBackendSkills(response.data.data);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }, []);

    return(
        <div className="bg-accent card-body text-gray-300">
            <h2 className="card-title mx-auto skills-card">Back-End</h2>
            <div className="skills-section">
                {
                    backendSkills?.map((backendSkill) => <BackendSkill key={backendSkill._id} backendSkill={backendSkill}/>)
                }
            </div>
        </div>
    )
}

export default BackendSkills;