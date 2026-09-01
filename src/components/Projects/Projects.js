import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

const projects = [
  {
    fileName: "nodeflo.tsx",
    title: "Nodeflo",
    description:
      "A self-hostable, n8n-style workflow automation platform. Describe what you want in plain English and let AI build the whole workflow — or drag nodes onto a canvas yourself and wire them up. Branching logic, durable background execution via Inngest, live run status and per-run history.",
    tags: ["Next.js 15", "React 19", "TypeScript", "tRPC", "Prisma", "Inngest"],
    ghLink: "https://github.com/addydist/workfloauto",
    demoLink: "https://nodeflo.vercel.app/",
  },
  {
    fileName: "monsoon-safe.jsx",
    title: "MonsoonSafe",
    description:
      "A GenAI-powered monsoon preparedness and citizen assistance platform built for PromptWars (Google for Developers × Hack2Skill). Pairs live Open-Meteo weather data with Gemini to give personalised, multilingual, phase-aware guidance — before, during and after a storm — plus an SOS assistant and family emergency plan builder.",
    tags: ["React", "Gemini API", "Open-Meteo", "GenAI"],
    ghLink: "https://github.com/addydist/monsoonSafe",
    demoLink: "https://monsoon-safe.vercel.app",
  },
  {
    fileName: "apprendre.tsx",
    title: "Apprendre le Français",
    description:
      "A complete, free path from absolute beginner (A1) to exam-ready B2+ for the TEF and TCF exams. Full curriculum, spaced-repetition review deck, 52-week study plan and a translate/pronounce tool — all working with no account, no database and no API key. Includes a fully offline, rule-based French → Devanagari pronunciation engine; AI is an optional upgrade, not a requirement.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Spaced Repetition"],
    ghLink: "https://github.com/addydist/apprendre-le-francais",
    demoLink: "https://apprendre-le-francais.vercel.app",
  },
  {
    fileName: "smart-cache-api.ts",
    title: "Smart Cache API",
    description:
      "A NestJS reference service showcasing a smart HTTP caching layer — a global interceptor that caches GET responses, tag-based invalidation backed by a persistent tag index, cache-stampede protection via single-flight request coalescing, live JSON and Prometheus metrics, and a dependency-free dashboard to inspect and manage entries.",
    tags: ["NestJS 11", "TypeScript", "cache-manager", "Prometheus"],
    ghLink: "https://github.com/addydist/smart-cache-api",
    demoLink: "https://smart-cache-api.onrender.com/",
  },
  {
    fileName: "life-forge.tsx",
    title: "LifeForge",
    description:
      "A productivity RPG where completing real-world tasks grows a future-self city and levels up your character. Task categories pay out different resources, streaks multiply rewards (up to x2 at 30 days), buildings generate passive income, and rare monuments create a collection loop — all persisted locally through Zustand.",
    tags: ["React", "TypeScript", "Zustand", "Vite", "Gamification"],
    ghLink: "https://github.com/addydist/buildYou-",
    demoLink: "https://lifeforgewithaddy.xyz/",
  },
  {
    fileName: "nourish-plan.tsx",
    title: "NourishPlan",
    description:
      "An AI meal planner that generates a complete, budget-aware one-day Indian meal plan from your budget, goal and diet preference. Every meal, grocery item, price and substitution is produced live by Gemini against a strict JSON schema — nothing is hardcoded, and the API key never reaches the browser.",
    tags: ["Next.js", "TypeScript", "Gemini API", "Structured Output"],
    ghLink: "https://github.com/addydist/aiMealPrep",
    demoLink: "https://ai-meal-prep-tan.vercel.app",
  },
  {
    fileName: "watchlist_analyst.py",
    title: "Watchlist Analyst (MCP)",
    description:
      "An MCP server that lets an LLM like Claude look up Indian (NSE/BSE) stock data and reason over a persistent watchlist you build conversationally. Exposes quotes, fundamentals, OHLC history, side-by-side comparison and portfolio-file parsing as tools — the differentiator being state that survives across sessions.",
    tags: ["Python", "MCP", "yfinance", "Claude"],
    ghLink: "https://github.com/addydist/stocklisis",
  },
  {
    fileName: "storage-manager.jsx",
    title: "Storage Manager Pro",
    description:
      "A Chrome extension for inspecting and managing localStorage and sessionStorage from a modern React UI — paginated tables, real-time search across keys and values, inline editing with validation, JSON import/export, and performance tuned to handle thousands of entries.",
    tags: ["Chrome Extension", "React", "Tailwind", "JavaScript"],
    ghLink: "https://github.com/addydist/storage-manager-extension",
  },
  {
    fileName: "card-game.sol",
    title: "Card Game Arena",
    description:
      "A multiplayer card game with secure, ledger-backed in-game transactions via MetaMask, wrapped in an engaging and transparent UI. Solidity contracts drive the on-chain match and payout logic.",
    tags: ["Solidity", "MetaMask", "React", "Web3"],
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
        <p className="section-subtitle">
          A few things I've built recently &mdash; more on{" "}
          <a
            href="https://github.com/addydist?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="inline-link"
          >
            github.com/addydist
          </a>
          .
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
