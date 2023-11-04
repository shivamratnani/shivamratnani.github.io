// src/HomePage.tsx

import React, { useContext } from "react";
import "./HomePage.css";
import { Link, Element, animateScroll as scroll } from "react-scroll";
import { ThemeContext } from "./themeContext";

const HomePage: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="home-page">
      <button
        className="interactive-button to-top-button"
        onClick={scrollToTop}
        style={{ backgroundColor: theme.upButton }}
      >
        ▲
      </button>

      <div className="navbar">
        <button
          className="interactive-button"
          style={{ backgroundColor: theme.button }}
        >
          <Link
            activeClass="active"
            to="section1"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Home
          </Link>
        </button>
        <button
          className="interactive-button"
          style={{ backgroundColor: theme.button }}
        >
          <Link
            activeClass="active"
            to="section2"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Resume
          </Link>
        </button>
        <button
          className="interactive-button"
          style={{ backgroundColor: theme.button }}
        >
          <Link
            activeClass="active"
            to="section3"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Projects
          </Link>
        </button>
        <button
          className="interactive-button"
          style={{ backgroundColor: theme.button }}
        >
          <Link
            activeClass="active"
            to="section4"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Photography
          </Link>
        </button>
        <button
          onClick={toggleTheme}
          className="theme-toggle"
          style={{ backgroundColor: theme.toggle }}
        >
          🌗
        </button>
      </div>

      {/*Home Section*/}
      <Element
        name="section1"
        className="element"
        style={{ backgroundColor: theme.sectionHome }}
      >
        <div className="about-container">
          <div className="profile-container">
            <img src="profile.jpg" className="profile-image" alt="Profile" />
          </div>
          <div className="about-section">
            <h1>About Me</h1>
            <hr />
            <p style={{ color: theme.p }}>
              My name is <b>Shivam Ratnani</b>, and I am a dedicated software
              engineer with a passion for solving complex problems and building
              innovative solutions. With a strong foundation in many languages
              such as Java, C#, and React.js(The language this website is
              written in), I bring a unique approach to developing high-quality,
              efficient, and reliable software. Throughout my career, I've had
              the privilege to create a variety of projects ranging from this
              website to an Amazon Web Scraper, each of which has reinforced my
              commitment to continual learning, attention to detail, and
              result-driven execution. This portfolio is a curated
              representation of my technical skillset, showcasing projects that
              I'm particularly proud of. Each one has been a journey of growth,
              pushing the boundaries of my knowledge and skills. Thank you for
              taking the time to visit! If you have any questions or would like
              to connect, please feel free to reach out to me on LinkedIn.
            </p>

            {/*LinkedIn button*/}
            <a
              className="interactive-button-2"
              href="https://www.linkedin.com/in/shivamratnani"
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: theme.button }}
            >
              LinkedIn
            </a>

            {/*Github button*/}
            <a
              className="interactive-button-2"
              href="https://github.com/shivamratnani"
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: theme.button }}
            >
              Github
            </a>

            {/*Resume button*/}
            <a
              className="interactive-button-2"
              href="Shivam Ratnani - Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: theme.button }}
            >
              Download Resume
            </a>
          </div>
        </div>
      </Element>

      <Element
        name="section3"
        className="element"
        style={{ backgroundColor: theme.sectionProjects }}
      >
        <h1>Projects</h1>

        <div className="projects-container">
          <div className="projects-section">
            <h2>In Progress</h2>
            <div className="projects-grid">
              {Array(4)
                .fill(0)
                .map((_, index) => (
                  <div key={index} className="project-box">
                    <h3>Project {index + 1}</h3>
                    <p>Description of the in-progress project goes here.</p>
                    {/* Other project details */}
                  </div>
                ))}
            </div>
          </div>

          <div className="projects-section">
            <h2>Completed</h2>
            <div className="projects-grid">
              {Array(4)
                .fill(0)
                .map((_, index) => (
                  <div key={index} className="project-box">
                    <h3>Project {index + 5}</h3>
                    <p>Description of the completed project goes here.</p>
                    {/* Other project details */}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </Element>

      <Element
        name="sectionCertifications"
        className="element"
        style={{ backgroundColor: theme.sectionProjects }}
      >
        <h1>Certifications</h1>
        <div className="certifications-grid">
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <div key={index} className="certification-box">
                <h3>Certification {index + 1}</h3>
                <p>Description of the certification goes here.</p>
                {/* Other certification details */}
              </div>
            ))}
        </div>
      </Element>

      <Element
        name="section2"
        className="element"
        style={{ backgroundColor: theme.sectionResume }}
      >
        <h1>Resume</h1>
        <iframe
          title="Resume"
          src="Shivam Ratnani - Resume.pdf"
          style={{ width: "100%", height: 1125, border: "none" }}
        ></iframe>
        <a
          href="Shivam Ratnani - Resume.pdf"
          download
          className="interactive-button"
          style={{ backgroundColor: theme.button }}
        >
          Download Resume
        </a>
      </Element>

      <Element
        name="section4"
        className="element"
        style={{ backgroundColor: theme.sectionPhotography }}
      >
        <h1>Photography</h1>
        <p>Your inline website view goes here</p>
        <a
          href="link-to-your-photography-website"
          className="interactive-button"
          style={{ backgroundColor: theme.button }}
        >
          Visit Photography Website
        </a>
      </Element>
    </div>
  );
};

export default HomePage;
