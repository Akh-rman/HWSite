var button = document.getElementById("start");
button.addEventListener("click", start);

function start() {
    var input = document.createElement("input");
    input.placeholder = "Введите число";
    var div = document.getElementById("quess");
    div.insertBefore(input, div.children[1]);
    button.innerHTML = "Отправить";
}

function playGuess() { //Функция для игры "Угадайка"
    var NumbComp = Math.round(Math.random() * 100);
    for (var i = 0; i < 10; i++) {
		var NumbUser = prompt("Раунд " + (i+1) +"\nВведите число от 0 до 100. Для выхода введите q");
        
        if (NumbUser == "q") {
            break;
        }
        NumbUser = parseInt(NumbUser);
        
        if (NumbUser > NumbComp) {
            alert("Раунд "+(i+1)+". Ваше число больше загаданного");
        }
				
        else if (NumbUser < NumbComp) {
            alert("Раунд "+(i+1)+". Ваше число меньше загаданного");
        }
				
        else if (NumbUser == NumbComp) {
            alert("Вы угадали число!");
            break;
        }    
        else {
            alert("Раунд "+(i+1)+". Ошибка");
        }
    }
    
    if (i == 10) {
        alert("Вы проиграли :( Компьютер загадал число = " + NumbComp);
    } 
}