import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import exalogo from "../../Assets/Projects/exalogo.png";
import nclogo from "../../Assets/Projects/nclogo.png";
import logoxt from "../../Assets/Projects/logoxt.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Works Experiences </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px", display: "flex", flexDirection: "row" }}>
       <Col md={4} className="project-card">
            <ProjectCard
              imgPath={exalogo}
              isBlog={false}
              title="Technology Consultant"
              description="Currently working on Cristal Bridge Project of SNP Group"
              ghLink="https://exa-ag.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nclogo}
              isBlog={false}
              title="SDE Intern"
              description="As a backend developer Intern at Namaste Credit, a leading fintech company providing portals like DOS and CAM to clients, I specialized in Node.js. My primary responsibility was integrating third-party APIs for an insurance project, enhancing the platform's capabilities and user experience. I collaborated with cross-functional teams to ensure seamless integration and functionality, contributing to the development of secure, efficient, and scalable backend services."
              ghLink="https://namastecredit.com/"
            />
          </Col>

        

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={logoxt}
              isBlog={false}
              title="Frontend Developer Intern"
              description="During my internship at Xtreme Technologies, I developed skills in D3 for visualizing ocean data on 3D and 2D models, reverse engineering, working with the Earth NullSchool model, converting ocean map data to TopoJSON, and optimizing path algorithms with marine engineers."
              ghLink="https://xtremetechnologies.in/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
