import { useState, useEffect } from 'react';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Works', href: '#works' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('#top');

  // Scrolled state for navbar background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll-spy: watch all sections and update active link
  useEffect(() => {
    const sectionIds = ['top', 'about', 'works', 'services', 'contact'];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      {
        // Trigger when section is at least 40% visible
        rootMargin: '-10% 0px -50% 0px',
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href) => {
    setActive(href);
    setMenuOpen(false);

    // Smooth scroll manually for reliability across browsers
    const id = href.replace('#', '');
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">

        <a
          href="#top"
          className="nav__mark"
          aria-label="Back to top"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#top');
          }}
        >
          <span className="nav__mark-icon" aria-hidden="true"></span>
          <span className="nav__mark-text">
            patrick<span className="nav__mark-dot">.</span>
          </span>
        </a>

        <nav className="nav__pill" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav__link ${active === link.href ? 'is-active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a href="/resume.pdf" download className="nav__cta">
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download Resume
        </a>

        <button
          className={`nav__toggle ${menuOpen ? 'is-open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span></span>
          <span></span>
        </button>
      </div>

      <nav className={`nav__mobile ${menuOpen ? 'is-open' : ''}`} aria-label="Mobile">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`nav__mobile-link ${active === link.href ? 'is-active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(link.href);
            }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="/resume.pdf"
          download
          className="nav__mobile-link nav__mobile-link--cta"
          onClick={() => setMenuOpen(false)}
        >
          Download Resume
        </a>
      </nav>
    </header>
  );
}

export default Navbar;