// function checkOnClickEvent (n) {
//     console.log(n);
// }

var buttonElem = document.getElementById('js-addElem');
var list = document.getElementById('list');

buttonElem.addEventListener('click', function() {

    var element = document.createElement('li');

    element.innerHTML = 'item' + itemCount;
    var li = document.getElementsByTagName('li'); 
    var liCount = list.length;
    console.log(liCount);
    
    var keywords = ['item']
    var keywordsArray = keywords.split(', ');
    var itemCount = keywords.replace ('0', liCount);

    list.appendChild(element);
});



// var li = document.getElementsByTagName('li'); 
// console.log(itemsByTagName);



// function checkOnclickEvent(param) {
//      console.log(param); 
//     } 
// var inputElem = document.getElementById('js-inputValue'), 
//     imageElem = document.getElementById('js-image'); 
    
// imageElem.addEventListener('click', function(e) { 
//     checkOnclickEvent('image został kliknięty') 
// }); 

// inputElem.addEventListener('keypress', function(e) { 
//     e.target.value += ' test '; 
// });