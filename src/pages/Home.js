import "./Home.css";
import butterfly from "../assets/butterfly.png"; // adjust path if needed

export default function Home() {
  return (
    <main id="home">

      <section className="hero">
        <div
          className="image-placeholder"
          role="img"
          aria-label="Hero banner placeholder"
        >
          Image Placeholder
        </div>
      </section>

      {/* Butterfly Layer */}
      <div className="butterfly-layer">
        <img
          src={butterfly}
          alt=""
          className="butterfly butterfly-left"
        />
        <img
          src={butterfly}
          alt=""
          className="butterfly butterfly-right"
        />
      </div>

      <section className="brand-box">
  <h1>Lavender Labels</h1>
  <p>
    Lavender Labels is a contemporary clothing brand inspired by calm tones,
    soft silhouettes, and effortless elegance for everyday wear.
  </p>

  <button className="shop-btn">Shop Now</button>
</section>


    </main>
  );
}
