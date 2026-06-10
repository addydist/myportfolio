import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="section-heading" style={{ textAlign: "center" }}>
        <span className="terminal-prompt">$</span> git log{" "}
        <span className="purple">--graph --all</span>
      </h1>
      <GitHubCalendar
        username="addydist"
        blockSize={15}
        blockMargin={5}
        color="#39ff88"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
