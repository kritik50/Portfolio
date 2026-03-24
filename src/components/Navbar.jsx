import { ME } from '../data';

export default function Navbar() {
  return (
    <nav className="nav">
      <a href="#hero" className="nav-logo">
        {ME.name.split(' ')[0]}<span>.</span>
      </a>
      <ul className="nav-links">
        {['Skills', 'Projects', 'Education', 'Contact'].map((s) => (
          <li key={s}>
            <a href={`#${s.toLowerCase()}`}>{s}</a>
          </li>
        ))}
        <li>
          <a href={ME.resumeLink} className="nav-resume" target="_blank" rel="noreferrer">
            Résumé ↗
          </a>
        </li>
      </ul>
    </nav>
  );
}