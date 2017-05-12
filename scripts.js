function drawtree(h) {

    if (h <=0) {
        console.log('Nieprawidłowa wartość - parament h powinien być dodatni');
    } else {
        for (var i = 1; i <= h; i++) {
            var star = "";

            for (var j = 1; j <= i; j++) {
                star += "*";
            }
            console.log(star);
        }
    }
 }

drawtree(10);

