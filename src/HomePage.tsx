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
        <h1>Welcome to My Website!</h1>
        <img
          src="your-image-url-here"
          alt="Profile"
          className="profile-image"
        />
        <h2>About Me</h2>
        <hr />
        <p style={{ color: theme.p}}>
          My name is <b>Shivam Ratnani</b>, and I am a dedicated software
          engineer with a passion for solving complex problems and building
          innovative solutions. With a strong foundation in many languages such
          as Java, C#, and React.js(The language this website is written in), I
          bring a unique approach to developing high-quality, efficient, and
          reliable software. Throughout my career, I've had the privilege to
          create a variety of projects ranging from this website to an Amazon
          Web Scraper, each of which has reinforced my commitment to continual
          learning, attention to detail, and result-driven execution. This
          portfolio is a curated representation of my technical skillset,
          showcasing projects that I'm particularly proud of. Each one has been
          a journey of growth, pushing the boundaries of my knowledge and
          skills. Thank you for taking the time to visit! If you have any
          questions or would like to connect, please feel free to reach out to
          me on LinkedIn.
        </p>

        {/*LinkedIn button*/}
        <button
          className="interactive-button"
          style={{ backgroundColor: theme.button }}
        >
          <Link to="https://www.linkedin.com/in/shivam-ratnani-9b0b3a1a0/">
            LinkedIn
          </Link>
        </button>

        {/*Github button*/}
        <button
          className="interactive-button"
          style={{ backgroundColor: theme.button }}
        >
          <Link to="https://github.com/shivamratnani">Github</Link>
        </button>
      </Element>

      <Element
        name="section2"
        className="element"
        style={{ backgroundColor: theme.sectionResume }}
      >
        <h1>Resume</h1>
        <p>Your inline resume goes here</p>
        <iframe> /Users/shivamratnani/my-app/Resume.pdf</iframe>
        <a
          href="/Users/shivamratnani/my-app/Resume.pdf" //FUCKING FIGURE THIS OUT
          download
          className="interactive-button"
          style={{ backgroundColor: theme.button }}
        >
          Download Resume
        </a>
      </Element>

      <Element
        name="section3"
        className="element"
        style={{ backgroundColor: theme.sectionProjects }}
      >
        <h1>Projects</h1>
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <div key={index}>
              <h2>Project {index + 1}</h2>
              <p>Brief overview of the project goes here</p>
              <a
                href="link-to-project"
                className="interactive-button"
                style={{ backgroundColor: theme.button }}
              >
                Project Link
              </a>
            </div>
          ))}
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



//write a date method that outputs the current date in java


export default HomePage;
