const fruits = [
  "apple",
  "banana",
  "orange",
  "banana",
  "banana",
  "banana",
  "orange",
  "orange",
  "banana",
  "apple",
  "orange",
  "banana",
  "banana",
  "banana",
  "banana",
  "orange",
  "banana",
  "apple",
  "orange",
  "banana",
  "banana",
];
const fruitCount = fruits.reduce((accumulator, currentValue) => {
  accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
  return accumulator;
}, {});
console.log(fruitCount); // Output: { apple: 2, banana: 3, orange: 2 }
