const people = [
  { name: "Ariel", age: 25 },
  { name: "Janine", age: 22 },
  { name: "Jimmy", age: 31 },
];

console.log(people);

people.forEach(function (person) {
  person.age += 1; // Increase each person's age by 1
});

console.log(people);
