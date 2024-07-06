import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Gup-Sup"
              description=" 
              A chat application built using the MERN stack and Socket.io offers real-time communication, robust user authentication, emoji support, message notifications, user status indicators, and a clean, responsive interface for a seamless and engaging user experience. "
              ghLink="https://github.com/addydist/gup-shup"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="NestAway"
              description=" A Web3.0 real estate platform built with Hardhat, Ethers.js, and React.js, facilitates seamless rental transactions between owners, tenants, and brokers, providing a secure and efficient user experience."
              ghLink="https://github.com/addydist/NestAway"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Blockchain Cardgame"
              description="A Web3.0 card game utilizing Avalanche and MetaMask for secure blockchain-stored financial transactions features an exceptionally attractive UI, providing an engaging and transparent gaming experience."
              ghLink="https://github.com/addydist/BlockchainCardGame"             
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
