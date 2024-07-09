const products = [
  { name: "Laptop", releaseYear: 2021, category: "Electronics" },
  { name: "Phone", releaseYear: 2019, category: "Electronics" },
  { name: "Shirt", releaseYear: 2020, category: "Clothing" },
  { name: "Tablet", releaseYear: 2022, category: "Electronics" },
];

const recentElectronics = products.filter(
  (product) => product.category === "Electronics" && product.releaseYear > 2020
);

console.log(recentElectronics);
