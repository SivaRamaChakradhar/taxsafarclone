import brandLogo from '../../assets/taxsafar_logo.png'
import './Footer.css'

function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer" id="contact">
      <div className="footer-grid">
        <section className="footer-brand-column" aria-label="Brand and contact">
          <img className="footer-logo" src={brandLogo} alt="Taxsafar" />
          <a className="footer-email" href="mailto:support@taxsafar.com">
            support@taxsafar.com
          </a>
          <div className="footer-pattern" aria-hidden="true" />
          <div className="footer-inline-links">
            <a href="#">Privacy and Terms</a>
            <a href="#">Contact Us</a>
          </div>
        </section>

        <section className="footer-link-column" aria-label="Services links">
          <h3>Services</h3>
          <a href="#">Return Filing</a>
          <a href="#">GST Registration</a>
          <a href="#">Virtual Accounting</a>
          <a href="#">Consultancy Services</a>
        </section>

        <section className="footer-link-column" aria-label="Company links">
          <h3>Company</h3>
          <a href="#">About Us</a>
          <a href="#">Blogs</a>
          <a href="#">FAQs</a>
          <a href="#">Contact</a>
        </section>

        <section className="footer-link-column" aria-label="Support links">
          <h3>Support</h3>
          <a href="#">Terms of Use</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Payment Policy</a>
          <a href="#">Help Center</a>
        </section>
      </div>

      <div className="footer-bottom-bar">
        <p>&copy; 2026 Taxsafar. All rights reserved.</p>
        <div className="footer-social-links">
          <a href="https://www.linkedin.com/company/107509228/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
            </svg>
          </a>
          <a href="https://wa.me/919784818899" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" title="WhatsApp">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M17.6 6.32c-1.63-1.6-3.8-2.48-6.1-2.48-4.76 0-8.64 3.87-8.64 8.63 0 1.52.39 3 1.14 4.31L2 22l4.6-1.19c1.26.68 2.67 1.04 4.12 1.04 4.76 0 8.64-3.87 8.64-8.63 0-2.3-.89-4.46-2.51-6.09zM10.72 19.9c-1.28 0-2.53-.33-3.63-.97l-.26-.15-2.69.7.71-2.6-.17-.27c-.71-1.15-1.09-2.47-1.09-3.84 0-3.96 3.22-7.18 7.18-7.18 1.91 0 3.71.75 5.06 2.1 1.35 1.35 2.1 3.15 2.1 5.06 0 3.96-3.22 7.18-7.18 7.18zm3.94-5.38c-.22-.11-1.3-.64-1.5-.71-.22-.08-.38-.11-.53.11-.15.22-.59.71-.72.86-.13.15-.26.17-.48.06-.22-.11-.92-.34-1.75-1.08-.65-.58-1.08-1.29-1.21-1.51-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.39.11-.13.15-.22.22-.37.08-.15.04-.28-.02-.39-.06-.11-.53-1.28-.73-1.75-.19-.45-.39-.39-.53-.39-.14 0-.3-.02-.46-.02-.16 0-.41.06-.63.28-.22.22-.84.82-.84 2 0 1.18.86 2.32 1 2.47.13.15 1.83 2.8 4.43 3.93.62.26 1.1.42 1.48.54.62.2 1.19.17 1.64.1.5-.08 1.53-.62 1.75-1.23.21-.61.21-1.13.15-1.24-.07-.12-.22-.18-.46-.28z"/>
            </svg>
          </a>
          <a href="https://www.google.com/search?q=taxsafar" target="_blank" rel="noopener noreferrer" aria-label="Google" title="Google">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
          </a>
          <a href="https://instagram.com/taxsafar.official" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <rect x="2" y="2" width="20" height="20" rx="4.5" ry="4.5" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="12" cy="12" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
            </svg>
          </a>
        </div>
      </div>

      <button
        className="scroll-top-button"
        type="button"
        aria-label="Scroll to top"
        onClick={handleScrollToTop}
      >
        ↑
      </button>
    </footer>
  )
}

export default Footer
