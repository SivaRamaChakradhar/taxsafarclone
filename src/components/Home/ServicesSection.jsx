const services = [
  {
    title: 'GST Filing',
    description: 'File GST returns easily with expert guidance.',
    badge: 'GST',
  },
  {
    title: 'Income Tax',
    description: 'Accurate and fast ITR filing services.',
    badge: 'ITR',
  },
  {
    title: 'Company Registration',
    description: 'Start your business with legal compliance.',
    badge: 'CORP',
  },
]

function ServicesSection() {
  return (
    <section className="services-section" id="services">
      <div className="section-header">
        <h2>Our Services</h2>
        <p>Comprehensive solutions for your business needs</p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <div className="service-icon" aria-hidden="true">
              {service.badge}
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a
              href="#"
              className="learn-link"
              aria-label={`Learn more about ${service.title}`}
            >
              Learn More
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ServicesSection
