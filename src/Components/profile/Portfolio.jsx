import React from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; 
import "bootstrap/dist/css/bootstrap.min.css";
import "./Portfolio.css"; 

const Portfolio = () => {
  return (
    <motion.div className="portfolio-container">
      {/* Header Section */}
      <header className="header text-center text-white">
        <div className="overlay d-flex flex-column align-items-center justify-content-center">
          <motion.h2
            className="welcome-text mb-3"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Welcome 👋
          </motion.h2>

          <motion.h1
            className="display-3 fw-bold name-text"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            I am Kishore
          </motion.h1>

          <motion.p
            className="text-uppercase lead profession-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Full Stack Developer
          </motion.p>

          {/* Link to About Page */}
          <motion.div className="btn-container" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link to="/about" className="btn btn-light btn-lg mt-3 more-about-btn">
              <FaChevronDown /> More About Me
            </Link>
          </motion.div>

          {/* Social Icons */}
          <div className="social-icons mt-4">
            <a href="https://github.com/Kishore1245" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/kishore_s_2003" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaInstagram />
            </a>
          </div>
        </div>
      </header>
    </motion.div>
  );
};

export default Portfolio;
