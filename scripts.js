// Basic data

var femaleNames = ["Asia", "Kasia", "Ola", "Jola"];
var maleNames = ["Piotrek", "Marek", "Arek", "Jarek"];

console.log("Female names:", femaleNames);
console.log("Male names:", maleNames);

// Concatenation of basic data and verification of a possible duplicate to a new name

var allNames = femaleNames.concat(maleNames);
var newName = "Greta";
var verifyNewName = allNames.indexOf(newName);

console.log("List of all names together:", allNames);
console.log("A new name we would like to add:", newName);
console.log("Verifying if a new name already exists in current table, possible results: \n-1 - a name does not exist \nother number - a name already exists, and this number indicates its' location in table \n \nResult for name", newName, ":", verifyNewName);

// adding new name to final table

function addingNewName() {
    if (verifyNewName === -1) {
        var x = allNames.push(newName);
        console.log("Name", newName, "does not exists and will be added to final list of names.");
    } else {
        console.log("Name", newName, "allready exists and will not be added to final list of names.");
    }
    return console.log("Final list of names:", allNames);
}

addingNewName();


