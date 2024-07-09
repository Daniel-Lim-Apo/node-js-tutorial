const products = [
  { name: "Laptop", rating: 4.5, category: "Electronics" },
  { name: "Phone", rating: 4.0, category: "Electronics" },
  { name: "Shirt", rating: 3.8, category: "Clothing" },
  { name: "Tablet", rating: 4.7, category: "Electronics" },
  { name: "Dress", rating: 4.8, category: "Clothing" },
  { name: "TV", rating: 1.0, category: "Electronics" },
];

const highlyRatedOrElectronics = products.filter(
  (product) => product.category === "Electronics" || product.rating > 4
);

console.log(highlyRatedOrElectronics);

const highlyRatedElectronics = products.filter(
  (product) => product.category === "Electronics" && product.rating > 4
);

console.log(highlyRatedElectronics);
