var titles = ["It", "Dracula", "Duna", "Dom Quixote"];

console.log(titles);

// Add 1 to the index, becuse the initial is zero
var litlesIndexed = titles.map((title, indice) => `${indice + 1} : ${title}`);

console.log(litlesIndexed);
