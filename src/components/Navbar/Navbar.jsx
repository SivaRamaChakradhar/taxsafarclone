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
          <a href="/">Home</a>
          <a href="">Services</a>
          <a href="">About</a>
          <a href="">Contact</a>
        </nav>

        <div className="nav-actions">
          <Link className="btn btn-ghost" to="/login" onClick={closeMenu}>
            Login
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
        <nav className="mobile-nav-links" aria-label="Mobile Main">
          <a href="" onClick={closeMenu}>Home</a>
          <a href="" onClick={closeMenu}>Services</a>
          <a href="" onClick={closeMenu}>About</a>
          <a href="" onClick={closeMenu}>Contact</a>
        </nav>

        <div className="mobile-nav-buttons">
          <Link className="btn btn-ghost" to="/login" onClick={closeMenu}>
            Login
          </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar
