var text = "Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.";
console.log(text);

var animal = "Zielone słonie";
console.log(animal);

var animalUpperCased = animal.toUpperCase();
console.log(animalUpperCased);

var textReplace = text.replace("Papugi", animalUpperCased);
console.log(textReplace);

console.log("dlugosc polowy zmiennej textReplace:", textReplace.length/2);

var partOfTextReplace = textReplace.slice(0, 45);
console.log(partOfTextReplace);

