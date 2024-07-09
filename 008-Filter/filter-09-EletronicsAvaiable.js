const products = [
  { name: "Laptop", available: true, category: "Electronics" },
  { name: "Phone", available: false, category: "Electronics" },
  { name: "Shirt", available: true, category: "Clothing" },
  { name: "Tablet", available: true, category: "Electronics" },
];

const availableElectronics = products.filter(
  (product) => product.category === "Electronics" && product.available
);

console.log(availableElectronics);
