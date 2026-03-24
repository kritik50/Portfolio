import { EXPERIENCE } from '../data';

export default function Experience() {
  return (
    <div id="experience" className="sec">

      <div className="eyebrow fi">
        Experience <span className="eyebrow-line" />
      </div>
      <h2 className="sec-h2 fi" style={{ transitionDelay: '0.07s' }}>
        Where I've worked
      </h2>
      <p className="sec-sub fi" style={{ transitionDelay: '0.12s' }}>
        Real-world experience building and shipping production-grade software.
      </p>

      <div className="exp-list">
        {EXPERIENCE.map((job, i) => (
          <div
            className="exp-card fi"
            key={job.title + job.company}
            style={{ transitionDelay: `${0.15 + i * 0.1}s` }}
          >
            {/* Left stripe */}
            <div className="exp-stripe" />

            <div className="exp-body">
              {/* Top row */}
              <div className="exp-top">
                <div>
                  <p className="exp-role">{job.title}</p>
                  <p className="exp-company">
                    {job.company}
                    {job.location && (
                      <span className="exp-location"> · {job.location}</span>
                    )}
                  </p>
                </div>
                <div className="exp-meta">
                  <span className="exp-duration">{job.duration}</span>
                  <span className="exp-type">{job.type}</span>
                </div>
              </div>

              {/* Bullet points */}
              <ul className="exp-bullets">
                {job.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>

              {/* Tech tags */}
              {job.tags && (
                <div className="exp-tags">
                  {job.tags.map((t) => (
                    <span className="exp-tag" key={t}>{t}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}