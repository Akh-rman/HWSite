var playerNum = 1; //номер игрока, который сейчас ходит
var label = document.createElement("p");
label.innerHTML = "Игрок " + playerNum;
label.style.textAlign = "center";
label.style.margin = "0 0 10px 0";
label.style.fontSize = "1.2em";
var p = document.getElementsByClassName("text");
var text = p[0];
var input = document.createElement("input");
input.placeholder = "Введите число";
input.id = "input";
var div = document.getElementById("quess");
var button = document.getElementById("start");
var Numb = {};
var i = 0;
button.addEventListener("click", start);
//console.log(Numb);

function check() {
    if (playerNum == 1) {
        playerNum = 2;
        label.innerHTML = "Игрок " + playerNum;
    } 
    else {
        playerNum = 1;
        label.innerHTML = "Игрок " + playerNum;
    }
    input.value = "";
}

function playGuess2() { //Функция для игры "Угадайка мультиплеер"
    var NumbUser = document.getElementById("input").value;
    NumbUser = parseInt(NumbUser);
    
    if (NumbUser > Numb.NumbComp) {
        i++;
        //console.log("Раунд " + i + ". Ваше число больше загаданного");
        text.innerHTML = "Раунд " + i + ". Ваше число больше загаданного";
        changeDiv("red", answer);
        check();
    }
				
    else if (NumbUser < Numb.NumbComp) {
        i++;
        //console.log("Раунд " + i + ". Ваше число меньше загаданного");
        text.innerHTML = "Раунд " + i + ". Ваше число меньше загаданного";
        changeDiv("red", answer);
        check();
    }
				
    else if (NumbUser == Numb.NumbComp) {
        //console.log("Вы угадали число!");
        text.innerHTML = "Вы угадали число!";
        changeDiv("green", answer);
        button.removeEventListener("click", playGuess2);
        input.removeEventListener("keydown", keyDown);
    }    
    else {
        i++;
        //console.log("Раунд " + i + ". Ошибка");
        changeDiv("red", answer);
        check();
        text.innerHTML = "Раунд " + i + ". Ошибка";
    } 
    
    if (i == 10) {
        answer.style.height = "100px";
        //console.log("Вы проиграли :( Компьютер загадал число " + Numb.NumbComp);
        text.innerHTML = "Вы проиграли :( Компьютер загадал число " + Numb.NumbComp;
        button.removeEventListener("click", playGuess2);
        input.removeEventListener("keydown", keyDown);
    }          
}