import React from "react";
import "./Portfolio.css";
import profile from "./images/profile.jpg";

const Portfolio = () => {
  return (
    <>
      <header>
        <nav>
          <h2 className="logo">John Doe</h2>
          <ul className="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#">Experience</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="profile-container">
          <div className="profile-child profile-info">
            <img className="profile-image" src={profile} alt="profile" />
          </div>
          <div className="profile-child profile-title">
            <h3>Hello I'am</h3>
            <h1>John Doe</h1>
            <h2>Frontend Developer</h2>
          </div>
        </div>
      </header>
      <main>
        <section id="about" className="about">
          <div className="about-container">
            <h2 className="about-title">About Me</h2>
            <div className="about-content">
              <div className="about-child">
                <div className="about-card">
                  <h3>Education</h3>
                  <p>
                    B.A. in Accounting candidate | Diploma expected 2019
                    Prominent Coursework: Intro to Risk Management, Actuary
                    Sciences Honors: Member, Phi Mu Epsilon Johnson Academic
                    Achievement Scholarship
                  </p>
                </div>
              </div>
              <div className="about-child">
                <div className="about-card">
                  <h3>Experience</h3>
                  <p>
                    Motivated, proactive, and hands-on developer with 5+ years'
                    experience developing and managing information systems for
                    software development and cloud-based companies.
                  </p>
                </div>
              </div>
            </div>
            <p className="about-paragraph">
              Detail-oriented, analytical, and self-driven programmer with
              extensive experience building user-facing applications. Efficient
              and knowledgeable coder with skills in HTML, CSS, PHP, and
              JavaScript programming languages. Coordinated and collaborative
              team player with attention to detail, graphic design skills, and
              ability to contribute to code base improvement initiatives and UX
              improvement projects.
            </p>
          </div>
        </section>
      </main>
      <footer>
        <div className="footer-container">
          <ul className="footer-links">
            <li>
              <a href="#">Instgram</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
            <li>
              <a href="#">Github</a>
            </li>
          </ul>

          <p className="footer-paragraph">@2024 Copyright</p>
        </div>
      </footer>
    </>
  );
};

export default Portfolio;
