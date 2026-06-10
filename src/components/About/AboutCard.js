import React from "react";
import TerminalWindow from "../Terminal/TerminalWindow";

const profile = [
  { label: "name", value: "Aditya Pal" },
  { label: "location", value: "Bengaluru, Karnataka, India" },
  { label: "role", value: "Technology Consultant @ EXA AG" },
  {
    label: "education",
    value: "B.Tech, Information Science & Eng. — BMSIT, Bengaluru",
  },
  {
    label: "interests",
    value: "Full-Stack Dev, Backend Systems, AI & Automation",
  },
  { label: "hobbies", value: "Cricket, Badminton, Travelling" },
];

function AboutCard() {
  return (
    <TerminalWindow title="aditya@portfolio:~$ whoami --verbose">
      {profile.map((item) => (
        <p className="terminal-line" key={item.label}>
          <span className="info-label purple">{item.label}</span>
          <span className="info-colon">:</span> {item.value}
        </p>
      ))}
      <p className="about-quote">"Learn → Build → Grow → Repeat"</p>
    </TerminalWindow>
  );
}

export default AboutCard;
