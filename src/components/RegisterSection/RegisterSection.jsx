import { useState } from 'react'
import './RegisterSection.css'

function RegisterSection() {
  const [isRegistered, setIsRegistered] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsRegistered(true)
  }

  return (
    <section className="register-section" id="register">
      <div className="register-card" aria-labelledby="register-title">
        <h2 id="register-title">Create your account</h2>
        <p>Get started with Taxsafar in just a few steps.</p>

        <form className="register-form" onSubmit={handleSubmit}>
          <label htmlFor="register-name">Full name</label>
          <input
            id="register-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            required
          />

          <label htmlFor="register-email">Email address</label>
          <input
            id="register-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
          />

          <label htmlFor="register-password">Password</label>
          <input
            id="register-password"
            name="password"
            type="password"
            autoComplete="new-password"
            placeholder="Create a password"
            required
          />

          <button className="btn btn-primary register-submit" type="submit">
            Create Account
          </button>

          {isRegistered ? (
            <p className="register-success" role="status">
              Registration request submitted successfully.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  )
}

export default RegisterSection
