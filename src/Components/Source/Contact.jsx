import React, { useState } from "react";
import { motion } from "framer-motion";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <section className="contact-section py-5">
      <Container>
        <motion.h2
          className="section-title text-center mb-5"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Contact Me
        </motion.h2>

        {showAlert && (
          <Alert variant="success" className="text-center fade-in">
            Message sent successfully!
          </Alert>
        )}

        <Row className="mt-5">
          {/* Contact Info */}
          <Col md={4}>
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="info-item">
                <FaEnvelope className="contact-icon" />
                <span>shreekishorekishore.s@gmail.com</span>
              </div>
              <div className="info-item">
                <FaPhone className="contact-icon" />
                <span>+91 9025811245</span>
              </div>
              <div className="info-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span>Chennai, India</span>
              </div>
            </motion.div>
          </Col>

          {/* Contact Form */}
          <Col md={8}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Form onSubmit={handleSubmit}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <Form.Group className="mb-4">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your name"
                      required
                      className="form-input"
                    />
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      required
                      className="form-input"
                    />
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      placeholder="Your message"
                      required
                      className="form-input"
                    />
                  </Form.Group>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                    <Button variant="primary" type="submit" className="send-btn">
                      Send Message
                    </Button>
                  </motion.div>
                </motion.div>
              </Form>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
