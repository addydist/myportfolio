import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Widget, PopupButton } from "@typeform/embed-react";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { CgExternal } from "react-icons/cg";
import Particle from "../Particle";
import TerminalWindow from "../Terminal/TerminalWindow";

/**
 * Typeform form id — the part after /to/ in a share link:
 *   https://form.typeform.com/to/<THIS>
 *
 * Set REACT_APP_TYPEFORM_ID in .env.local (see .env.example) so the id is not
 * hard-coded. Until it is set, the page shows setup instructions instead of an
 * embed pointing at a form that does not exist.
 */
const TYPEFORM_ID = (process.env.REACT_APP_TYPEFORM_ID || "").trim();

const SOCIALS = [
  {
    href: "https://github.com/addydist",
    label: "github",
    icon: <AiFillGithub />,
  },
  {
    href: "https://www.linkedin.com/in/aditya-pal-85066520b/",
    label: "linkedin",
    icon: <FaLinkedinIn />,
  },
  {
    href: "https://www.instagram.com/_adi.pal?igsh=MXF5MDlkN3Uxb3Nheg==",
    label: "instagram",
    icon: <AiFillInstagram />,
  },
];

function TypeformSetupNotice() {
  return (
    <div className="typeform-setup">
      <p className="terminal-line">
        <span className="terminal-prompt">$</span> cat .env.local
      </p>
      <p className="terminal-comment">
        # No form id configured yet — the embed is disabled.
      </p>
      <pre className="setup-code">REACT_APP_TYPEFORM_ID=your_form_id</pre>
      <p className="terminal-comment" style={{ marginTop: "1.4em" }}>
        # To wire it up:
      </p>
      <ol className="setup-steps">
        <li>
          Create a form at{" "}
          <a
            href="https://www.typeform.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-link"
          >
            typeform.com
          </a>
          .
        </li>
        <li>
          Open <span className="purple">Share</span> and copy the link —
          <code> https://form.typeform.com/to/</code>
          <span className="purple">abc123XY</span>.
        </li>
        <li>
          Put the last part into <code>.env.local</code> as shown above, then
          restart <code>npm start</code>.
        </li>
      </ol>
    </div>
  );
}

function Contact() {
  return (
    <Container fluid className="contact-section">
      <Particle />
      <Container>
        <Row className="justify-content-center">
          <Col md={11} lg={9}>
            <h1 className="section-heading">
              <span className="terminal-prompt">$</span> ./
              <span className="purple">contact.sh</span>
            </h1>
            <p className="section-subtitle">
              Got a role, a project, or just want to say hi? Drop me a message
              &mdash; it lands straight in my inbox.
            </p>

            <TerminalWindow
              title="aditya@portfolio:~$ ./contact.sh --interactive"
              className="contact-terminal"
            >
              {TYPEFORM_ID ? (
                <>
                  <p className="terminal-line">
                    <span className="terminal-prompt">$</span> Fill in the form
                    below <span className="terminal-comment">
                      # takes under a minute
                    </span>
                  </p>
                  {/* The form paints its own background rather than being made
                      transparent (opacity=0): the question text colour lives in
                      Typeform's own design settings and cannot follow the page
                      theme, so a transparent form would be unreadable in one of
                      the two modes. Deliberately not keyed on `theme` either —
                      remounting would reload the iframe and discard whatever
                      the visitor had already typed. */}
                  <Widget
                    id={TYPEFORM_ID}
                    className="typeform-widget"
                    inlineOnMobile
                    transitiveSearchParams
                  />
                </>
              ) : (
                <TypeformSetupNotice />
              )}
            </TerminalWindow>

            <Row className="contact-alt">
              <Col md={6} className="contact-alt-col">
                <TerminalWindow title="open --popup">
                  <p className="terminal-line">
                    <span className="terminal-prompt">$</span> Prefer it
                    full-screen?
                  </p>
                  <p className="contact-alt-body">
                    Launch the same form in an overlay instead of inline.
                  </p>
                  {TYPEFORM_ID ? (
                    <PopupButton
                      id={TYPEFORM_ID}
                      className="term-link"
                      size={80}
                    >
                      <CgExternal /> ./open-form
                    </PopupButton>
                  ) : (
                    <span className="term-link is-disabled">
                      <CgExternal /> ./open-form
                    </span>
                  )}
                </TerminalWindow>
              </Col>

              <Col md={6} className="contact-alt-col">
                <TerminalWindow title="ls ./socials">
                  <p className="terminal-line">
                    <span className="terminal-prompt">$</span> Find me elsewhere
                  </p>
                  <ul className="contact-social-list">
                    {SOCIALS.map((social) => (
                      <li key={social.label}>
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-link"
                        >
                          <span className="contact-social-icon">
                            {social.icon}
                          </span>
                          {social.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </TerminalWindow>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
