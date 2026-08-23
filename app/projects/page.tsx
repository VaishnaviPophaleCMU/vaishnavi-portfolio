import { Shell, projects } from '../site';

export default function Projects() {
  return (
    <Shell>
      <section className="projects-page">
        <div className="eyebrow">PROJECTS</div>

        <h1 className="page-title">
          Things I’ve
          <br />
          built & explored.
        </h1>

        <div className="projects">
          {projects.map((p, i) => (
            <article className="project" key={p.title}>
              <div>
                <div className="project-number">0{i + 1}</div>
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
            </article>
          ))}
        </div>
      </section>
    </Shell>
  );
}