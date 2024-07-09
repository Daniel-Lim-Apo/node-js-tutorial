const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Tablet", price: 300 },
];

const discountedProducts = products.map((product) => ({
  id: product.id,
  name: product.name,
  price: product.price * 0.8,
}));

console.log(discountedProducts);
