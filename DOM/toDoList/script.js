var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var li2 = document.getElementsByTagName("li");

function getInputLength() {
    return input.value.length;
}

function createListElement() {
    var div = document.createElement("div");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
    var removeButton = document.createElement("button");
    removeButton.appendChild(document.createTextNode("Delete"));
    li.appendChild(removeButton);
    removeButton.onclick = removeListItem;
}

function addListItemAfterClick() {
    if (getInputLength() > 0) {
        createListElement();
    }
}

function addListItemAfterKeyPress(event) {
    if (getInputLength() > 0 && event.which === 13) {
        createListElement();
    }
}

function crossOffListItem(item) {
    item.target.classList.toggle("done");
}

function removeListItem(evt) {
    evt.target.parentNode.remove();
}

button.addEventListener("click", addListItemAfterClick);

input.addEventListener("keypress", addListItemAfterKeyPress);

ul.addEventListener("click", crossOffListItem);

removeButton.addEventListener("click", removeListItem);