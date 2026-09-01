import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Container>
        <Row className="align-items-center">
          <Col md={8} className="footer-prompt">
            <span className="terminal-prompt">$</span> echo "Built by addydist
             &copy; {year}"
            <span className="terminal-cursor"></span>
          </Col>
          <Col md={4} className="footer-body">
            <ul className="footer-icons">
              <li className="social-icons">
                <a
                  href="https://github.com/addydist"
                  className="icon-colour home-social-icons"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/aditya-pal-85066520b/"
                  className="icon-colour home-social-icons"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/_adi.pal?igsh=MXF5MDlkN3Uxb3Nheg=="
                  className="icon-colour home-social-icons"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Footer;
