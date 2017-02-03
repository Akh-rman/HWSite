$(function () { //Функция для сворачивания меню когда фокус переходит на другие элементы
    $(".navbar-toggle").blur(function (event) {
        var screenWidth = window.innerWidth;
        if (screenWidth < 768) {
            $("#bs-example-navbar-collapse-1").collapse('hide');
        }
    });
});

function playGuess2() { //Функция для игры "Угадайка мультиплеер"
    var NumbComp = Math.round(Math.random() * 100);
    var playerNum = 1; //номер игрока, который сейчас ходит

    for (var i = 0; i < 10; i++) {
        var NumbUser = prompt("Раунд " + (i+1) +"\nХодит игрок " + playerNum + ". Введите число от 0 до 100. Для выхода введите q");
        
        if (NumbUser == "q") {
            break;
        }
        NumbUser = parseInt(NumbUser);
        
        if (NumbUser > NumbComp) {
            alert("Раунд "+(i+1)+".Ваше число больше загаданного");
        }
				
        else if (NumbUser < NumbComp) {
            alert("Раунд "+(i+1)+".Ваше число меньше загаданного");
        }
				
        else if (NumbUser == NumbComp) {
            alert("Вы угадали число!");
            break;
        }
        else { 
            alert("Раунд "+(i+1)+". Ошибка");
        }
        
        if (playerNum == 1) {
            playerNum = 2;
        } 
        else {
            playerNum = 1;
        }
    }
        
    if (i == 10) {
        alert("Вы проиграли :( Компьютер загадал число = " + NumbComp);
    }     
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
function Button(input) { //Функция для игры "Загадки" 
    var answer = input.getAttribute("data-answer"),
        id = input.id,
        status = document.getElementById(id + "-status"),
        value = document.getElementById(id).value;
    
    if (value.toLowerCase() == answer) {
        status.innerHTML = "Ответ верный! :)";
    }
    else {
        document.getElementById(id).value = "";
        status.innerHTML = "Ответ неверный! :("; 
    }
}