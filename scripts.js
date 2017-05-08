function getTriangleArea(a, h) {
    if (a <= 0 || h <= 0) {
        return ('Nieprawidlowe dane');
    }
        return a * h / 2;
}

getTriangleArea();

var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(0, 15);
var triangle3Area = getTriangleArea(-4, 15);

console.log("First triangle:", triangle1Area);
console.log("Second triangle:", triangle2Area);
console.log("Third triangle:", triangle3Area);

