
import { useParams, Link } from "react-router-dom";
import products from "../data/products";
import "./Category.css";

export default function Category() {
  const { category } = useParams();

  const filtered = products.filter(
    (product) => product.category === category
  );

  const categoryTitle = category
    .replace(/-/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());

  return (
    <main className="category-page">
      <h2 className="category-heading">{categoryTitle}</h2>

      {filtered.length === 0 ? (
        <p className="empty-category">
          No products available in this category yet.
        </p>
      ) : (
        <div className="product-grid">
          {filtered.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="product-card"
            >
              <img
                className="product-card-image"
                src={product.images[0]}
                alt={product.name}
              />

              <h4>{product.name}</h4>
              <p>{product.price}</p>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
