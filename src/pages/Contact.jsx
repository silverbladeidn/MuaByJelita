import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <Container className="py-5 mt-5">
      <h2 className="text-center" style={{ fontFamily: "'Great Vibes', cursive" }}>Contact Us</h2>
      <p className="text-center fst-italic">Reach Out, We'd Love To Hear From You</p>

      <Row className="mt-4 border border-dark">
        <Col md={4} className="p-3 border border-end border-bottom border-dark">
          <h5 className="fw-bold text-center">LOCATION</h5>
          <p className="text-center">
            Cibubur
          </p>
        </Col>
        <Col md={4} className="p-3 border border-end border-bottom border-dark">
          <h5 className="fw-bold text-center">WHATSAPP</h5>
          <p className="text-center">
            <a href="https://wa.me/6281297693634" target="_blank" rel="noopener noreferrer" className="text-dark text-decoration-none">+62 812-9769-3634</a>
          </p>
        </Col>
        <Col md={4} className="p-3 border border-end border-bottom border-dark">
          <h5 className="fw-bold text-center">FOLLOW</h5>
          <div className="d-flex gap-3 justify-content-center">
            <a href="https://www.instagram.com/makeupby.jelita" target="_blank" rel="noopener noreferrer" className="text-dark">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://www.tiktok.com/@jellybeansy_" target="_blank" rel="noopener noreferrer" className="text-dark">
              <FontAwesomeIcon icon={faTiktok} size="2x" />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
