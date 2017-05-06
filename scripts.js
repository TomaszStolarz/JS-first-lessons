function getTriangleArea(a, h) {
    if ((a <= 0) || (h <= 0)) {
        console.log('Nieprawidlowe dane');
    } else {
        var triangleArea = a*h/2;
    }
}

// console.log( getTriangleArea(10, 6) );
// console.log( getTriangleArea(7, 8) );
// console.log( getTriangleArea(11, -3) );

getTriangleArea();
document.write(triangleArea);

var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(10, 15);
var triangle3Area = getTriangleArea(10, 15);


// Zrób trzy zmienne, które będą posiadały pole trójkąta, za każdym razem przekazując różne liczby w parametrze. Podpowiedź: var triangle1Area = getTriangleArea(10, 15);