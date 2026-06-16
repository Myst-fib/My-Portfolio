import HeroBackground from './HeroBackground';
import profileImg from '../assets/profile.jpg';
import './Hero.css';

// ── Replace this with your actual image import ────────────────────────────
// Option A – public folder:  use src="/profile.jpg" directly in JSX below
// Option B – src/assets:     uncomment the line below
// import profileImg from './assets/profile.jpg';

const STATS = [
  { value: '2+', label: 'Projects shipped' },
  { value: 'End-to-End', label: 'Delivery' },
  { value: '2+ yrs', label: 'Designing' },
];

// CDN logo images from devicons (official, high-quality PNGs)
const TECH_ICONS = [
  {
    label: 'React',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    label: 'JavaScript',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    label: 'HTML5',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  },
  {
    label: 'CSS3',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  },
];

function Hero() {
  return (
    <section id="top" className="hero">
      <HeroBackground />

      <div className="container hero__inner">
        <div className="hero__left">
          <div className="hero__tag">
            <span className="hero__tag-dot" aria-hidden="true"></span>
            Available for internship and freelance work
          </div>

          <p className="hero__greeting">
            Hey, I am <span className="hero__name">Patrick</span>
          </p>

          <h1 className="hero__title">
            Frontend Dev
            <br />& UI/UX Designer
          </h1>

          <p className="hero__lede">
            I bridge design and engineering — building interfaces that look
            intentional, perform reliably, and are built to last. When something
            breaks, I fix it.
          </p>

          <div className="hero__actions">
            <a href="#contact" className="btn btn--primary">
              Hire me
            </a>
            <a href="#contact" className="btn btn--icon" aria-label="Send message">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
          </div>

          <div className="hero__stats">
            {STATS.map((s) => (
              <div className="hero__stat" key={s.label}>
                <span className="hero__stat-value">{s.value}</span>
                <span className="hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero__right">
          <div className="hero__avatar-wrap">
            <div className="hero__avatar-ring" aria-hidden="true"></div>
            <div className="hero__avatar-ring hero__avatar-ring--2" aria-hidden="true"></div>

            <div className="hero__avatar">
              <img
                src={profileImg}
                alt="Patrick"
                className="hero__avatar-img"
              />
            </div>

            <div className="hero__tech-icons">
              {TECH_ICONS.map((icon, i) => (
                <div
                  className={`hero__tech-icon hero__tech-icon--${i + 1}`}
                  key={icon.label}
                  title={icon.label}
                >
                  <img
                    src={icon.img}
                    alt={icon.label}
                    className="hero__tech-icon-img"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Hero;