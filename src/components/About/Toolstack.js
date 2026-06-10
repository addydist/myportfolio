import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiLinux,
  SiGit,
  SiMysql,
} from "react-icons/si";

const tools = [
  { icon: <SiGit />, label: ".gitconfig" },
  { icon: <SiVisualstudiocode />, label: "code.exe" },
  { icon: <SiPostman />, label: "requests.json" },
  { icon: <SiMysql />, label: "mysql.cnf" },
  { icon: <SiLinux />, label: "kernel" },
];

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool) => (
        <Col xs={6} md={3} lg={2} className="tech-icons" key={tool.label}>
          <div className="tech-icon-glyph">{tool.icon}</div>
          <div className="tech-label">{tool.label}</div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
