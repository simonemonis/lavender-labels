import "./Contact.css";

export default function Contact() {
  return (
    <main className="contact-page">

      {/* Top Section */}
      <section className="contact-hero">
        <div className="contact-overlay">

          <div className="contact-boxes">
            <div className="contact-box">
              <h3>Email</h3>
              <p className="contact-muted">Business email coming soon</p>
            </div>

            <div className="contact-box">
              <h3>Message</h3>
              <p>+971 52 202 7442</p>
              <p>+971 55 459 7034</p>
            </div>

            <div className="contact-box">
              <h3>Join Us</h3>
              <a
                href="https://www.instagram.com/thelavenderlabels/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @thelavenderlabels
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Divider */}
      <hr className="contact-divider" />

      {/* Contact Form */}
      <section className="contact-form-section">
        <h2>Get in Touch</h2>

        <form className="contact-form" aria-label="Contact form">
          <label>
            Name
            <input type="text" name="name" required />
          </label>

          <label>
            Email
            <input type="email" name="email" required />
          </label>

          <label>
            Message
            <textarea name="message" rows="5" required />
          </label>

          <button type="submit">Send Message</button>
        </form>
      </section>

    </main>
  );
}
