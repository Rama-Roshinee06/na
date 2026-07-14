import { services, servicesIntro } from "../data/content.js";

function ServiceCard({ service }) {
  return (
    <article className="service-card">
      <div>
        <h3 className="service-card__title">{service.title}</h3>
        <p className="service-card__summary">{service.summary}</p>

        <div className="service-card__section">
          <span className="service-card__label">Areas of Focus</span>
          <ul className="service-card__list">
            {service.focus.map((label) => (
              <li key={label}>{label}</li>
            ))}
          </ul>
        </div>

        <div className="service-card__section">
          <span className="service-card__label">Business Impact</span>
          <p className="service-card__impact">{service.impact}</p>
        </div>
      </div>

      <a href="#contact" className="service-card__link">Learn More →</a>
    </article>
  );
}

export default function Services() {
  return (
    <div className="container">
      <div style={{ marginBottom: 56 }}>
        <div className="eyebrow">{servicesIntro.eyebrow}</div>
        <h2 style={{ maxWidth: 720, margin: "0 0 20px", color: "var(--navy)" }}>{servicesIntro.headline}</h2>
        <p className="lede">{servicesIntro.body}</p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
    </div>
  );
}