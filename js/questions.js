var input = document.getElementsByTagName("input");
var button = document.getElementsByName("button");
for (var i = 0; i < input.length; i++) {
    for (var j = 0; j < button.length; j++) {
        input[i].onkeydown = function(event) {
            if (event.keyCode == 13) {
                Button(this);
            }
        }
        button[j].onclick = function(event) {
            Button(this);
        }
    }
}

function Button(input) { //Функция для игры "Загадки" 
    var answer = input.getAttribute("data-answer"),
        id = input.id,
        status = document.getElementById(id + "-status"),
        value = document.getElementById(id).value;
    
    if (value.toLowerCase() == answer) {
        status.innerHTML = "<p class = 'answer_green'>Ответ верный! :)</p>";
    }
    else {
        document.getElementById(id).value = "";
        status.innerHTML = "<p class = 'answer_red'>Ответ неверный! :(</p>"; 
    }
}