import { useState } from "react";
import "./ProductGallery.css";

export default function ProductGallery({ images }) {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % images.length);
  const prev = () =>
    setIndex((index - 1 + images.length) % images.length);

  return (
    <div className="gallery">
      <button onClick={prev} className="arrow left">‹</button>
      <img src={images[index]} alt="Product view" />
      <button onClick={next} className="arrow right">›</button>
    </div>
  );
}
