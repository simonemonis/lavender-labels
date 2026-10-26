
const products = [
  // Tops
  ...Array.from({ length: 4 }, (_, i) => ({
    id: String(i + 1),
    name: `Top ${i + 1}`,
    category: "tops",
    price: "Price to be added",
    images: [`/images/top-${i + 1}.jpg`],
    sizes: ["XS", "S", "M", "L", "XL"],
  })),

  // Shirts
  ...Array.from({ length: 4 }, (_, i) => ({
    id: String(i + 5),
    name: `Shirt ${i + 1}`,
    category: "shirts",
    price: "Price to be added",
    images: [`/images/shirt-${i + 1}.jpg`],
    sizes: ["XS", "S", "M", "L", "XL"],
  })),

  // Trousers
  ...Array.from({ length: 4 }, (_, i) => ({
    id: String(i + 9),
    name: `Trousers ${i + 1}`,
    category: "trousers",
    price: "Price to be added",
    images: [`/images/trousers-${i + 1}.jpg`],
    sizes: ["XS", "S", "M", "L", "XL"],
  })),

  // Co-ords
  ...Array.from({ length: 4 }, (_, i) => ({
    id: String(i + 13),
    name: `Co-ord ${i + 1}`,
    category: "co-ords",
    price: "Price to be added",
    images: [`/images/coord-${i + 1}.jpg`],
    sizes: ["XS", "S", "M", "L", "XL"],
  })),
];

export default products;
