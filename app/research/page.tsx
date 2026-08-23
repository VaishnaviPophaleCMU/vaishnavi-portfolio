
import { ArrowUpRight } from "lucide-react";

import { Shell, publications } from "../site";

export default function Research() {
  return (
    <Shell>
      <section className="page-intro">
        <div className="eyebrow">RESEARCH</div>

        <h1>
          Research & <span>Publications.</span>
        </h1>

        <p>
          Research spanning natural language processing, machine learning,
          blockchain technology, IPFS, and intelligent assessment systems.
        </p>
      </section>

      <section className="section">
        <div className="research-list">
          {publications.map((paper, index) => (
            <article className="research-item" key={paper.title}>
              <div className="research-number">
                0{index + 1}
              </div>

              <div className="research-content">
                <div className="research-venue">
                  {paper.venue}
                </div>

                <h2>{paper.title}</h2>

                <p>{paper.description}</p>

                {paper.award && (
                  <div className="research-award">
                    {paper.award}
                  </div>
                )}

                <a
                  className="research-link"
                  href={paper.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  View publication
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Shell>
  );
}