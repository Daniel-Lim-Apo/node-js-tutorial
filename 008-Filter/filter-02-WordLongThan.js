const words = [
  "antelope",
  "bear",
  "cat",
  "dolphin",
  "elephant",
  "frog",
  "giraffe",
];

const longWords = words.filter((word) => word.length > 5);

console.log(longWords); // Output: ["banana", "cherry", "elderberry"]
