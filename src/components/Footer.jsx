import { FiGithub, FiLinkedin, FiFacebook, FiMail, FiArrowUp } from 'react-icons/fi';
import './Footer.css';

const SOCIALS = [
  { id: 'github',   icon: <FiGithub aria-hidden="true" />,   href: 'https://github.com/Myst-fib',           label: 'GitHub' },
  { id: 'linkedin', icon: <FiLinkedin aria-hidden="true" />, href: 'https://linkedin.com/in/',              label: 'LinkedIn' },
  { id: 'facebook', icon: <FiFacebook aria-hidden="true" />, href: 'https://facebook.com/',                 label: 'Facebook' },
  { id: 'email',    icon: <FiMail aria-hidden="true" />,     href: 'mailto:your@email.com',                 label: 'Email' },
];

function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    const top = document.getElementById('top');
    if (top) top.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="footer">
      <div className="footer__glow" aria-hidden="true" />

      <div className="container footer__inner">

        {/* ── Top row ── */}
        <div className="footer__top">

          {/* Brand */}
          <a href="#top" className="footer__brand" onClick={scrollToTop} aria-label="Back to top">
            <span className="footer__brand-icon" aria-hidden="true" />
            <span className="footer__brand-text">
              patrick<span className="footer__brand-dot">.</span>
            </span>
          </a>

          {/* One-liner */}
          <p className="footer__tagline">
            Building thoughtful digital experiences — one component at a time.
          </p>
        </div>

        {/* ── Divider ── */}
        <div className="footer__rule" aria-hidden="true" />

        {/* ── Mid row: nav + socials ── */}
        <div className="footer__mid">

          {/* Projects quick-links */}
          <div className="footer__col">
            <span className="footer__col-label">Projects</span>
            <ul className="footer__nav-list">
              <li>
                <a href="https://prolink-vysv.onrender.com/" target="_blank" rel="noopener noreferrer" className="footer__nav-link">
                  ProLink
                </a>
              </li>
              <li>
                <a href="https://logpoint-frontend.onrender.com/" target="_blank" rel="noopener noreferrer" className="footer__nav-link">
                  LogPoint
                </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div className="footer__col">
            <span className="footer__col-label">Connect</span>
            <div className="footer__socials">
              {SOCIALS.map((s) => (
                <a
                  key={s.id}
                  href={s.href}
                  target={s.id !== 'email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="footer__social-btn"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
              
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;