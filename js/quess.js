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

function start() {
    Numb.NumbComp = Math.round(Math.random() * 100);
    div.insertBefore(input, div.children[1]);
    button.innerHTML = "Отправить";
    button.addEventListener("click", playGuess);
    input.addEventListener("keydown", keyDown);
    button.removeEventListener("click", start);
}

function keyDown (event) {
    if (event.keyCode == 13) {
        playGuess(); 
    }
}

function playGuess() { 
    var NumbUser = document.getElementById("input").value;
    NumbUser = parseInt(NumbUser);
    if (NumbUser > Numb.NumbComp) {
        i++;
        //console.log("Раунд " + i + ". Ваше число больше загаданного");
        text.innerHTML = "Раунд " + i + ". Ваше число больше загаданного";
        changeDiv("red");
    }
				
    else if (NumbUser < Numb.NumbComp) {
        i++;
        //console.log("Раунд " + i + ". Ваше число меньше загаданного");
        text.innerHTML = "Раунд " + i + ". Ваше число меньше загаданного";
        changeDiv("red");
    }
				
    else if (NumbUser == Numb.NumbComp) {
        //console.log("Вы угадали число!");
        text.innerHTML = "Вы угадали число!";
        changeDiv("green");
        button.removeEventListener("click", playGuess);
        input.removeEventListener("keydown", keyDown);
    }    
    else {
        i++;
        //console.log("Раунд " + i + ". Ошибка");
        changeDiv("red");
        text.innerHTML = "Раунд " + i + ". Ошибка";
    }                
    if (i == 10) {
        answer.style.height = "100px";
        //console.log("Вы проиграли :( Компьютер загадал число " + Numb.NumbComp);
        text.innerHTML = "Вы проиграли :( Компьютер загадал число " + Numb.NumbComp;
        button.removeEventListener("click", playGuess);
        input.removeEventListener("keydown", keyDown);
    } 
}