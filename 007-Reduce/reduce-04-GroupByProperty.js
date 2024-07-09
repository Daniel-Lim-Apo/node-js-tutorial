const people = [
  { name: "Mary", age: 21 },
  { name: "Robert", age: 21 },
  { name: "Christine", age: 23 },
  { name: "David", age: 23 },
  { name: "Edward", age: 25 },
  { name: "Joline", age: 22 },
];
const groupedByAge = people.reduce((accumulator, currentValue) => {
  const age = currentValue.age;
  if (!accumulator[age]) {
    accumulator[age] = [];
  }
  accumulator[age].push(currentValue);
  return accumulator;
}, {});
console.log(groupedByAge);
