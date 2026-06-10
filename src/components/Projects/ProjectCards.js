import React from "react";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import TerminalWindow from "../Terminal/TerminalWindow";

function ProjectCards({ fileName, title, description, tags = [], ghLink, demoLink }) {
  return (
    <TerminalWindow title={fileName} className="project-card-window">
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      {tags.length > 0 && (
        <div className="tag-row">
          {tags.map((tag) => (
            <span className="tag-chip" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      )}
      <div className="project-links">
        <a href={ghLink} target="_blank" rel="noreferrer" className="term-link">
          <BsGithub /> ./source
        </a>
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noreferrer"
            className="term-link"
          >
            <CgWebsite /> ./demo
          </a>
        )}
      </div>
    </TerminalWindow>
  );
}

export default ProjectCards;
