
import "./Home.css";
import butterfly from "../assets/butterfly.png";
import heroBanner from "../assets/lavender-hero.png";
import { Link } from "react-router-dom";
import CategorySlider from "../components/CategorySlider";

export default function Home() {
  return (
    <main id="home">

      <section className="hero">
        <img
          src={heroBanner}
          alt="Lavender Labels women's fashion collection"
          className="hero-banner"
        />
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
          Lavender Labels is a contemporary clothing brand inspired by
          calm tones, soft silhouettes, and effortless elegance for
          everyday wear.
        </p>

        <Link to="/shop" className="shop-btn">
          Shop Now
        </Link>
      </section>

      <CategorySlider />

    </main>
  );
}
