import React from "react";
import './Skills.css';

const BackendSkill = ({backendSkill}) => {
    
    return(
        <div className="skill-card">
      <img src={backendSkill?.img} alt={backendSkill?.name} className="skill-icon" />
      <span className="skill-name">{backendSkill?.name}</span>
    </div>
    )
}

export default BackendSkill;