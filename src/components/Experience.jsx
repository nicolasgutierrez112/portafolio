// src/components/Experience.js
import React from "react";
import "../styles/Experience.css";

const Experience = () => {
  return (
    <div className="card">
      <h2>Experiencia</h2>
      <div className="experience-details">
        <div className="experience-item">
          <h3>Empresa: Alcaldía de Villavicencio</h3>
          <p>
            <strong>Función:</strong> Desarrollador Front-End, Diseñador Gráfico
            y Banck-End
          </p>
          <p>
            <strong>Ciudad:</strong> Villavicencio
          </p>
        </div>
        {/* Puedes agregar más experiencias aquí en el futuro */}
      </div>
    </div>
  );
};

export default Experience;
