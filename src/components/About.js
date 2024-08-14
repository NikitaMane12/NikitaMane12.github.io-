import React from "react";
import nikitaPhoto from "../assets/img/nikita photo.jpeg";
import "./about.css";

const AboutMe = () => {
  return (
    <section className="about section" id="about">
      <div className="heading">
        <h2>About Me</h2>
      </div>

      <div className="about-container">
        <div className="home-img-main">
          <img className="home-img" src={nikitaPhoto} alt="Nikita Mane" />
        </div>
        <div className="about-text" id="user-detail-intro">
          <p>
            Hello stranger! 👋, my name is Nikita Mane and I am a Full Stack
            Developer, passionate about building digital products that improve
            the everyday experience for people.
            <br />
            <br />I am a Quick learner and an aspiring full-stack web developer
            with core knowledge of Full stack technology and working with tech
            stacks like HTML, CSS, Javascript, Node Js, MongoDB, Express, etc.,
            and passionate about developing user-friendly web applications.
            Looking forward to applying and enhancing my skills and knowledge as
            a developer.
          </p>
          <br />

          <div className="information">
            <div className="info-box">
              <i className="bx bxs-user"></i>
              <span>Name</span> -<h3>Nikita Mane</h3>
            </div>

            <div className="info-box">
              <i className="bx bxs-phone"></i>
              <span id="contact-phone">+91 8380806370</span>
            </div>

            <div className="info-box">
              <i className="bx bxs-envelope"></i>
              <span id="contact-email">manenikita2212@gmail.com</span>
            </div>
          </div>

          <li>
            <a
              id="resume-link"
              href="https://drive.google.com/file/d/1YMsbV8rdDV5ybhBnDVxmSju3-em2G_zF/view?usp=sharing"
              download="Nikita"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="resume-button" id="resume-button">
                Resume
              </button>
            </a>
          </li>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;