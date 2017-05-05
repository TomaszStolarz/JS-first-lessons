var a = 1;
var b = 2;
var value = (a * a) + (2 * a * b) - (b * b);
console.log(value);

if (value > 0) {
    console.log('wynik dodatni');
} else if (value < 0) {
    console.log('wynik ujemny');
} else {
    console.log('wynik równy zero');
}


/*Stwórz zmienne potrzebne do wykonania działania (a * a) + (2 * a * b) - (b * b) , a jego wynik przypisz do zmiennej value. 

Wyświetl wynik w konsoli, a następnie za pomocą instrukcji warunkowej sprawdź, czy wynik jest dodatni czy ujemny,
a potem wyświetl informację wynik dodatni lub wynik ujemny w konsoli.

Dodaj instrukcję, która sprawdzi, czy wynik jest równy zero i wyświetli tę informację. */