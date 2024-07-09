const products = [
  { name: "Laptop", price: 1000, category: "Electronics" },
  { name: "Shirt", price: 50, category: "Clothing" },
  { name: "Phone", price: 500, category: "Electronics" },
  { name: "Shoes", price: 100, category: "Footwear" },
];

function isElectronics(product) {
  return product.category === "Electronics";
}

const electronics = products.filter(isElectronics);

console.log(electronics);
