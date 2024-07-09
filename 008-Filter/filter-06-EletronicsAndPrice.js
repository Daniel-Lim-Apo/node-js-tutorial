const products = [
  { name: "Laptop", price: 1000, category: "Electronics" },
  { name: "Shirt", price: 50, category: "Clothing" },
  { name: "Phone", price: 500, category: "Electronics" },
  { name: "Shoes", price: 100, category: "Footwear" },
  { name: "Tablet", price: 600, category: "Electronics" },
  { name: "Computer", price: 3000, category: "Electronics" },
  { name: "Notebook", price: 2300, category: "Electronics" },
];

const expensiveElectronics = products.filter(
  (product) => product.category === "Electronics" && product.price > 500
);

console.log(expensiveElectronics);
