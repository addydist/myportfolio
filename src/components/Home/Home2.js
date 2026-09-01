import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { Link } from "react-router-dom";
import TerminalWindow from "../Terminal/TerminalWindow";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="justify-content-center">
          <Col md={11} lg={10}>
            <TerminalWindow title="aditya@portfolio:~$ cat about.md">
              <Row>
                <Col md={8} className="home-about-description">
                  <h2 className="about-heading">
                    LET ME <span className="purple">INTRODUCE</span> MYSELF
                  </h2>
                  <p className="home-about-body">
                    I've developed a strong passion for building things with
                    code &mdash; from full-stack web apps to AI-powered
                    platforms and browser extensions.
                    <br />
                    <br />
                    I'm fluent in classics like{" "}
                    <i>
                      <b className="purple">
                        C++, JavaScript / TypeScript, Node.js and React
                      </b>
                    </i>
                    .
                    <br />
                    <br />
                    Currently, I work as a{" "}
                    <b className="purple">
                      Technology Consultant @ EXA AG
                    </b>
                    , contributing to the Kyano of SNP
                    Group.
                    <br />
                    <br />
                    My fields of interest include building scalable{" "}
                    <i>
                      <b className="purple">
                        full-stack products with Next.js and NestJS
                      </b>
                    </i>
                    , and exploring{" "}
                    <i>
                      <b className="purple">AI &amp; Automation</b>
                    </i>{" "}
                    &mdash; integrating multi-LLM providers into workflow
                    tools and intelligent applications.
                    <br />
                    <br />
                    Whenever I get the time, I hack on side projects &mdash;
                    most recently{" "}
                    <i>
                      <b className="purple">Nodeflo</b>
                    </i>
                    , a self-hostable workflow automation platform where AI
                    builds the workflow from a plain-English prompt, and{" "}
                    <i>
                      <b className="purple">MonsoonSafe</b>
                    </i>
                    , a GenAI monsoon-preparedness assistant built for
                    PromptWars.
                  </p>
                </Col>
                <Col md={4} className="myAvtar">
                  <Tilt>
                    <img
                      src={myImg}
                      className="img-fluid avatar-img"
                      alt="avatar"
                    />
                  </Tilt>
                </Col>
              </Row>
            </TerminalWindow>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h2 className="about-heading">FIND ME ON</h2>
            <p>
              Feel free to <span className="purple">connect</span> with me
            </p>
            <p style={{ marginTop: "1.2em" }}>
              <Link to="/contact" className="term-link">
                <CgMail /> ./contact
              </Link>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/addydist"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/aditya-pal-85066520b/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/_adi.pal?igsh=MXF5MDlkN3Uxb3Nheg=="
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
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
export default Home2;
