const products = [
  { name: "Laptop", brand: "Apple", category: "Electronics" },
  { name: "Phone", brand: "Samsung", category: "Electronics" },
  { name: "Shirt", brand: "Nike", category: "Clothing" },
  { name: "Tablet", brand: "Apple", category: "Electronics" },
];

const appleProducts = products.filter(
  (product) => product.category === "Electronics" && product.brand === "Apple"
);

console.log(appleProducts);
