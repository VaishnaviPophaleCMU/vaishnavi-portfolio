import Link from "next/link";
import {
  ArrowUpRight,
  FileText,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";

import {
  Shell,
  projects,
  experience,
  publications,
} from "./site";

export default function Home() {
  return (
    <Shell>
      <section className="hero">
        <div>
          <div className="eyebrow">
            SOFTWARE ENGINEER · DATA SCIENTIST · AI/ML
          </div>

          <h1>
            Building systems that <span>think, scale & ship.</span>
          </h1>

          <p>
            I&apos;m Vaishnavi, an MCDS student at Carnegie Mellon University, School of Computer Science
            and a software engineer focused on scalable APIs, data-intensive
            systems, and intelligent applications.
          </p>

          <div className="links" style={{ marginTop: 28 }}>
            <a className="pill" href="mailto:vpophale@andrew.cmu.edu">
              <Mail size={14} />
              Get in touch
            </a>

            <a
              className="pill"
              href="/Vaishnavipophale_Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <FileText size={14} />
              Resume
            </a>

            <a
              className="pill"
              href="https://www.linkedin.com/in/vaishnavi-pophale-4a0037206/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={14} />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-side">
          <div className="location">
            <MapPin size={14} />
            Pittsburgh, Pennsylvania
          </div>

          <div className="mono">
            Currently at CMU School of Computer Science
            <br />
            MCDS · Class of 2027
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Selected work</h2>

          <Link href="/projects">
            View all{" "}
            <ArrowUpRight
              size={13}
              style={{ verticalAlign: "middle" }}
            />
          </Link>
        </div>

        <div className="projects">
          {projects.map((p, i) => (
            <Link
              className="project"
              href="/projects"
              key={p.title}
            >
              <div>
                <div className="project-number">
                  0{i + 1}
                </div>

                <h3>{p.title}</h3>

                <p>{p.text}</p>
              </div>

              <div className="tags">
                {p.tags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Experience</h2>
          <span className="mono">2022 — 2026</span>
        </div>

        <div className="exp">
          {experience.map((e) => (
            <div
              className="exp-item"
              key={`${e.company}-${e.role}`}
            >
              <div className="exp-meta">
                <div className="company-row">
                  <img
                    src={e.logo}
                    alt={`${e.company} logo`}
                    className={`company-logo ${
                      e.logoDark ? "logo-dark" : ""
                    }`}
                  />

                  <div className="company">{e.company}</div>
                </div>

                <div className="date">{e.dates}</div>
              </div>

              <div>
                <div className="exp-role">{e.role}</div>

                <ul>
                  {e.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RESEARCH */}

      <section className="section">
        <div className="section-head">
          <h2>Research</h2>

          <span className="mono">
            {publications.length} publications
          </span>
        </div>

        <div className="research-list">
          {publications.map((paper, index) => (
            <a
              className="research-home-item"
              href={paper.link}
              target="_blank"
              rel="noreferrer"
              key={paper.title}
            >
              <div className="research-home-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="research-home-title">
                <div>{paper.title}</div>

                {paper.award && (
                  <div className="research-award">
                    {paper.award}
                  </div>
                )}
              </div>

              <div className="research-home-venue">
                {paper.venue}
              </div>

              <ArrowUpRight
                size={14}
                className="research-home-arrow"
              />
            </a>
          ))}
        </div>

        <div style={{ marginTop: 24 }}>
          <Link href="/research" className="research-link">
            View all research
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>

      <section className="cta">
        <div className="eyebrow">LET&apos;S CONNECT</div>

        <h2>Have an interesting problem?</h2>

        <p>
          I&apos;m always interested in building thoughtful products,
          solving hard engineering problems, and exploring the intersection
          of software, data, and AI.
        </p>

        <div className="links" style={{ marginTop: 24 }}>
          <a
            className="pill"
            href="mailto:vpophale@andrew.cmu.edu"
          >
            <Mail size={14} />
            vpophale@andrew.cmu.edu
          </a>

          <a
            className="pill"
            href="https://www.linkedin.com/in/vaishnavi-pophale-4a0037206/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={14} />
            LinkedIn
          </a>
        </div>
      </section>
    </Shell>
  );
}