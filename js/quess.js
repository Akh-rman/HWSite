var answer = document.getElementById("answer");
var input = document.createElement("input");
input.placeholder = "Введите число";
input.id = "input";
var div = document.getElementById("quess");
var button = document.getElementById("start");
var Numb = {};
var i = 0;
button.addEventListener("click", start);
console.log(Numb);

function start() {
    Numb.NumbComp = Math.round(Math.random() * 100);
    div.insertBefore(input, div.children[1]);
    button.innerHTML = "Отправить";
    button.addEventListener("click", playGuess);
    button.removeEventListener("click", start);
}

function playGuess() {
    var NumbUser = document.getElementById("input").value;
    NumbUser = parseInt(NumbUser);
    if (NumbUser > Numb.NumbComp) {
        i++;
        var text = "Раунд "+(i)+". Ваше число больше загаданного";
        console.log("Раунд "+i+". Ваше число больше загаданного");
        answer.innerHTML = text;
    }
				
    else if (NumbUser < Numb.NumbComp) {
        i++;
        console.log("Раунд "+i+". Ваше число меньше загаданного");
        answer.innerHTML = "Раунд +(i+1)+. Ваше число меньше загаданного";
    }
				
    else if (NumbUser == Numb.NumbComp) {
        console.log("Вы угадали число!");
        answer.innerHTML = "<p>Вы угадали число!</p>";
        button.removeEventListener("click", playGuess);
    }    
    else {
        i++;
        console.log("Раунд "+i+". Ошибка")
        answer.innerHTML = "<p>Раунд +(i+1)+. Ошибка</p>";
    }                
    if (i == 10) {
        console.log("Вы проиграли :( Компьютер загадал число = " + Numb.NumbComp);
        button.removeEventListener("click", playGuess);
    } 
}