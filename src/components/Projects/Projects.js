import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

const projects = [
  {
    fileName: "workflo-auto.tsx",
    title: "WorkFloAuto",
    description:
      "An AI-powered workflow automation platform built with Next.js 15 and React 19 — design multi-step automations on a visual canvas, orchestrate background jobs with Inngest, and plug in multiple LLM providers (Anthropic, OpenAI, Google) via the Vercel AI SDK.",
    tags: ["Next.js 15", "TypeScript", "Prisma", "tRPC", "AI SDK"],
    ghLink: "https://github.com/addydist/workfloauto",
    demoLink: "https://workfloauto-lyart.vercel.app",
  },
  {
    fileName: "life-forge.tsx",
    title: "LifeForge",
    description:
      "A gamified productivity app that turns real-world task completion into virtual city-building and character progression — streak multipliers, rare collectible monuments, and a passive income system.",
    tags: ["React", "Zustand", "Gamification"],
    ghLink: "https://github.com/addydist/buildYou-",
    demoLink: "https://lifeforgewithaddy.xyz/",
  },
  {
    fileName: "storage-manager.tsx",
    title: "Storage Manager Pro",
    description:
      "A Chrome extension (Manifest V3) for managing browser localStorage & sessionStorage through a modern React + Tailwind dashboard — search, inline edit, JSON import/export, and virtualized tables.",
    tags: ["Chrome Extension", "React 18", "Tailwind", "Manifest V3"],
    ghLink: "https://github.com/addydist/storage-manager-extension",
  },
  {
    fileName: "nest-away.tsx",
    title: "NestAway",
    description:
      "A real estate rental platform built with React.js, enabling secure transactions and listing management between owners, tenants and brokers, with wallet-based authentication.",
    tags: ["React", "Ethers.js", "Hardhat"],
    ghLink: "https://github.com/addydist/NestAway",
  },
  {
    fileName: "card-game.tsx",
    title: "Card Game Arena",
    description:
      "A multiplayer card game with secure, ledger-backed in-game transactions via MetaMask, wrapped in an engaging and transparent UI.",
    tags: ["Avalanche", "MetaMask", "React"],
    ghLink: "https://github.com/addydist/BlockchainCardGame",
  },
];

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="section-heading">
          <span className="terminal-prompt">$</span> ls{" "}
          <span className="purple">~/projects</span>
        </h1>
        <p style={{ color: "var(--term-text)" }}>
          A few things I've built recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project) => (
            <Col md={4} className="project-card" key={project.fileName}>
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
