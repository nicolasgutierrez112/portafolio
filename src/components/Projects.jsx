import React from "react";
import "../styles/Projects.css";
import Slider from "react-slick";
import { FaReact, FaDatabase, FaNodeJs } from "react-icons/fa";
import projectImage1 from "../img/projectImage.png";
import projectImage2 from "../img/projectImage2.png";
import projectImage3 from "../img/projectImage3.png";
import projectImage4 from "../img/projectImage4.png";

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <ul style={{ margin: 0, padding: 0, display: "inline-block" }}>
          {dots}
        </ul>
      </div>
    ),
  };

  return (
    <div className="card">
      <h2 className="project-title">Proyectos</h2>
      <div className="project-item">
        <h3 className="project-name">Página Web de Solicitudes de Permisos</h3>
        <div className="project-content">
          <div className="carousel-container">
            <Slider {...settings}>
              <div>
                <img
                  src={projectImage1}
                  alt="Proyecto Pagina Web de Solicitudes de Permisos 1"
                  className="project-image"
                />
              </div>
              <div>
                <img
                  src={projectImage2}
                  alt="Proyecto Pagina Web de Solicitudes de Permisos 2"
                  className="project-image"
                />
              </div>
              <div>
                <img
                  src={projectImage3}
                  alt="Proyecto Pagina Web de Solicitudes de Permisos 3"
                  className="project-image"
                />
              </div>
              <div>
                <img
                  src={projectImage4}
                  alt="Proyecto Pagina Web de Solicitudes de Permisos 4"
                  className="project-image"
                />
              </div>
            </Slider>
          </div>
          <p className="project-description">
            Página web desarrollada para los empleados de la Alcaldía de
            Villavicencio para solicitudes de permisos.
          </p>
        </div>
        <div className="project-details">
          <div className="project-technologies">
            <h4>Tecnologías Utilizadas:</h4>
            <ul>
              <li>
                <FaReact className="tech-icon" /> ReactJS
              </li>
              <li>
                <FaDatabase className="tech-icon" /> MongoDB
              </li>
              <li>
                <FaNodeJs className="tech-icon" /> NodeJS
              </li>
            </ul>
          </div>
          <div className="project-functions">
            <h4>Funciones de la Página:</h4>
            <ol>
              <li>Registro por correo</li>
              <li>Recuperación de contraseña por correo.</li>
              <li>Roles de usuarios (admin, usuario normal).</li>
              <li>Subida de archivos en formato PDF.</li>
              <li>Administración de solicitudes (aceptar o rechazar)</li>
              <li>Mensajes por correo</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
