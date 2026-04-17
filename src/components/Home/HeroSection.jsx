import { Link } from 'react-router-dom'
import heroImage from '../../assets/taxsafarimages.png'

function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-copy">
        <h1>Smart Tax and Compliance Solutions</h1>
        <p>
          Simplify your GST, ITR, and business registrations with expert
          support.
        </p>

        <div className="hero-buttons">
          <Link className="btn btn-primary" to="/register">
            Get Started
          </Link>
          <Link className="btn btn-outline" to="/login">
            Book Consultation
          </Link>
        </div>
      </div>

      <div className="hero-art">
        <img
          className="hero-home-image"
          src={heroImage}
          alt="Tax expert assisting a client"
        />
      </div>
    </section>
  )
}

export default HeroSection
