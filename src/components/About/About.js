import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import Github from "./Github";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={9} lg={8} style={{ paddingTop: "30px", paddingBottom: "30px" }}>
            <h1 className="section-heading">
              <span className="terminal-prompt">$</span> cat{" "}
              <span className="purple">about.json</span>
            </h1>
            <Aboutcard />
          </Col>
        </Row>

        <h1 className="section-heading">
          <span className="terminal-prompt">$</span> ls{" "}
          <span className="purple">./skills</span>
        </h1>

        <Techstack />

        <h1 className="section-heading">
          <span className="terminal-prompt">$</span> ls{" "}
          <span className="purple">./tools</span>
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
