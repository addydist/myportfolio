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
    fileName: "smart-cache-api.tsx",
    title: "Smart Cache API",
    description:
      "A NestJS reference service showcasing a smart HTTP caching layer — tag-based invalidation, cache-stampede protection via request coalescing, live Prometheus-style metrics, and a built-in dashboard to inspect and manage cache entries in real time.",
    tags: ["NestJS", "TypeScript", "Redis", "cache-manager", "Prometheus"],
    ghLink: "https://github.com/addydist/smart-cache-api",
    demoLink: "https://smart-cache-api.onrender.com/",
  },
  {
    fileName: "apprendre.tsx",
    title: "Apprendre le Français",
    description:
      "An AI-powered French learning platform that takes you from beginner (A1) to exam-ready B2+ for TEF & TCF certifications — with structured lessons, translation practice, and review tools, powered by Anthropic and Google AI.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Anthropic AI", "Google AI"],
    ghLink: "https://github.com/addydist/apprendre-le-francais",
    demoLink: "https://apprendre-le-francais.vercel.app",
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
