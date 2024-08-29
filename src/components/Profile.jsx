// src/components/Profile.js
import React from "react";
import {
  FaUserTie,
  FaPhoneAlt,
  FaEnvelope,
  FaDownload,
  FaClipboard,
} from "react-icons/fa";
import "../styles/Profile.css";

const Profile = () => {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("gutierrezcristanchonicolas@gmail.com");
    alert("¡Correo copiado al portapapeles!");
  };

  return (
    <div className="card profile">
      <h2>Perfil</h2>
      <div className="profile-info">
        <div className="profile-item">
          <FaUserTie className="profile-icon" />
          <p>Ingeniero de Sistemas</p>
        </div>
        <div className="profile-item">
          <FaPhoneAlt className="profile-icon" />
          <p>+57 3142077324</p>
        </div>
        <div className="profile-item">
          <FaEnvelope className="profile-icon" />
          <p>gutierrezcristanchonicolas@gmail.com</p>
          <button onClick={handleCopyEmail} className="copy-button">
            <FaClipboard />
          </button>
        </div>
        <div className="profile-item">
          <FaDownload className="profile-icon" />
          <a
            href="src\pdf\CV-NicolasGutierrezCristancho.pdf"
            className="download-link"
            download
          >
            Descargar CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
