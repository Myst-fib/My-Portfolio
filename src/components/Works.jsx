import { FiExternalLink, FiGithub, FiLayers, FiDatabase } from 'react-icons/fi';
import './Works.css';

const WORKS = [
  {
    id: 'prolink',
    index: '01',
    role: 'Frontend Developer',
    title: 'ProLink',
    tagline: 'Connect. Consult. Validate.',
    description:
      'A web-based consultation and validation platform that bridges students and workers with professionals — enabling expert feedback, advice, and validation on academic or work-related outputs.',
    tags: ['React', 'UI/UX', 'Consultation', 'Web App'],
    icon: <FiLayers aria-hidden="true" />,
    codeUrl: 'https://github.com/RodCanete/CSIT327-G2-ProLink.git',
    liveUrl: 'https://prolink-vysv.onrender.com/',
  },
  {
    id: 'logpoint',
    index: '02',
    role: 'Full Stack Developer',
    title: 'LogPoint',
    tagline: 'Smarter visitor management.',
    description:
      'A digital logbook application that replaces paper-based visitor logs with a secure, searchable, and organized system — eliminating errors, data loss, and manual overhead.',
    tags: ['Full Stack', 'Node.js', 'Database', 'Dashboard'],
    icon: <FiDatabase aria-hidden="true" />,
    codeUrl: 'https://github.com/Myst-fib/IT342-Cantero-LogPoint.git',
    liveUrl: 'https://logpoint-frontend.onrender.com/',
  },
];

function Works() {
  return (
    <section id="works" className="works">
      <div className="works__glow" aria-hidden="true" />

      <div className="container works__inner">

        {/* ── Header ── */}
        <div className="works__header">
          <span className="works__eyebrow">Selected Works</span>
          <h2 className="works__title">
            Things I've <span className="works__anim">built</span>.
          </h2>
          <p className="works__subtitle">
            A pair of projects where design met engineering — each one solving a real problem.
          </p>
        </div>

        {/* ── Vertical card grid ── */}
        <div className="works__grid">
          {WORKS.map((work) => (
            <article className="works__card" key={work.id}>

              {/* Top meta row */}
              <div className="works__card-meta">
                <span className="works__card-index">{work.index}</span>
                <span className="works__card-role">{work.role}</span>
              </div>

              {/* Divider */}
              <div className="works__card-divider" aria-hidden="true" />

              {/* Icon + title block */}
              <div className="works__card-head">
                <div className="works__card-icon">{work.icon}</div>
                <div>
                  <h3 className="works__card-title">{work.title}</h3>
                  <p className="works__card-tagline">{work.tagline}</p>
                </div>
              </div>

              {/* Description */}
              <p className="works__card-desc">{work.description}</p>

              {/* Tags */}
              <div className="works__tags">
                {work.tags.map((tag) => (
                  <span className="works__tag" key={tag}>{tag}</span>
                ))}
              </div>

              {/* Actions */}
              <div className="works__card-actions">
                <a
                  href={work.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="works__btn works__btn--ghost"
                  aria-label={`View ${work.title} source code on GitHub`}
                >
                  <FiGithub />
                  <span>Code</span>
                </a>
                <a
                  href={work.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="works__btn works__btn--primary"
                  aria-label={`View ${work.title} live demo`}
                >
                  <FiExternalLink />
                  <span>View</span>
                </a>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Works;