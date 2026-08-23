import { ArrowUpRight, Award } from "lucide-react";

import { Shell, certifications } from "../site";

export default function Certifications() {
  return (
    <Shell>
      <section className="page-intro">
        <div className="eyebrow">CERTIFICATIONS</div>

        <h1>
          Certifications & <span>Credentials.</span>
        </h1>

        <p>
          Professional certifications and technical credentials spanning
          machine learning, AI, data engineering, cloud computing, networking,
          and software development.
        </p>
      </section>

      <section className="section">
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <article
              className="certification-card"
              key={`${cert.issuer}-${cert.title}`}
            >
              <div className="certification-header">
                <div className="certification-icon">
                  <Award size={18} />
                </div>

                <div className="certification-meta">
                  <div className="certification-issuer">
                    {cert.issuer}
                  </div>

                  {cert.date && (
                    <div className="certification-date">
                      {cert.date}
                    </div>
                  )}
                </div>

                <div className="certification-number">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>

              <div className="certification-body">
                <h2>{cert.title}</h2>

                {cert.credentialId && (
                  <div className="credential">
                    <span>Credential ID</span>
                    <code>{cert.credentialId}</code>
                  </div>
                )}
              </div>

              <div className="certification-footer">
                {cert.link ? (
                  <a
                    className="certification-link"
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Credential
                    <ArrowUpRight size={14} />
                  </a>
                ) : (
                  <span className="certification-unavailable">
                    Credential link unavailable
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </Shell>
  );
}