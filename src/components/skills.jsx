// src/components/Skills.js
import React from "react";
import { FaJsSquare, FaDatabase, FaGitAlt, FaReact } from "react-icons/fa";
import "../styles/Skills.css";

const skillsData = [
  {
    title: "JavaScript",
    description: "Lenguaje de programación para desarrollo web.",
    icon: <FaJsSquare size={30} />,
  },
  {
    title: "MongoDB",
    description: "Base de datos NoSQL.",
    icon: <FaDatabase size={30} />,
  },
  {
    title: "Git",
    description: "Sistema de control de versiones.",
    icon: <FaGitAlt size={30} />,
  },
  {
    title: "ReactJS",
    description: "Biblioteca para construir interfaces de usuario.",
    icon: <FaReact size={30} />,
  },
];

const Skills = () => {
  return (
    <div className="card">
      <h2>Habilidades</h2>
      <ul className="skills-list">
        {skillsData.map((skill, index) => (
          <li key={index} className="skill-item">
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-info">
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
