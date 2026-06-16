import { FiMail, FiGithub, FiLinkedin, FiFacebook, FiArrowRight } from 'react-icons/fi';
import './Contact.css';

const SOCIALS = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/Myst-fib',
    icon: <FiGithub aria-hidden="true" />,
    handle: '@Myst-fib',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/patrick-cantero/',
    icon: <FiLinkedin aria-hidden="true" />,
    handle: '@patrick-cantero',
  },
];

function Contact() {
  return (
    <section id="contact" className="contact">
      {/* Ambient glow */}
      <div className="contact__glow contact__glow--left" aria-hidden="true" />
      <div className="contact__glow contact__glow--right" aria-hidden="true" />

      <div className="container contact__inner">

        {/* ── Big CTA block ── */}
        <div className="contact__cta">
          <span className="contact__eyebrow">Get In Touch</span>

          <h2 className="contact__headline">
            Let's build something<br />
            <span className="contact__anim">worth remembering.</span>
          </h2>

          <p className="contact__body">
            Have a project in mind, a role to fill, or just want to talk shop?
            My inbox is always open — reach out and I'll get back to you soon.
          </p>

          <a
            href="mailto:patrickcantero26@gmail.com"
            className="contact__mailto"
            aria-label="Send me an email"
          >
            <FiMail aria-hidden="true" />
            <span>patrickcantero26@gmail.com</span>
            <FiArrowRight className="contact__mailto-arrow" aria-hidden="true" />
          </a>
        </div>

        {/* ── Social links ── */}
        <div className="contact__socials">
          <span className="contact__socials-label">Find me elsewhere</span>

          <div className="contact__social-list">
            {SOCIALS.map((s) => (
              <a
                key={s.id}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__social-item"
                aria-label={`Visit my ${s.label} profile`}
              >
                <span className="contact__social-icon">{s.icon}</span>
                <div className="contact__social-text">
                  <span className="contact__social-name">{s.label}</span>
                  <span className="contact__social-handle">{s.handle}</span>
                </div>
                <FiArrowRight className="contact__social-arrow" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;