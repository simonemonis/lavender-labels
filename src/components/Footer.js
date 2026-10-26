import "./Footer.css";
import logo from "../assets/logo1.png";
import messageIcon from "../assets/message.png";
import callIcon from "../assets/call.png";
import instagramIcon from "../assets/instagram.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer" aria-label="Footer">
      <div className="footer-container">

        {/* Logo */}
        <div className="footer-section footer-logo">
          <img src={logo} alt="Lavender Labels logo" />
        </div>

        {/* Shop */}
        <div className="footer-section">
          <h4>Shop</h4>
          <p className="footer-muted">Categories coming soon</p>
        </div>

        {/* Navigation */}
        <ul>
  <li><Link to="/">Home</Link></li>
  <li><Link to="/shop">Shop Now</Link></li>
  <li><Link to="/about">About</Link></li>
  <li><Link to="/contact">Contact</Link></li>
</ul>


        {/* Contact */}
        <div className="footer-section">
          <h4>Contact</h4>

          <p className="footer-contact">
            <img src={messageIcon} alt="" aria-hidden="true" />
            +971 52 202 7442
          </p>

          <p className="footer-contact">
            <img src={callIcon} alt="" aria-hidden="true" />
            +971 55 459 7034
          </p>

          <a
            href="https://www.instagram.com/thelavenderlabels/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-instagram"
          >
            <img src={instagramIcon} alt="" aria-hidden="true" />
            @thelavenderlabels
          </a>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="footer-bottom">
        <p>Designed with love 🤍</p>
        <p>© 2026 Lavender Labels. All rights reserved.</p>
      </div>
    </footer>
  );
}
