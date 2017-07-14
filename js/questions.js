var input = document.getElementsByTagName("input");
var button = document.getElementsByName("button");
for (var i = 0; i < input.length; i++) {
    for (var j = 0; j < button.length; j++) {
        input[i].onkeydown = function(event) {
            if (event.keyCode == 13) {
                question(this);
            }
        }
        button[j].onclick = function(event) {
            question(this);
        }
    }
}

function question(input) { //Функция для игры "Загадки" 
    var answer = input.getAttribute("data-answer"), 
        id = input.id, 
        status = document.getElementById(id + "-status"), 
        value = document.getElementById(id).value;
    
    if (value.toLowerCase() == answer) {
        status.innerHTML = "<p class = 'text'>Ответ верный! :)</p>";
        changeDiv("green", status);
    }
    else {
        document.getElementById(id).value = "";
        status.innerHTML = "<p class = 'text'>Ответ неверный! :(</p>";
        changeDiv("red", status);
    }
}
