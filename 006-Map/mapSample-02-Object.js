const users = [
  { name: "Mary", age: 25 },
  { name: "Robert", age: 30 },
  { name: "Christine", age: 35 },
];

const names = users.map((user) => user.name);
console.log(names); // ['Mary', 'Robert', 'Christine']

const ages = users.map((user) => user.age - 10);
console.log(ages); // ['Mary', 'Robert', 'Christine']
