import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";

const profileImage = "/KISHORE.jpg"; // Correct way to use public images in Vite

const About = () => {
  return (
    <section className="about-section container-fluid">
      {/* Floating Particles for Animation */}
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>

      <div className="row align-items-center justify-content-center">
        
        {/* Title Centered */}
        <motion.h2
          className="section-title text-center w-100"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          ABOUT ME
          <div className="title-underline"></div>
        </motion.h2>

        {/* Left Side - Profile Image */}
        <div className="col-lg-5 col-md-6 text-center">
          <motion.img
            src={profileImage} // Correct usage
            alt="Profile"
            className="profile-img img-fluid" 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>

        {/* Right Side - About Text */}
        <div className="col-lg-6 col-md-6 text-center text-md-start">
          <motion.p
            className="about-text"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Hello! I’m <strong className="highlight-name">Kishore</strong>, a passionate 
            <strong className="highlight-tech"> Full-Stack Developer</strong> skilled in 
            <span className="highlight-tech"> React.js</span>, <span className="highlight-tech"> Java</span>, 
            <span className="highlight-tech"> Spring Boot</span>, and <span className="highlight-tech"> MySQL</span>. 
            <br /><br />

            🚀 <strong>Tech Stack:</strong> 
            <span className="highlight-tech"> React.js</span> | 
            <span className="highlight-tech"> Java</span> | 
            <span className="highlight-tech"> Spring Boot</span> | 
            <span className="highlight-tech"> MySQL</span> | 
            <span className="highlight-tech"> REST APIs</span> 
            <br />

            🎯 <strong>Projects:</strong> 
            <ul className="projects-list">
              <li><span className="highlight-project">Online Food Ordering Application</span> (Full Stack: <span className="highlight-tech">React.js</span> + <span className="highlight-tech">Spring Boot</span> + <span className="highlight-tech">SQL</span>)</li>
              <li><span className="highlight-project">Student Form Application</span> (Backend: <span className="highlight-tech">Spring Boot</span> + <span className="highlight-tech">MySQL</span>)</li>
              <li><span className="highlight-project">To-Do Application</span> (Frontend: <span className="highlight-tech">React.js</span>)</li>
            </ul>

            🎓 <strong>Education:</strong> 
            <span className="highlight-education"> Thiru A. Govindasamy Government Arts College</span>
            <br />

            🏢 <strong>Institute:</strong> <span className="highlight-internship">Massmind, T. Nagar, Chennai</span> 
            <br />

            🔥 <strong>Passion:</strong> 
            <span className="highlight-passion"> Coding</span>, 
            <span className="highlight-passion"> Problem-Solving</span>, 
            <span className="highlight-passion"> UI/UX Development</span>
            <br /><br />

            Let’s collaborate and build something amazing together! 🚀
          </motion.p>

          {/* Contact Button */}
          <motion.div
            className="btn-container"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link to="/contact" className="btn">
              Contact Me
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
