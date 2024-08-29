// src/App.js
import React from "react";

import Header from "./components/Header";
import Profile from "./components/Profile";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="profile">
          <Profile />
        </div>
        <div className="skills">
          <Skills />
        </div>
        <div className="experience">
          <Experience />
        </div>
        <div className="projects">
          <Projects />
        </div>
      </div>
    </div>
  );
}

export default App;
