// src/components/Header.js
import React from "react";
import "../styles/Header.css"; // Archivo CSS para estilos específicos del encabezado
import foto from "../img/foto.jpg"; // Importa la foto desde la carpeta img

const Header = () => {
  return (
    <div className="header">
      <img src={foto} alt="Foto de perfil" className="profile-photo" />
      <div className="profile-text">
        <h1>Nicolas Gutierrez Cristancho</h1>
        <p>
          <span className="robot-text">No soy un robot</span>, solo soy un
          desarrollador <span className="frontend-text">Front-End</span>{" "}
          apasionado por la programación.
        </p>
      </div>
    </div>
  );
};

export default Header;
