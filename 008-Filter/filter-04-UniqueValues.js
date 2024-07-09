const numbers = [
  1, 2, 2, 10, 3, 4, 10, 3, 4, 4, 5, 6, 7, 7, 8, 3, 4, 4, 5, 9, 10,
];

const uniqueNumbers = numbers.filter(
  (value, index, self) => self.indexOf(value) === index
);

console.log(uniqueNumbers);
