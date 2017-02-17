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