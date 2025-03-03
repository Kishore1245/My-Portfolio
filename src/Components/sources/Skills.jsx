import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaDatabase, FaNodeJs, FaLeaf, FaServer, FaClipboardList, FaCogs, FaCode } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Skills.css";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="skill-icon html" /> },
  { name: "CSS", icon: <FaCss3Alt className="skill-icon css" /> },
  { name: "JavaScript", icon: <FaJs className="skill-icon js" /> },
  { name: "React.js", icon: <FaReact className="skill-icon react" /> },
  { name: "Java", icon: <FaJava className="skill-icon java" /> },
  { name: "MySQL", icon: <FaDatabase className="skill-icon mysql" /> },
  { name: "Node.js", icon: <FaNodeJs className="skill-icon node" /> },
  { name: "Spring", icon: <FaLeaf className="skill-icon spring" /> },
  { name: "Spring Boot", icon: <FaServer className="skill-icon springboot" /> },
  { name: "JSP", icon: <FaClipboardList className="skill-icon jsp" /> },
  { name: "Servlet", icon: <FaCogs className="skill-icon servlet" /> },
  { name: "Applet", icon: <FaCode className="skill-icon applet" /> },
];

const Skills = () => {
  return (
    <section className="skills-section container py-5">
      <motion.h2
        className="section-title text-center mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        My Skills
      </motion.h2>
      <div className="row justify-content-center">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="col-md-3 col-sm-6 mb-4 skill-container"
            whileHover={{ scale: 1.1, rotate: 3 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="skill-card">
              <div className="skill-icon-container">
                {skill.icon}
              </div>
              <h5 className="skill-name">{skill.name}</h5>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
