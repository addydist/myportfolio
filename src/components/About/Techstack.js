import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiAws,
  DiMysql,
} from "react-icons/di";
import {
  SiNextdotjs,
  SiSolidity,
  SiTypescript,
  SiNestjs,
  SiTailwindcss,
} from "react-icons/si";

const skills = [
  { icon: <DiReact />, label: "react.jsx" },
  { icon: <SiNextdotjs />, label: "next.config" },
  { icon: <DiNodejs />, label: "node.js" },
  { icon: <SiNestjs />, label: "nest.ts" },
  { icon: <SiTypescript />, label: "types.ts" },
  { icon: <DiJavascript1 />, label: "script.js" },
  { icon: <CgCPlusPlus />, label: "main.cpp" },
  { icon: <SiSolidity />, label: "contract.sol" },
  { icon: <DiMongodb />, label: "db.bson" },
  { icon: <DiMysql />, label: "schema.sql" },
  { icon: <SiTailwindcss />, label: "styles.css" },
  { icon: <DiGit />, label: ".git" },
  { icon: <DiAws />, label: "infra.yml" },
];

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {skills.map((skill) => (
        <Col xs={6} md={3} lg={2} className="tech-icons" key={skill.label}>
          <div className="tech-icon-glyph">{skill.icon}</div>
          <div className="tech-label">{skill.label}</div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
