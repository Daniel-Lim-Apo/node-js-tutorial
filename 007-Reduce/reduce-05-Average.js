const numbers = [10, 20, 30, 40, 50, 60];
const average = numbers.reduce((accumulator, currentValue, index, array) => {
  accumulator += currentValue;
  if (index === array.length - 1) {
    return accumulator / array.length;
  }
  return accumulator;
}, 0);
console.log(average);
