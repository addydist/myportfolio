import React from "react";
import { CgWebsite } from "react-icons/cg";

const experiences = [
  {
    hash: "f3a91c2",
    role: "Technology Consultant",
    company: "EXA AG",
    period: "Current",
    description: `Building scalable features for Kyano, a cloud-based data migration platform. Lead frontend development for the Scope Builder app and contribute to backend services for the Analysis Framework.

    Delivered end-to-end features across React/NestJS stack
    Integrated Keycloak (OpenID Connect) for authentication
    Improved performance with Redis and IndexedDB caching
    Implemented real-time updates via WebSockets`,
    link: "https://exa-ag.com/",
    site: "exa-ag.com",
  },
  {
    hash: "9bd4e07",
    role: "SDE Intern (Backend)",
    company: "Namaste Credit",
    period: "Internship",
    description:
      "Worked as a backend developer intern at Namaste Credit, a leading fintech company providing portals like DOS and CAM. Specialized in Node.js, integrating third-party APIs for an insurance project and collaborating with cross-functional teams to build secure, efficient and scalable backend services. Namaste Credit has since been acquired by Decimal Technologies.",
    link: "https://decimaltech.com/",
    site: "decimaltech.com",
  },
  {
    hash: "5c1a8f4",
    role: "Frontend Developer Intern",
    company: "Xtreme Technologies",
    period: "Internship",
    description:
      "Developed skills in D3.js for visualizing ocean data on 2D and 3D models, working with the Earth NullSchool model, converting ocean map data to TopoJSON, reverse engineering, and optimizing path algorithms alongside marine engineers.",
    link: "https://xtremetechnologies.in/",
    site: "xtremetechnologies.in",
  },
];

function Experience() {
  return (
    <div className="git-log">
      {experiences.map((exp) => (
        <div className="git-commit" key={exp.hash}>
          <div className="commit-hash">commit {exp.hash}</div>
          <div className="commit-meta">Author: Aditya Pal</div>
          <div className="commit-meta">Date: {exp.period}</div>
          <div className="commit-message">
            <span className="purple">{exp.role}</span> @ {exp.company}
          </div>
          <p className="commit-body">{exp.description}</p>
          <a
            href={exp.link}
            target="_blank"
            rel="noreferrer"
            className="term-link"
          >
            <CgWebsite /> {exp.site}
          </a>
        </div>
      ))}
    </div>
  );
}

export default Experience;
