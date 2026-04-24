import { EDUCATION } from '../data';

export default function Education() {
  return (
    <div id="education" className="sec-alt">
      <div className="sec-alt-inner">

        <div className="eyebrow fi">
          Education <span className="eyebrow-line" />
        </div>
        <h2 className="sec-h2 fi" style={{ transitionDelay: '0.07s' }}>
          Academic Background
        </h2>
        <p className="sec-sub fi" style={{ transitionDelay: '0.12s' }}>
          Where I learned to think, solve problems, and build things that matter.
        </p>

        <div className="edu-list">
          {EDUCATION.map((e, i) => (
            <div
              className="edu-card fi"
              key={e.degree}
              style={{ transitionDelay: `${0.15 + i * 0.1}s` }}
            >
              <div>
                <p className="edu-deg">{e.degree}</p>
                <p className="edu-school">{e.school}</p>
                <p className="edu-loc">📍 {e.location}</p>
                {e.highlights && e.highlights.length > 0 && (
                  <div className="edu-chips">
                    {e.highlights.map((h) => (
                      <span className="edu-chip" key={h}>{h}</span>
                    ))}
                  </div>
                )}
              </div>

              <div className="edu-r">
                <p className="edu-yr">{e.year}</p>
                <p className="edu-grade">{e.grade}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}