import Link from "next/link";
import {
  Mail,
  Linkedin,
  FileText,
  Phone,
} from "lucide-react";

import { Shell, experience } from "../site";

export default function AboutPage() {
  return (
    <Shell>
      <div className="about-page">

        {/* =====================================================
            ABOUT INTRODUCTION
            ===================================================== */}

        <section className="about-intro" id="introduction">
          <div className="about-intro-label">
            ABOUT
          </div>

          <h1>
           Vaishnavi Pophale
          </h1>

          <div className="about-intro-text">
            <p>
              I&apos;m currently pursuing a
              Master of Computational Data Science at Carnegie Mellon
              University, School of Computer Science.
            </p>

            <p>
            My work sits at the intersection of software engineering, data systems, and AI. I’m passionate about distilling complex challenges into production-grade machine learning solutions and building scalable ML and AI systems that turn large-scale data into reliable, intelligent products and workflows.
            </p>

            <p>
              Before CMU, I worked at MSCI on financial analytics and
              portfolio risk systems, building APIs, AI-powered tooling, and cloud
              configuration systems.
            </p>
          </div>

          {/* =================================================
              EDUCATION / DETAILS
              ================================================= */}

          <div className="about-details">

            <div className="about-detail">
              <strong>Education</strong>
              <span>
                Carnegie Mellon University, School of Computer Science
              </span>
            </div>

            <div className="about-detail">
              <strong>Program</strong>
              <span>
                Master of Computational Data Science · December 2027
              </span>
            </div>

            <div className="about-detail">
              <strong>Focus</strong>
              <span>
                Full Stack Development · Machine Learning Systems · Artificial Intelligence · Generative AI · Natural Language Processing
              </span>
            </div>

            <div className="about-detail">
              <strong>Location</strong>
              <span>
                Pittsburgh, Pennsylvania
              </span>
            </div>


          </div>

          {/* =================================================
              CONTACT / PROFESSIONAL LINKS
              ================================================= */}

          <div className="about-links">

            <a
              className="about-link"
              href="/Vaishnavi_Pophale_Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <FileText size={14} />
              Resume
            </a>

            <a
              className="about-link"
              href="https://www.linkedin.com/in/vaishnavi-pophale-4a0037206/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={14} />
              LinkedIn
            </a>

            <a
              className="about-link"
              href="mailto:vpophale@andrew.cmu.edu"
            >
              <Mail size={14} />
              Email
            </a>

            <a
              className="about-link"
              href="tel:YOUR_PHONE_NUMBER"
            >
              <Phone size={14} />
              Phone
            </a>

          </div>
        </section>


        {/* =====================================================
            EXPERIENCE LAYOUT
            ===================================================== */}

        <section
          className="about-experience-layout"
          id="experience"
        >

          {/* =================================================
              LEFT NAVIGATION
              ================================================= */}

          <aside className="about-experience-sidebar">

            <nav className="about-section-nav">

              <a href="#introduction">
                <span className="nav-line" />
                Introduction
              </a>

              <a href="#professional-experience">
                <span className="nav-line" />
                Professional Experience
              </a>

              <a href="#education">
                <span className="nav-line" />
                Education
              </a>

              <a href="#skills">
                <span className="nav-line" />
                Technical Skills
              </a>

            </nav>

          </aside>


          {/* =================================================
              CENTER CONTENT
              ================================================= */}

          <div className="about-experience-content">

            {/* INTRODUCTION */}

            <section
              className="experience-introduction"
              id="professional-experience"
            >
              <div className="eyebrow">
                INTRODUCTION
              </div>

              <h2>
                Building scalable systems
                <br />
                across software, data, and AI.
              </h2>
            </section>


            {/* PROFESSIONAL EXPERIENCE */}

            <section className="experience-section">

              <div className="experience-heading">
                <h2>
                  Professional Experience
                </h2>
              </div>


              <div className="experience-timeline">

                {experience.map((item, index) => (
                  <article
                    className="experience-item"
                    key={`${item.company}-${item.role}-${index}`}
                  >

                    <span className="experience-marker" />


                    {/* EXPERIENCE HEADER */}

                    <div className="experience-header">

                      <div>
                        <h3>
                          {item.company}
                        </h3>

                        <div className="experience-role">
                          {item.role}
                        </div>
                      </div>

                      <div className="experience-date">
                        {item.dates}
                      </div>

                    </div>


                    {/* COMPANY LOGO */}

                    {item.logo && (
                      <div className="experience-logo-wrap">
                        <img
                          className={`experience-logo ${
                            item.logoDark
                              ? "experience-logo-dark"
                              : ""
                          }`}
                          src={item.logo}
                          alt={`${item.company} logo`}
                        />
                      </div>
                    )}


                    {/* EXPERIENCE BULLETS */}

                    <div className="experience-body">
                      <ul>
                        {item.bullets.map((bullet) => (
                          <li key={bullet}>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>

                  </article>
                ))}

              </div>

            </section>


            {/* =================================================
                EDUCATION
                ================================================= */}

            <section
              className="about-lower-section"
              id="education"
            >

              <div className="eyebrow">
                EDUCATION
              </div>

              <div className="education-entry">

                <h3>
                  Carnegie Mellon University, School of Computer Science
                </h3>

                <p>
                  Master of Computational Data Science
                </p>

                <span>
                  December 2027 · Pittsburgh, Pennsylvania
                </span>

              </div>

            </section>


            {/* =================================================
                TECHNICAL SKILLS
                ================================================= */}

            <section
              className="about-lower-section"
              id="skills"
            >

              <div className="eyebrow">
                TECHNICAL SKILLS
              </div>

              <div className="skills-grid">

                <div className="skill-group">
                  <span>
                    Languages & Frameworks
                  </span>

                  <p>
                    Python · TypeScript · SQL · FastAPI ·
                    Node.js · React.js · FastMCP · LangChain
                  </p>
                </div>

                <div className="skill-group">
                  <span>
                    Systems & Databases
                  </span>

                  <p>
                    System Architecture · Snowflake · Redis ·
                    Azure · Vector Databases · CI/CD
                  </p>
                </div>

                <div className="skill-group">
                  <span>
                    AI / ML
                  </span>

                  <p>
                    Machine Learning · NLP · GenAI · RAG ·
                    LLMs · Embeddings · Agentic AI
                  </p>
                </div>

                <div className="skill-group">
                  <span>
                    Engineering
                  </span>

                  <p>
                    Data Structures & Algorithms · Distributed
                    Systems · API Design · Cloud Computing
                  </p>
                </div>

              </div>

            </section>

          </div>

        </section>

      </div>
    </Shell>
  );
}