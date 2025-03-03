import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Resume.css";
import { FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.section 
      className="resume-section container py-5"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="section-title text-center mb-4">My Resume</h2>

      <div className="text-center">
        <motion.p className="resume-text mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          Download my resume to explore my <span className="highlight">educational background</span>, <span className="highlight">technical skills</span>, and <span className="highlight">professional experience</span>.
        </motion.p>

        {/* Corrected the href to public folder */}
        <motion.a
          href="/Kishore_Resume.pdf"
          download="Kishore_Resume.pdf"
          className="btn btn-primary btn-lg resume-btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaDownload /> Download Resume
        </motion.a>
      </div>

      <div className="resume-content mt-5">
        <motion.h3 className="section-heading">Professional Summary</motion.h3>
        <motion.p className="summary-text">
          A passionate <span className="highlight">Full-Stack Developer</span> proficient in <span className="highlight">React.js</span>, <span className="highlight">Spring Boot</span>, and <span className="highlight">MySQL</span>. 
        </motion.p>

        <motion.h3 className="section-heading">Technical Skills</motion.h3>
        <motion.ul className="skills-list">
          <li><span className="category frontend">Frontend:</span> HTML, CSS, JavaScript, React.js, Bootstrap</li>
          <li><span className="category backend">Backend:</span> Java, Spring Boot, Servlet, JSP, Node.js</li>
          <li><span className="category database">Database:</span> MySQL, Database Design</li>
          <li><span className="category tools">Version Control:</span> Git, GitHub</li>
        </motion.ul>

        <motion.h3 className="section-heading">Experience & Education</motion.h3>
        <div className="resume-details">
          <motion.div className="resume-item">
            <h5>Java Full-Stack Developer Internship</h5>
            <p><span className="highlight">Massmind</span>, T. Nagar, Chennai | Hands-on experience with <span className="highlight">full-stack development</span>.</p>
          </motion.div>

          <motion.div className="resume-item">
            <h5>B.Com (General)</h5>
            <p>Thiru A. Govindasamy Government Arts College | Developed <span className="highlight">analytical skills</span> with a focus on <span className="highlight">software development</span>.</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Resume;
