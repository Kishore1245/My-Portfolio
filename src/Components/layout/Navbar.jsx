import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaHome, FaUser, FaCode, FaProjectDiagram, FaFileAlt, FaEnvelope } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`custom-navbar navbar navbar-expand-lg ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <Link to="/" className="navbar-brand custom-brand">
          Kishore
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link custom-link" to="/">
                <FaHome className="icon" /> Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link custom-link" to="/about">
                <FaUser className="icon" /> About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link custom-link" to="/skills">
                <FaCode className="icon" /> Skills
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link custom-link" to="/projects">
                <FaProjectDiagram className="icon" /> Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link custom-link" to="/resume">
                <FaFileAlt className="icon" /> Resume
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link btn custom-btn" to="/contact">
                <FaEnvelope className="icon" /> Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
