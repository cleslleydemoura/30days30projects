let lists = document.getElementsByClassName("list");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");

for (list of lists) {
    list.addEventListener("dragstart", function(e){
        let selected = e.target; // No item da lista, adicionei o drag start event (arrastar o elemento), então quando o usuário segurar o elemento para arrastá-lo, o item ficará salvo nesta variável 'let selected'.

        rightBox.addEventListener("dragover", function(e){
            e.preventDefault();
        });

        rightBox.addEventListener("drop", function(e){
            rightBox.appendChild(selected);
            selected = null;
        });
        leftBox.addEventListener("dragover", function(e){
            e.preventDefault();
        });

        leftBox.addEventListener("drop", function(e){
            leftBox.appendChild(selected);
            selected = null;
        });
    })
}