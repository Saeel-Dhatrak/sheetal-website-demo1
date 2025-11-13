import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <section className="subscribe-section">
        <h3>Subscribe to <span className="accent">DataNotes</span></h3>
        <p>Join 75,000+ curious readers learning to think like data experts. Get weekly lessons, stories, and frameworks from real projects.</p>
        <form className="subscribe-form" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </section>
      <section className="footer-info">
        <div className="social-links">
          {/* Replace # with actual URLs */}
          <a href="#" aria-label="YouTube">YouTube</a>
          <a href="#" aria-label="Instagram">Instagram</a>
          <a href="#" aria-label="GitHub">GitHub</a>
          <a href="#" aria-label="Twitter">Twitter</a>
          <a href="#" aria-label="Discord">Discord</a>
        </div>
        <p>© 2025 DataWithBaraa. All rights reserved.</p>
      </section>
    </footer>
  );
}

export default Footer;
