import { ME } from '../data';

export default function Footer() {
  return (
    <footer className="footer">
      <span>
        Designed &amp; built by{' '}
        <a href={ME.linkedin} target="_blank" rel="noreferrer">{ME.name}</a>
      </span>
      <span>📍 {ME.location}</span>
      <span>© {new Date().getFullYear()}</span>
    </footer>
  );
}