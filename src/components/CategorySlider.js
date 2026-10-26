
import "./CategorySlider.css";
import { Link } from "react-router-dom";

import topsImage from "../assets/categories/tops.jpg";
import shirtsImage from "../assets/categories/shirts.jpg";
import trousersImage from "../assets/categories/trousers.jpg";
import coOrdsImage from "../assets/categories/co-ords.jpg";

const categories = [
  { name: "Tops", path: "/shop/tops", image: topsImage },
  { name: "Shirts", path: "/shop/shirts", image: shirtsImage },
  { name: "Trousers", path: "/shop/trousers", image: trousersImage },
  { name: "Co-ords", path: "/shop/co-ords", image: coOrdsImage }
];

export default function CategorySlider() {
  return (
    <section className="category-section">
      <h2 className="category-title">Shop by Category</h2>

      <div className="category-slider">
        {categories.map((cat) => (
          <Link
            to={cat.path}
            className="category-card"
            key={cat.name}
          >
            <img src={cat.image} alt={cat.name} />
            <span>{cat.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
