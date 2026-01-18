import "./Navbar.css";

export default function Navbar() {
  return (
    <header>
      <nav className="navbar" aria-label="Main navigation">
        <div className="nav-logo">
          <a href="/" aria-label="Lavender Labels Home">
            Lavender Labels
          </a>
        </div>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#shop">Shop Now</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="nav-social">
          <a href="https://wa.me/0000000000">WhatsApp</a>
          <a href="https://instagram.com/lavenderlabels">Instagram</a>
        </div>
      </nav>
    </header>
  );
}
