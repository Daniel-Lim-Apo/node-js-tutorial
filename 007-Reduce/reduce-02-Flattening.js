const arrayOfArrays = [
  [11, 32],
  [3, 4, 8, 6],
  [15, 63],
];
const flattenedArray = arrayOfArrays.reduce(
  (accumulator, currentValue) => accumulator.concat(currentValue),
  []
);
console.log(flattenedArray);
console.log(flattenedArray.sort());
console.log(flattenedArray.sort((a, b) => a - b));
