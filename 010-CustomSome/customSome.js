function customSome(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}

// Example usage
const sampleArray = [1, 2, 3, 4, 5];

function isEven(num) {
  console.log(num % 2 === 0);
}

customSome(sampleArray, isEven);
