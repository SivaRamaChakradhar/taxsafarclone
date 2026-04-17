const steps = [
  {
    number: '1',
    title: 'Choose Service',
    description: 'Select the service you need.',
  },
  {
    number: '2',
    title: 'Submit Details',
    description: 'Provide your information online.',
  },
  {
    number: '3',
    title: 'Get Expert Support',
    description: 'Our experts handle the rest.',
  },
]

function AboutSection() {
  return (
    <section className="process-section" id="about">
      <div className="section-header">
        <h2>How It Works</h2>
        <p>Simple, fast, and hassle-free process</p>
      </div>

      <div className="process-grid">
        {steps.map((step) => (
          <article className="step-card" key={step.number}>
            <div className="step-number">{step.number}</div>
            <div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default AboutSection
