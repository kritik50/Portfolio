import { SKILLS } from '../data';

export default function Skills() {
  return (
    <div id="skills" className="sec-alt">
      <div className="sec-alt-inner">

        <div className="eyebrow fi">
          Skills &amp; Stack <span className="eyebrow-line" />
        </div>
        <h2 className="sec-h2 fi" style={{ transitionDelay: '0.07s' }}>
          What I work with
        </h2>
        <p className="sec-sub fi" style={{ transitionDelay: '0.12s' }}>
          Technologies I use daily to build robust, scalable full stack applications.
        </p>

        <div className="skills-g">
          {Object.entries(SKILLS).map(([cat, items], i) => (
            <div
              className="skill-card fi"
              key={cat}
              style={{ transitionDelay: `${0.15 + i * 0.07}s` }}
            >
              <p className="skill-cat">{cat}</p>
              <div className="stags">
                {items.map((t) => (
                  <span className="stag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}