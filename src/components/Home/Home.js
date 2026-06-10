import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import TerminalWindow from "../Terminal/TerminalWindow";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="justify-content-center">
            <Col md={10} lg={8}>
              <TerminalWindow
                title="visitor@aditya-pal:~"
                className="hero-terminal"
              >
                <p className="terminal-line">
                  <span className="terminal-prompt">$</span> whoami
                </p>
                <h1 className="hero-name">
                  Aditya Pal{" "}
                  <span className="wave" role="img" aria-label="wave">
                    👋
                  </span>
                </h1>
                <p className="terminal-line">
                  <span className="terminal-prompt">$</span> cat role.txt
                </p>
                <div className="hero-role">
                  <Type />
                </div>
                <p className="terminal-line" style={{ marginTop: "1.4em" }}>
                  <span className="terminal-prompt">$</span>{" "}
                  <span className="terminal-cursor"></span>
                </p>
              </TerminalWindow>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
