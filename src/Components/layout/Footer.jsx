import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  let today = new Date();
  return (
    <footer className="footer text-light py-4">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={12} className="text-center">
            <p className="mb-0 fade-in">&copy; {today.getFullYear()} Kishore | All Rights Reserved</p>
            <p className="mb-0 fade-in">
              Built with <span className="heart">♥</span> by Kishore
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
