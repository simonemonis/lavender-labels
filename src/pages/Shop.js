
import { Link } from "react-router-dom";
import "./Shop.css";

import topsImage from "../assets/categories/tops.jpg";
import shirtsImage from "../assets/categories/shirts.jpg";
import trousersImage from "../assets/categories/trousers.jpg";
import coOrdsImage from "../assets/categories/co-ords.jpg";

const categories = [
  { name: "Tops", slug: "tops", image: topsImage },
  { name: "Shirts", slug: "shirts", image: shirtsImage },
  { name: "Trousers", slug: "trousers", image: trousersImage },
  { name: "Co-ords", slug: "co-ords", image: coOrdsImage },
  { name: "Blazers", slug: "blazers", comingSoon: true },
  { name: "Dresses", slug: "dresses", comingSoon: true },
];

export default function Shop() {
  return (
    <main className="shop-page">
      <h2 className="shop-title">Shop</h2>

      <div className="shop-grid">
        {categories.map((cat) => (
          <div className="shop-card" key={cat.slug}>
            {cat.comingSoon ? (
              <div className="shop-placeholder coming-soon">
                <span>{cat.name}</span>
                <small>Coming Soon</small>
              </div>
            ) : (
              <Link to={`/shop/${cat.slug}`}>
                <img
                  className="shop-category-image"
                  src={cat.image}
                  alt={cat.name}
                />
              </Link>
            )}

            <p>{cat.name}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
