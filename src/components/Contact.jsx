import { useState } from 'react';
import { ME } from '../data';

const EMPTY = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm]       = useState(EMPTY);
  const [sending, setSending] = useState(false);
  const [sent, setSent]       = useState(false);

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    // 👉 Replace this timeout with your real send logic
    //    e.g. EmailJS, Formspree, or a backend API call
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setForm(EMPTY);
      setTimeout(() => setSent(false), 5000);
    }, 1200);
  };

  return (
    <div id="contact" className="sec">

      <div className="eyebrow fi">
        Contact <span className="eyebrow-line" />
      </div>
      <h2 className="sec-h2 fi" style={{ transitionDelay: '0.07s' }}>
        Let's talk
      </h2>
      <p className="sec-sub fi" style={{ transitionDelay: '0.12s' }}>
        I'm actively looking for internships and full-time roles. I reply within 24 hours.
      </p>

      <div className="contact-g">

        {/* Left — links */}
        <div className="fi" style={{ transitionDelay: '0.15s' }}>
          <p className="contact-blurb">
            Whether you have a job opportunity, want to collaborate on a project,
            or just want to say hello — my inbox is always open.
          </p>
          <div className="contact-links">
            <a href={`mailto:${ME.email}`} className="clink">
              <span className="cicon">✉️</span>
              {ME.email}
            </a>
            <a href={ME.github} className="clink" target="_blank" rel="noreferrer">
              <span className="cicon">🐙</span>
              GitHub — View my code
            </a>
            <a href={ME.linkedin} className="clink" target="_blank" rel="noreferrer">
              <span className="cicon">💼</span>
              LinkedIn — Let's connect
            </a>
            <a href={ME.resumeLink} className="clink" target="_blank" rel="noreferrer">
              <span className="cicon">📄</span>
              Download Résumé
            </a>
          </div>
        </div>

        {/* Right — form */}
        <div className="fi" style={{ transitionDelay: '0.22s' }}>
          <div className="fcard">
            <form className="form" onSubmit={handleSubmit}>

              <div className="frow">
                <div className="fg">
                  <label className="flabel">Name</label>
                  <input className="finput" placeholder="Your name"
                    value={form.name} onChange={set('name')} required />
                </div>
                <div className="fg">
                  <label className="flabel">Email</label>
                  <input className="finput" type="email" placeholder="you@email.com"
                    value={form.email} onChange={set('email')} required />
                </div>
              </div>

              <div className="fg">
                <label className="flabel">Subject</label>
                <input className="finput"
                  placeholder="Internship / Collaboration / Just saying hi"
                  value={form.subject} onChange={set('subject')} required />
              </div>

              <div className="fg">
                <label className="flabel">Message</label>
                <textarea className="ftextarea" rows={5}
                  placeholder={`Hi ${ME.name.split(' ')[0]}, I'd love to…`}
                  value={form.message} onChange={set('message')} required />
              </div>

              {sent
                ? <div className="fsuccess">✓ Message sent! I'll get back to you soon.</div>
                : (
                  <button type="submit" className="fsubmit" disabled={sending}>
                    {sending ? 'Sending…' : 'Send Message →'}
                  </button>
                )
              }

            </form>
          </div>
        </div>

      </div>
    </div>
  );
}