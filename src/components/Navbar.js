import "./Navbar.css";
import logo from "../assets/logo.png";

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
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#shop">Shop Now</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Social / Contact */}
        <div className="nav-social">
          <a href="https://wa.me/0000000000" aria-label="WhatsApp">WhatsApp</a>
          <a
            href="https://instagram.com/lavenderlabels"
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
