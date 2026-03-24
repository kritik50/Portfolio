import { ME, SKILLS, STATS } from '../data';

const stackPreview = Object.values(SKILLS).flat().slice(0, 11);

export default function Hero() {
  return (
    <div id="hero" className="hero-wrapper">
      <div className="hero">

        {/* ── LEFT: text ── */}
        <div>
          <div className="badge">
            <span className="badge-dot" />
            Open to Opportunities
          </div>

          <h1 className="hero-h1">
            Hi, I'm <em>{ME.name.split(' ')[0]}</em> —<br />
            Full Stack<br />Developer
          </h1>

          <p className="hero-sub">{ME.tagline}</p>

          <div className="hero-btns">
            <a href="#projects" className="btn btn-dark">View My Work →</a>
            <a href={`mailto:${ME.email}`} className="btn btn-ghost">Get In Touch</a>
          </div>
        </div>

        {/* ── RIGHT: info cards ── */}
        <div className="hero-cards">

          {/* Stack */}
          <div className="hcard">
            <p className="hcard-label">Tech Stack</p>
            <div className="stack-wrap">
              {stackPreview.map((s) => (
                <span className="spill" key={s}>{s}</span>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="hcard">
            <p className="hcard-label">At a Glance</p>
            <div className="stat-row">
              {STATS.map((s) => (
                <div className="mstat" key={s.label}>
                  <div className="mstat-n">{s.num}</div>
                  <div className="mstat-l">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Location */}
          <div className="hcard loc-row">
            <span style={{ fontSize: '1.3rem' }}>📍</span>
            <div>
              <p className="loc-label">Location</p>
              <p className="loc-val">{ME.location}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}