
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import products from "../data/products";
import SizeChart from "../components/SizeChart";
import "./Product.css";

export default function Product() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  const [showChart, setShowChart] = useState(false);
  const [size, setSize] = useState("");

  if (!product) {
    return (
      <main className="product-page">
        <h2>Product not found</h2>
        <Link to="/shop">Back to Shop</Link>
      </main>
    );
  }

  return (
    <main className="product-page">
      <div className="product-image-placeholder">
        <span>Product Image</span>
      </div>

      <div className="product-info">
        <h1>{product.name}</h1>
        <p className="product-price">{product.price}</p>

        <h3>Select Size</h3>
        <div className="sizes">
          {product.sizes?.map((s) => (
            <button
              key={s}
              type="button"
              className={size === s ? "active" : ""}
              onClick={() => setSize(s)}
            >
              {s}
            </button>
          ))}
        </div>

        <p
          className="size-link"
          onClick={() => setShowChart(true)}
        >
          Size Chart
        </p>

        {size && <p>Selected size: {size}</p>}
      </div>

      {showChart && (
        <SizeChart onClose={() => setShowChart(false)} />
      )}
    </main>
  );
}
