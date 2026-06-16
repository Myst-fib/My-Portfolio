import { FiMapPin, FiBook, FiBriefcase, FiGlobe } from 'react-icons/fi';
import './About.css';

const SKILLS = [
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
  {
    label: 'Figma',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
  },
  {
    label: 'Tailwind',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
  },
];



const INFO_CARDS = [
  {
    icon: <FiMapPin aria-hidden="true" />,
    label: 'Location',
    value: 'Cebu City, Philippines',
    sub: 'Open to remote work worldwide',
  },
  {
    icon: <FiBook aria-hidden="true" />,
    label: 'Education',
    value: 'BS Information Technology',
    sub: '4th Year · Expected Graduation 2027',
  },
  {
    icon: <FiBriefcase aria-hidden="true" />,
    label: 'Status',
    value: 'Frontend Developer · Freelance',
    sub: 'Available for new projects',
  },
  {
    icon: <FiGlobe aria-hidden="true" />,
    label: 'Languages',
    value: 'Filipino · English',
    sub: 'Professional proficiency in both',
  },
];

function About() {
  return (
    <section id="about" className="about">
      <div className="about__glow" aria-hidden="true" />

      <div className="container about__inner">

        {/* ── Top: bio + quick info ── */}
        <div className="about__top">

          {/* Left — Header + bio */}
          <div className="about__header">
            <span className="about__eyebrow">About me</span>
            <h2 className="about__title">
              <span className="about__anim">Developer</span> by skill,<br />
              designer by <span className="about__anim">heart</span>.
            </h2>
            <p className="about__bio">
              A 4th Year BS Information Technology student, a frontend developer and UI/UX designer focused on
              building clean, functional interfaces. I combine code and design
              thinking to ship products that are both beautiful and reliable.
              <br /><br />
              I thrive at the intersection of design and development — where wireframes become real components and
              good ideas ship. Currently looking to collaborate on projects that challenge both sides of my skillset.
            </p>
          </div>

          {/* Right — Info Cards */}
          <div className="about__right">
            <h3 className="about__block-title">
              <span className="about__block-line" aria-hidden="true" />
              Quick Info
            </h3>
            <div className="about__cards">
              {INFO_CARDS.map((card) => (
                <div className="about__card" key={card.label}>
                  <div className="about__card-icon">{card.icon}</div>
                  <div className="about__card-body">
                    <span className="about__card-label">{card.label}</span>
                    <strong className="about__card-value">{card.value}</strong>
                    <span className="about__card-sub">{card.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ── Bottom: tech stack + stats ── */}
        <div className="about__bottom">

          {/* Skills grid */}
          <div>
            <h3 className="about__block-title">
              <span className="about__block-line" aria-hidden="true" />
              Tech Stack
            </h3>
            <div className="about__skills">
              {SKILLS.map((skill) => (
                <div className="about__skill" key={skill.label}>
                  <div className="about__skill-icon">
                    <img src={skill.img} alt={skill.label} loading="lazy" />
                  </div>
                  <span className="about__skill-label">{skill.label}</span>
                </div>
              ))}
            </div>
          </div>


        </div>

      </div>
    </section>
  );
}

export default About;