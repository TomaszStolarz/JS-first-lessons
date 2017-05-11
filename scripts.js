var text = "Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.";
console.log(text);

var animal = "zielone słonie";
console.log(animal);

var animalUpperCased = animal.toUpperCase();
console.log(animalUpperCased);


// Zrób tak żeby zamiast Papug, zamieniany był zawsze pierwszy wyraz zmiennej text - bez względu na to co tam będzie. Możesz użyć do tego metody split (google -> "mdn split")

var firstWord = text.split(" ");
var textReplace = text.replace(firstWord[0], animalUpperCased);
console.log(textReplace);


// Twój program zadziała tylko dla tego konkretnego zdania. Jeśli text ulegnie zmienie, to już nie wyświetlisz idealnie połowy tekstu. Spróbuj zrobić to tak żeby tekst dzielić na pół bez względu na to jak długi on będzie.

var halfLength = textReplace.length/2;

console.log("dlugosc polowy zmiennej textReplace:", halfLength);

var partOfTextReplace = textReplace.slice(0, halfLength);
console.log(partOfTextReplace);




