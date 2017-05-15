var list = document.getElementById("list");
var addButton = document.getElementById('js-addElem');

addButton.addEventListener('click', function() {
    var liItems = document.getElementsByTagName('li');  
    list.innerHTML += "<li>item " + liItems.length + "</li>";
});
