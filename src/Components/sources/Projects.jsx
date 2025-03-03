import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Projects.css";

const projects = [
  {
    title: "Online Food Ordering Application",
    description: "A full-stack online food ordering system built with React.js for the frontend, Spring Boot for the backend, and MySQL for the database.",
    github: "https://github.com/Kishore1245/Online-Food-Ordering-Application.git",
  },
  {
    title: "Student Form Application",
    description: "A backend application for managing student information, built using Spring Boot and MySQL. It allows you to add, update, and delete student records.",
    github: "https://github.com/Kishore1245/Student-Form.git",
  },
  {
    title: "To-Do Application",
    description: "A simple task management app built using React.js and TypeScript. It allows users to add, mark as complete, and delete tasks.",
    github: "https://github.com/Kishore1245/ToDo-App.git",
  },
];

const Projects = () => {
  return (
    <motion.section
      className="projects-section container py-5"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="section-title text-center mb-5">My Projects</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div key={index} className="col-md-6 col-lg-4 mb-5">
            <motion.div
              className="project-card custom-card"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <div className="project-card-body">
                <motion.h5
                  className="project-title"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  {project.title}
                </motion.h5>
                <motion.p
                  className="project-description"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  {project.description}
                </motion.p>
                <div className="btn-container">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-github"
                  >
                    <FaGithub /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
