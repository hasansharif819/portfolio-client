import React from "react";
import './Skills.css';

const FrontendSkill = ({ frontendSkill }) => {
  return (
    <div className="skill-card">
      <img src={frontendSkill?.img} alt={frontendSkill?.name} className="skill-icon" />
      <span className="skill-name">{frontendSkill?.name}</span>
    </div>
  );
};

export default FrontendSkill;
