// src/HomePage.tsx

import React, { useContext, useEffect, useState } from "react";
import "./HomePage.css";
import { Link, Element, animateScroll as scroll } from "react-scroll";
import { ThemeContext } from "./themeContext";
import ReactGA from "react-ga";

const HomePage: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [photos, setPhotos] = useState<string[]>([]);

  useEffect(() => {
    ReactGA.initialize("YG-9F649HZLZH");
    ReactGA.pageview(window.location.pathname + window.location.search);

    // You would fetch the images from your `public/photos` folder here
    // This is a placeholder for the actual image loading logic
    const numberOfPhotos = 23;
    const loadedPhotos = [];
    for (let i = 1; i <= numberOfPhotos; i++) {
      loadedPhotos.push(`/Photos/photo${i}.jpg`); // Path should be relative to the public directory
    }
    setPhotos(loadedPhotos);
  }, []);
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
        <Link
          activeClass="active"
          to="section1"
          spy={true}
          smooth={true}
          offset={70}
          duration={500}
        >
          <button
            className="interactive-button"
            style={{
              backgroundColor: theme.button,
            }}
          >
            Home
          </button>
        </Link>
        <Link
          activeClass="active"
          to="section2"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <button
            className="interactive-button"
            style={{ backgroundColor: theme.button }}
          >
            Resume
          </button>
        </Link>
        <Link
          activeClass="active"
          to="section3"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <button
            className="interactive-button"
            style={{ backgroundColor: theme.button }}
          >
            Projects
          </button>
        </Link>
        <Link
          activeClass="active"
          to="section4"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <button
            className="interactive-button"
            style={{ backgroundColor: theme.button }}
          >
            Photography
          </button>
        </Link>
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
          <div
            className="about-section"
            style={{ backgroundColor: theme.about }}
          >
            <h1>About Me</h1>
            <div className="divider"></div>
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
        <hr />

        <div className="projects-container">
          <div className="projects-section">
            <div className="project-box">
              <h2>In Progress</h2>
              <div className="divider"></div>
              {/* Mobile Task Application */}
              <h3>
                Mobile Task Application |
                github.com/shivamratnani/Flutter-Task-App
              </h3>
              <li>
                Specializes in cross-platform and native iOS app development,
                utilizing Flutter and SwiftUI to deliver a highly responsive
                task management application that adheres to Apple’s Human
                Interface Guidelines.
              </li>
              <li>
                Enhances user experience by implementing core iOS design
                elements, animations, and integrating features like widgets and
                Siri shortcuts for optimal app performance on iOS devices.
              </li>
              <li>
                Integrates advanced functionalities such as real-time
                notifications and iCloud syncing, ensuring seamless task
                management and device synchronization for users.
              </li>

              {/* Amazon Web Scraper */}
              <h3>
                Amazon Web Scraper github.com/shivamratnani/Amazon-Web-Scraper
              </h3>
              <li>
                Engineered a Python scraper to collect Amazon product data,
                utilizing BeautifulSoup, Selenium, and requests for web parsing,
                browser automation, and HTTP interactions.
              </li>
              <li>
                Designed data storage solutions using CSV format for the
                efficient organization and retrieval of product names, prices,
                ratings, reviews, and URLs.
              </li>
              <li>
                Deployed dynamic browser driver management and robust error
                handling, ensuring seamless functionality and data accuracy.
              </li>
              <li>
                Packaged the application into an executable for ease of use,
                with documentation highlighting maintenance and update
                requirements.
              </li>

              <h2>Completed</h2>
              <div className="divider"></div>
              {/* Website */}
              <h3>Website github.com/shivamratnani/shivamratnani.github.io</h3>
              <li>Created a website using HTML and CSS Styling</li>
              <li>
                Improvised my website using React.js and Material UI elements
                allowing it to contain a dark mode feature, reactive buttons,
                and mobile device compatibility
              </li>
              <li>
                Uses Github Actions to host React app on shivamratnani.github.io
                and a server through AWS to host a personal photography website
              </li>
              {/* Connect 4 */}
              <h3>Connect 4 Game https://github.com/shivamratnani/Connect-4</h3>
              <li>
                Developed a 2 player game of Connect 4 containing multiple
                difficulty levels with a graphical user interface, demonstrating
              </li>
            </div>
          </div>
        </div>
      </Element>

      <Element
        name="sectionCertifications"
        className="element"
        style={{ backgroundColor: theme.sectionProjects }}
      >
        <h1>Certifications In Progress</h1>
        <div className="divider"></div>
        <div className="certification-box">
          <h3>AWS Certified Solutions Architect - Associate (SAA-CO3)</h3>
          <h3>Microsoft Azure AI Engineer</h3>
        </div>
      </Element>

      <Element
        name="section2"
        className="element"
        style={{ backgroundColor: theme.sectionResume }}
      >
        <h1>Resume</h1>
        <hr />
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
        <hr />
        <h3>Click and hold to enlarge an image!</h3>
        <div className="photo-grid">
          {photos.map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt={`Photo-${index}`}
            />
          ))}
        </div>
        <a
          className="interactive-button-2"
          href="https://www.icloud.com/sharedalbum/#B0ZJtdOXm0sDbc6"
          target="_blank"
          rel="noopener noreferrer"
          style={{ backgroundColor: theme.button }}
        >
          Visit Photography Website
        </a>
      </Element>
    </div>
  );
};

export default HomePage;
