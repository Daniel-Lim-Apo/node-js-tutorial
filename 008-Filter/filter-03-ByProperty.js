const people = [
  { name: "Joline", age: 25 },
  { name: "Janine", age: 30 },
  { name: "Jimmy", age: 18 },
  { name: "Jacob", age: 20 },
  { name: "Josh", age: 26 },
  { name: "Roger", age: 32 },
  { name: "Smith", age: 17 },
  { name: "Aline", age: 21 },
];

const adults = people.filter((person) => person.age >= 21);

console.log(adults);
