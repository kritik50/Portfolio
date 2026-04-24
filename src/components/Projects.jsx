import { PROJECTS } from '../data';

export default function Projects() {
  return (
    <div id="projects" className="sec">

      <div className="eyebrow fi">
        Projects <span className="eyebrow-line" />
      </div>
      <h2 className="sec-h2 fi" style={{ transitionDelay: '0.07s' }}>
        Things I've built
      </h2>
      <p className="sec-sub fi" style={{ transitionDelay: '0.12s' }}>
        A selection of projects that showcase my full stack skills — from idea to deployment.
      </p>

      <div className="proj-g">
        {PROJECTS.map((p, i) => (
          <div
            className="proj-card fi"
            key={p.title}
            style={{ transitionDelay: `${0.15 + i * 0.08}s` }}
          >
            <div className="proj-top">
              <span className="proj-num">{p.num}</span>
              <div className="proj-actions">
                {p.github && (
                  <a href={p.github} className="proj-icon-btn" title="GitHub"
                     target="_blank" rel="noreferrer">⌥</a>
                )}
                {p.live && (
                  <a href={p.live} className="proj-icon-btn" title="Live Demo"
                     target="_blank" rel="noreferrer">↗</a>
                )}
              </div>
            </div>

            <p className="proj-title">{p.title}</p>
            <p className="proj-desc">{p.desc}</p>

            <div className="proj-tags">
              {p.tags.map((t) => (
                <span className="proj-tag" key={t}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}