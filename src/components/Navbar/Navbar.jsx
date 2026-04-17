import { Link } from 'react-router-dom'
import { useState } from 'react'
import brandLogo from '../../assets/taxsafar_logo.png'
import './Navbar.css'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <header className="topbar">
        <Link className="brand" to="/" aria-label="Taxsafar Home" onClick={closeMenu}>
          <img className="brand-logo" src={brandLogo} alt="Taxsafar" />
        </Link>

        <nav className="nav-links" aria-label="Main">
          <a href="/#home">Home</a>
          <a href="/#services">Services</a>
          <a href="/#about">About</a>
          <a href="/#contact">Contact</a>
        </nav>

        <div className="nav-actions">
          <Link className="btn btn-ghost" to="/login">
            Login
          </Link>
          <Link className="btn btn-primary" to="/register">
            Get Started
          </Link>
        </div>

        <button
          className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
          type="button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      {isMenuOpen && (
        <div className="mobile-menu-overlay" onClick={closeMenu} />
      )}
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <nav className="mobile-nav-links">
          <a href="/#home" onClick={closeMenu}>Home</a>
          <a href="/#services" onClick={closeMenu}>Services</a>
          <a href="/#about" onClick={closeMenu}>About</a>
          <a href="/#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <div className="mobile-nav-buttons">
          <Link className="btn btn-ghost" to="/login" onClick={closeMenu}>
            Login
          </Link>
          <Link className="btn btn-primary" to="/register" onClick={closeMenu}>
            Get Started
          </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar
