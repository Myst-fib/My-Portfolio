import { FiPenTool, FiCode, FiMonitor } from 'react-icons/fi';
import './Services.css';

const SERVICES = [
  {
    id: 'uiux',
    index: '01',
    icon: <FiPenTool aria-hidden="true" />,
    title: 'UI/UX Design',
    summary: 'Interfaces that make sense.',
    description:
      'I design clean, user-centered interfaces using Figma — from wireframes and user flows to polished high-fidelity mockups. Every layout decision is grounded in usability, not just aesthetics.',
    deliverables: ['Wireframes', 'Hi-fi Mockups', 'User Flows', 'Figma Prototypes'],
  },
  {
    id: 'frontend',
    index: '02',
    icon: <FiCode aria-hidden="true" />,
    title: 'Frontend Development',
    summary: 'Designs turned into real code.',
    description:
      'I build responsive, accessible interfaces using React, JavaScript, HTML, and CSS. I focus on writing clean, maintainable code that accurately translates design into working components.',
    deliverables: ['React Components', 'Responsive Layouts', 'CSS Animations', 'Clean Codebase'],
  },
  {
    id: 'responsive',
    index: '03',
    icon: <FiMonitor aria-hidden="true" />,
    title: 'Responsive Web Design',
    summary: 'Works on every screen size.',
    description:
      'I ensure every project looks and functions well across devices — mobile, tablet, and desktop. Fluid layouts, proper breakpoints, and tested across screen sizes are standard in every build.',
    deliverables: ['Mobile-first Layout', 'Cross-device Testing', 'Fluid Grids', 'Breakpoint Design'],
  },
];

function Services() {
  return (
    <section id="services" className="services">
      <div className="services__glow" aria-hidden="true" />

      <div className="container services__inner">

        {/* ── Header ── */}
        <div className="services__header">
          <span className="services__eyebrow">Services</span>
          <h2 className="services__title">
            What I can <span className="services__anim">do for you</span>.
          </h2>
          <p className="services__subtitle">
            Student-built, but seriously considered. Every service reflects real skills
            practiced through coursework and personal projects.
          </p>
        </div>

        {/* ── Cards ── */}
        <div className="services__grid">
          {SERVICES.map((svc) => (
            <article className="services__card" key={svc.id}>

              {/* Index */}
              <span className="services__card-index">{svc.index}</span>

              {/* Icon */}
              <div className="services__card-icon">{svc.icon}</div>

              {/* Title + summary */}
              <h3 className="services__card-title">{svc.title}</h3>
              <p className="services__card-summary">{svc.summary}</p>

              {/* Divider */}
              <div className="services__card-divider" aria-hidden="true" />

              {/* Description */}
              <p className="services__card-desc">{svc.description}</p>

              {/* Deliverables */}
              <ul className="services__deliverables" aria-label="What's included">
                {svc.deliverables.map((item) => (
                  <li className="services__deliverable" key={item}>
                    <span className="services__deliverable-dot" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;