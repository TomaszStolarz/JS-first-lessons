function displayButtonText(n) {

    var buttonId = document.getElementById('button');
    var buttonClass = buttonId.getElementsByClassName('button');
    console.log(buttonClass);   

    var buttonCount = buttonClass.length;
    console.log('Liczba przyciskow z id button i klasa button:', buttonCount);

    var n = buttonCount;
    
    for ( k = 0; k = n; k++) {
        return alert(button.innerText);
    }
}

displayButtonText();

