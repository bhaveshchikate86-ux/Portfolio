import React from 'react';
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Cpu,
  ExternalLink,
  Github,
  Linkedin,
  MemoryStick,
  Terminal,
  Workflow,
} from 'lucide-react';
import { KineticCore } from './hero/KineticCore';
import { heroStack, profileData } from '../data/profile';

const projectIcons = [MemoryStick, Workflow, Cpu];
const projectAccents = ['cyan', 'violet', 'emerald'];

const Header: React.FC = () => (
  <header className="kinetic-header">
    <div className="kinetic-nav glass-panel">
      <a href="#top" className="brand-lockup" aria-label="Bhavesh Chikate, back to top">
        <span className="brand-monogram">BC</span>
        <span className="brand-copy">
          <strong>Bhavesh Chikate</strong>
          <small>@bhaveshchikate86-ux</small>
        </span>
      </a>

      <nav className="desktop-nav" aria-label="Main navigation">
        <a href="#featured"><span>#</span> projects</a>
        <a href="#telemetry"><span>#</span> system</a>
        <a href="#contact"><span>#</span> connect</a>
      </nav>

      <div className="nav-actions">
        <a
          className="membership-link"
          href={profileData.community.url}
          target="_blank"
          rel="noreferrer"
          aria-label="Member of TheKubics — visit TheKubics"
        >
          <span className="membership-label">MEMBER OF</span>
          <span className="membership-logo"><img src="https://bhomesh.thekubics.space/images/thekubics-cube.png" alt="" /></span>
          <span className="membership-name">TheKubics</span>
          <ArrowUpRight className="membership-arrow" size={12} />
        </a>
        <a className="nav-github" href={profileData.socials.github} target="_blank" rel="noreferrer" aria-label="Visit GitHub profile">
          <Terminal size={15} /> GitHub <ArrowUpRight size={13} />
        </a>
      </div>
    </div>
  </header>
);

const Hero: React.FC = () => (
  <section className="kinetic-hero" id="top">
    <div className="hero-orbit-label hero-orbit-label--left"><span /> C / SYSTEMS</div>
    <div className="hero-orbit-label hero-orbit-label--right"><span /> AI / PROMPTING</div>

    <div className="hero-content">
      <div className="hero-status glass-panel">
        <span className="status-spark" />
        {profileData.education.degree} <b>·</b> Systems &amp; AI
      </div>
      <p className="hero-eyebrow">Curious by nature. Building with purpose.</p>
      <h1>
        BHAVESH <span>CHIKATE</span>
      </h1>
      <p className="hero-description">
        {profileData.shortDescription} Focused on strong fundamentals, useful software, and learning by building.
      </p>

      <div className="hero-stack" aria-label="Current technology interests">
        {heroStack.map((item) => (
          <span className="stack-chip glass-card" key={item.id}>
            <b className={item.tone}>{item.id}</b>{item.label}
          </span>
        ))}
      </div>

      <div className="hero-actions">
        <a className="button-primary" href="#featured">EXPLORE MY WORK <ArrowDown size={15} /></a>
        <a className="button-ghost" href="#contact">LET'S CONNECT <ArrowUpRight size={15} /></a>
      </div>

      <a href="#featured" className="scroll-cue">
        <span>SCROLL TO ENGAGE THE 3D CORE</span>
        <ArrowDown size={14} />
      </a>
    </div>
  </section>
);

const Projects: React.FC = () => (
  <section className="content-section projects-section" id="featured">
    <div className="section-heading">
      <div>
        <span className="section-kicker"><Terminal size={14} /> CURATED REPOSITORIES</span>
        <h2>Learning in public<span>.</span></h2>
      </div>
      <a className="section-link" href={profileData.socials.github} target="_blank" rel="noreferrer">
        github.com/bhaveshchikate86-ux <ArrowUpRight size={14} />
      </a>
    </div>

    <div className="project-grid">
      {profileData.projects.map((project, index) => {
        const Icon = projectIcons[index % projectIcons.length];
        const accent = projectAccents[index % projectAccents.length];
        return (
          <a
            className={`project-card glass-card accent-${accent}`}
            href={project.url}
            target="_blank"
            rel="noreferrer"
            key={project.id}
          >
            <div className="project-card-top">
              <span className="project-icon"><Icon size={22} /></span>
              <span className="project-number">PROJECT / {project.id}</span>
            </div>
            <div className="project-copy">
              <span className="project-category">{project.category}</span>
              <h3>{project.name}<ArrowUpRight size={17} /></h3>
              <p className="project-repo">{project.fullName}</p>
              <p className="project-description">{project.description}</p>
            </div>
            <div className="project-tags">
              {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
            <div className="project-footer">
              <span>VIEW SOURCE</span><ArrowRight size={15} />
            </div>
          </a>
        );
      })}
    </div>
  </section>
);

const Telemetry: React.FC = () => (
  <section className="content-section telemetry-section" id="telemetry">
    <div className="telemetry-panel glass-panel">
      <div className="telemetry-header">
        <div className="terminal-title">
          <span className="terminal-lights"><i /><i /><i /></span>
          <span>bhavesh@learning-lab: ~/telemetry</span>
        </div>
        <span className="ready-status"><i /> STATUS: LEARNING</span>
      </div>
      <div className="telemetry-command"><span>$</span> profile --snapshot</div>
      <div className="telemetry-grid">
        <div className="telemetry-item">
          <span>FOUNDATION</span>
          <strong>{profileData.education.degree}</strong>
        </div>
        <div className="telemetry-item">
          <span>CORE TOOLCHAIN</span>
          <strong>C, C++, Linux, Git</strong>
        </div>
        <div className="telemetry-item">
          <span>CURRENT EXPLORATION</span>
          <strong>AI &amp; Prompt Engineering</strong>
        </div>
      </div>
      <div className="telemetry-bottom">
        <span><i /> Grounded in fundamentals</span>
        <span><i /> Building through practice</span>
        <a href="#contact">OPEN CONNECTION <ArrowUpRight size={13} /></a>
      </div>
    </div>
  </section>
);

const Contact: React.FC = () => (
  <section className="content-section contact-section" id="contact">
    <div className="contact-panel glass-card">
      <div className="contact-glow" />
      <span className="section-kicker"><span className="contact-pulse" /> INITIATE A CONVERSATION</span>
      <h2>Good ideas start<br />with a <span>hello.</span></h2>
      <p>Open to technical discussions, student collaborations, internships, and learning alongside people who like to build.</p>
      <div className="contact-actions">
        <a className="button-light" href={profileData.socials.linkedin} target="_blank" rel="noreferrer">
          <Linkedin size={16} /> CONNECT ON LINKEDIN <ArrowUpRight size={14} />
        </a>
        <a className="button-outline" href={profileData.socials.github} target="_blank" rel="noreferrer">
          <Github size={16} /> GITHUB PROFILE <ArrowUpRight size={14} />
        </a>
      </div>
      <a className="community-link" href={profileData.community.url} target="_blank" rel="noreferrer">
        Building with {profileData.community.name} <ExternalLink size={13} />
      </a>
    </div>
  </section>
);

const Footer: React.FC = () => (
  <footer className="kinetic-footer">
    <a href="#top" className="footer-name"><span /> Bhavesh Chikate <small>— CODE • BUILD • SOLVE</small></a>
    <div className="footer-links">
      <a href={profileData.socials.github} target="_blank" rel="noreferrer">GitHub</a>
      <a href={profileData.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
      <a href="#top">Back to top <ArrowDownRight size={13} /></a>
    </div>
    <span className="copyright">© {new Date().getFullYear()} · BUILT WITH CURIOSITY</span>
  </footer>
);

export const KineticPortfolio: React.FC = () => (
  <div className="kinetic-app">
    <KineticCore />
    <div className="ambient-lights" aria-hidden="true">
      <div className="ambient-glow ambient-glow--top" />
      <div className="ambient-glow ambient-glow--bottom" />
      <div className="ambient-grid" />
    </div>
    <Header />
    <main className="kinetic-main">
      <Hero />
      <Projects />
      <Telemetry />
      <Contact />
    </main>
    <Footer />
  </div>
);
