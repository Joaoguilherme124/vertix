import { useState } from "react";
import { motion } from "framer-motion";

import {
  ArrowUpRight,
  ArrowRight,
  Menu,
  X,
  Monitor,
  Zap,
  Code2,
  Check,
  Sparkles,
  MessageCircle,
  MousePointer2,
  Layers3,
  ShieldCheck,
  Hexagon,
  Triangle,
  Circle,
  Diamond,
  Asterisk,
} from "lucide-react";

import "./App.css";
import airflowPreview from "./assets/airflow-climate.png";

const CONTACT_EMAIL = "hello@vertix.co.uk";
const AIRFLOW_DEMO_URL = "https://airflow-climate.vercel.app/";

const services = [
  {
    icon: Monitor,
    number: "01",
    title: "Website Design",
    description:
      "Premium websites for HVAC and service companies, designed to look professional and convert visitors into booked jobs.",
    tags: ["Custom Design", "Responsive", "User Experience"],
  },
  {
    icon: Code2,
    number: "02",
    title: "Web Development",
    description:
      "Fast, reliable and SEO-ready websites built to perform on every device — from first click to enquiry.",
    tags: ["Performance", "Development", "SEO Ready"],
  },
  {
    icon: Zap,
    number: "03",
    title: "Business Automation",
    description:
      "Smarter lead capture and follow-up so heating, cooling and plumbing businesses never miss an enquiry.",
    tags: ["Lead Capture", "Automation", "AI Solutions"],
  },
];

const projects = [
  {
    number: "01",
    name: "Airflow Climate",
    category: "HVAC WEBSITE CONCEPT",
    description:
      "A premium London HVAC website built to show how heating, cooling and ventilation companies can look credible online and convert visitors into enquiries.",
    className: "project-airflow",
    label: "AIRFLOW",
    sublabel: "Heating · Cooling · Ventilation · London",
    image: airflowPreview,
    liveUrl: AIRFLOW_DEMO_URL,
    featured: true,
  },
  {
    number: "02",
    name: "Nexa Heating",
    category: "HEATING WEBSITE CONCEPT",
    description:
      "A clean and professional website concept focused on generating enquiries.",
    className: "project-nexa",
    label: "NEXA",
    sublabel: "Heating & Plumbing",
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "We learn about your business, your customers and your goals.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We create a website tailored to your brand and your audience.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "We bring the design to life with responsive and modern development.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We publish your website and help you take the next step online.",
  },
];

const trustedMarks = [
  { icon: Hexagon, label: "Heating" },
  { icon: Triangle, label: "Cooling" },
  { icon: Circle, label: "Ventilation" },
  { icon: Diamond, label: "Plumbing" },
  { icon: Asterisk, label: "Servicing" },
];

function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Services", "#services"],
    ["Our Work", "#work"],
    ["About", "#about"],
    ["Contact", "#contact"],
  ];

  return (
    <header className="navbar">
      <div className="container nav-content">
        <a className="logo" href="#home" onClick={() => setOpen(false)}>
          VERTIX<span>.</span>
        </a>

        <nav className={open ? "nav-links active" : "nav-links"}>
          {links.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="nav-mobile-cta"
            onClick={() => setOpen(false)}
          >
            Free Consultation <ArrowUpRight size={16} />
          </a>
        </nav>

        <a href="#contact" className="nav-cta">
          Free Consultation <ArrowUpRight size={16} />
        </a>

        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid" />
      <div className="hero-glow" />
      <div className="hero-glow-right" />
      <div className="container hero-layout">
        <div className="hero-copy">
          <motion.div
            className="eyebrow"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow-pill">
              <span className="status-dot" />
              Premium web studio · United Kingdom
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
          >
            Websites that turn
            <br />
            visitors into
            <br />
            <span>customers.</span>
          </motion.h1>

          <motion.div
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <p>
              We help UK service businesses build a stronger online presence
              with premium websites, smart technology and lead generation
              solutions.
            </p>
          </motion.div>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <a href="#contact" className="button button-primary">
              Get Your Free Consultation <ArrowUpRight size={18} />
            </a>

            <a href="#work" className="button button-secondary">
              Explore Our Work <ArrowRight size={17} />
            </a>
          </motion.div>

          <motion.div
            className="hero-note"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <ShieldCheck size={16} />
            <span>Specialising in websites for HVAC and service businesses.</span>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.25 }}
        >
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />

          <div className="visual-card">
            <div className="visual-topbar">
              <div className="window-dots">
                <i />
                <i />
                <i />
              </div>
              <span>HVAC WEBSITE PREVIEW</span>
            </div>

            <div className="visual-content">
              <div className="visual-mini-label">
                <span className="status-dot" />
                BUILT TO CONVERT
              </div>

              <div className="visual-headline">
                <span>More booked jobs.</span>
                <strong>Fewer missed calls.</strong>
              </div>

              <div className="visual-lines">
                <i />
                <i />
              </div>

              <div className="visual-button">
                Explore more <ArrowUpRight size={13} />
              </div>

              <div className="visual-bottom">
                <div>
                  <span>DESIGN</span>
                  <strong>01</strong>
                </div>
                <div>
                  <span>DEVELOPMENT</span>
                  <strong>02</strong>
                </div>
                <div>
                  <span>GROWTH</span>
                  <strong>03</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="floating-tag tag-top">
            <Sparkles size={17} />
            <span>Premium UK studio</span>
          </div>
        </motion.div>
      </div>

      <div className="container trusted-strip">
        <p>Built for UK heating, cooling and plumbing businesses</p>
        <div className="trusted-logos">
          {trustedMarks.map(({ icon: Icon, label }) => (
            <div className="trusted-logo" key={label}>
              <Icon size={16} />
              {label}
            </div>
          ))}
        </div>
      </div>

      <div className="container hero-footer">
        <span>SCROLL TO EXPLORE</span>
        <div className="scroll-line" />
        <span>01 / 04</span>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="container">
        <Reveal>
          <div className="section-heading">
            <div>
              <span className="section-label">WHAT WE DO</span>
              <h2>
                Strategy. Design.
                <br />
                <span>Build. Scale.</span>
              </h2>
            </div>

            <p>
              Everything a UK service business needs to look credible online
              and turn website traffic into real customer enquiries.
            </p>
          </div>
        </Reveal>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal key={service.number} delay={index * 0.12}>
                <article className="service-card">
                  <div className="service-card-top">
                    <div className="service-icon">
                      <Icon size={23} />
                    </div>
                    <span>{service.number}</span>
                  </div>

                  <h3>{service.title}</h3>
                  <p>{service.description}</p>

                  <div className="service-tags">
                    {service.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <a href="#contact" className="service-link">
                    Discuss your project <ArrowUpRight size={17} />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section className="section work-section" id="work">
      <div className="container">
        <Reveal>
          <div className="section-heading">
            <div>
              <span className="section-label">OUR WORK</span>
              <h2>
                See the standard
                <br />
                <span>we build to.</span>
              </h2>
            </div>

            <p>
              Live conceptual demos for HVAC businesses, so you can
              experience the type of website Vertix can develop.
            </p>
          </div>
        </Reveal>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <Reveal
              key={project.number}
              delay={index * 0.15}
              className={project.featured ? "project-featured" : ""}
            >
              <article
                className={`project-card${project.featured ? " is-featured" : ""}`}
              >
                <div
                  className={`project-preview ${project.className}${
                    project.image ? " has-shot" : ""
                  }`}
                >
                  <div className="preview-browser">
                    <div className="preview-dots">
                      <i />
                      <i />
                      <i />
                    </div>
                    <span>
                      {project.liveUrl ? "LIVE CONCEPT DEMO" : "WEBSITE CONCEPT"}
                    </span>
                  </div>

                  {project.image ? (
                    <img
                      className="preview-shot"
                      src={project.image}
                      alt={`${project.name} website concept preview`}
                    />
                  ) : (
                    <>
                      <div className="preview-hero">
                        <div className="preview-logo">{project.label}</div>
                        <span className="preview-small">{project.sublabel}</span>

                        <h3>
                          Comfort.
                          <br />
                          <span>Without compromise.</span>
                        </h3>

                        <div className="preview-line" />

                        <span className="preview-cta">
                          Explore our services <ArrowUpRight size={12} />
                        </span>
                      </div>

                      <div className="preview-decoration">
                        <MousePointer2 size={32} />
                      </div>
                    </>
                  )}

                  <span className="concept-badge">Conceptual demo</span>
                </div>

                <div className="project-info">
                  <div>
                    <span className="project-category">{project.category}</span>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    {project.liveUrl ? (
                      <a
                        className="project-live"
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Live Demo <ArrowUpRight size={16} />
                      </a>
                    ) : null}
                  </div>

                  <span className="project-number">{project.number}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="portfolio-note">
          Airflow Climate is a conceptual demonstration of the websites we
          build for HVAC companies. It is not a real client and does not
          represent a trading business. Nexa Heating is an illustrative
          concept only.
        </p>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container about-layout">
        <Reveal className="about-copy">
          <span className="section-label">ABOUT VERTIX</span>

          <h2>
            More than a website.
            <br />
            <span>A growth partner.</span>
          </h2>

          <p>
            Vertix is a premium web design and development studio serving
            UK businesses. We believe every company deserves an online
            presence that reflects the quality of its work.
          </p>

          <p>
            We are starting with HVAC companies — heating, cooling and
            plumbing firms that need more enquiries, not just a prettier
            website. Thoughtful design, modern development and smart
            lead capture work together to convert visitors into customers.
          </p>

          <a href="#contact" className="text-link">
            Let's build something great <ArrowUpRight size={18} />
          </a>
        </Reveal>

        <Reveal delay={0.15} className="about-visual">
          <div className="about-icon">
            <Layers3 size={42} />
          </div>

          <div className="about-visual-text">
            <span>OUR APPROACH</span>
            <h3>Clarity in design.</h3>
            <h3>Purpose in every detail.</h3>
          </div>

          <div className="about-cross">V.</div>
        </Reveal>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="section process-section">
      <div className="container">
        <Reveal>
          <div className="section-heading">
            <div>
              <span className="section-label">HOW WE WORK</span>
              <h2>
                Simple process.
                <br />
                <span>Strong results.</span>
              </h2>
            </div>

            <p>
              A clear and collaborative process from the first
              conversation to your website going live.
            </p>
          </div>
        </Reveal>

        <div className="process-grid">
          {process.map((item, index) => (
            <Reveal key={item.number} delay={index * 0.1}>
              <div className="process-item">
                <span className="process-number">{item.number}</span>
                <div className="process-check">
                  <Check size={19} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <Reveal>
          <div className="contact-card">
            <div className="contact-glow" />

            <div className="contact-content">
              <span className="section-label">LET'S WORK TOGETHER</span>

              <h2>
                Ready to build
                <br />
                <span>something better?</span>
              </h2>

              <p>
                Tell us about your HVAC or service business and what you
                want to achieve. Your first consultation is free.
              </p>

              <a
                href={`mailto:${CONTACT_EMAIL}?subject=Free%20consultation%20request`}
                className="button button-primary"
              >
                Get Your Free Consultation <ArrowUpRight size={18} />
              </a>
            </div>

            <div className="contact-decoration">
              <MessageCircle size={90} strokeWidth={0.8} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-main">
        <div>
          <a className="logo footer-logo" href="#home">
            VERTIX<span>.</span>
          </a>
          <p>Premium websites for UK HVAC and service businesses.</p>
        </div>

        <div className="footer-links">
          <a href="#services">Services</a>
          <a href="#work">Our Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#home" className="back-top">
          Back to top <ArrowUpRight size={16} />
        </a>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Vertix. All rights reserved.</span>
        <span>Designed with purpose.</span>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Work />
        <About />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
