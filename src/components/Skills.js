import React from "react";
import "./skill.css";
import html from "../assets/img/html1.png";
import css from "../assets/img/css.png";
import js from "../assets/img/js.png";
import node from "../assets/img/nodeJs.jpg";
import express from "../assets/img/expressJS.png";
import MongoDB from "../assets/img/mongodb.png";
import npm from "../assets/img/npm.png";
import github from "../assets/img/github.png";
import vscode from "../assets/img/vscode.png";

export const Skills = () => {
  return (
    <section id="skills">
      <div className="heading">
        <h2>Skills</h2>
        <span>Tech Stack & Tools</span>
      </div>

      <div className="skills-content">
        <div className="skills-card">
          <img className="skills-card-img" src={html} alt="HTML" />
          <h4 className="skills-card-name">HTML</h4>
        </div>

        <div className="skills-card">
          <img className="skills-card-img" src={css} alt="CSS" />
          <h4 className="skills-card-name">CSS</h4>
        </div>

        <div className="skills-card">
          <img className="skills-card-img" src={js} alt="JavaScript" />
          <h4 className="skills-card-name">JavaScript</h4>
        </div>

        <div className="skills-card">
          <img className="skills-card-img" src={MongoDB} alt="MongoDB" />
          <h4 className="skills-card-name">MongoDB</h4>
        </div>

        <div className="skills-card">
          <img className="skills-card-img" src={express} alt="Express.js" />
          <h4 className="skills-card-name">Express.js</h4>
        </div>

        <div className="skills-card">
          <img className="skills-card-img" src={npm} alt="npm" />
          <h4 className="skills-card-name">npm</h4>
        </div>

        <div className="skills-card">
          <img className="skills-card-img" src={node} alt="Node.js" />
          <h4 className="skills-card-name">Node.js</h4>
        </div>

        <div className="skills-card">
          <img className="skills-card-img" src={github} alt="GitHub" />
          <h4 className="skills-card-name">GitHub</h4>
        </div>

        <div className="skills-card">
          <img className="skills-card-img" src={vscode} alt="VS Code" />
          <h4 className="skills-card-name">VS Code</h4>
        </div>

        <div className="skills-card">
          <img
            className="skills-card-img"
            src="https://tse1.mm.bing.net/th?id=OIP.JCGGgssMIuUrZFU3I6jv0AHaHC&pid=Api&P=0&h=180"
            alt="React"
          />
          <h4 className="skills-card-name">React</h4>
        </div>
      </div>
    </section>
  );
};
