
import "./Navbar.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <nav className="navbar" aria-label="Main navigation">
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="Lavender Labels Logo" />
        </div>

        {/* Navigation Links */}
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/shop">Shop Now</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* Social / Contact */}
        <div className="nav-social">
          <a
            href="https://wa.me/971522027442"
            aria-label="WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>

          <a
            href="https://www.instagram.com/thelavenderlabels/"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </nav>
    </header>
  );
}
