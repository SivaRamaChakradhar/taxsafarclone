import brandLogo from '../../assets/taxsafar_logo.png'
import './LoginSection.css'

function LoginSection() {
  return (
    <section className="login-section" id="login">
      <div className="login-visual">
        <img className="login-brand-logo" src={brandLogo} alt="Taxsafar" />
        <p>Your trusted partner for tax filing and compliance.</p>
      </div>

      <div className="login-card" aria-labelledby="login-title">
        <h2 id="login-title">Welcome back</h2>
        <p>Sign in to continue managing your GST, ITR and registrations.</p>

        <form className="login-form" onSubmit={(event) => event.preventDefault()}>
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            placeholder="Enter your password"
            required
          />

          <div className="login-card-actions">
            <label className="remember-toggle">
              <input type="checkbox" name="remember" />
              <span>Remember me</span>
            </label>
            <a href="#">Forgot password?</a>
          </div>

          <button className="btn btn-primary login-submit" type="submit">
            Sign In
          </button>
        </form>
      </div>
    </section>
  )
}

export default LoginSection
