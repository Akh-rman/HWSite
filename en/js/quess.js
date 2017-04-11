var p = document.getElementsByClassName("text");
var text = p[0];
var input = document.createElement("input");
input.placeholder = "Enter the number";
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
    button.innerHTML = "Send";
    button.addEventListener("click", playGuess);
    input.addEventListener("keydown", keyDown);
    button.removeEventListener("click", start);
}

function keyDown(event) {
    if (event.keyCode == 13) {
        playGuess(); 
    }
}

function playGuess() { // Function for the game "Guess"
    var NumbUser = document.getElementById("input").value;
    NumbUser = parseInt(NumbUser);
    if (NumbUser > Numb.NumbComp) {
        i++;
        //console.log("Раунд " + i + ". Ваше число больше загаданного");
        text.innerHTML = "Round " + i + ". Your number is greater than the number";
        changeDiv("red");
    }
				
    else if (NumbUser < Numb.NumbComp) {
        i++;
        //console.log("Раунд " + i + ". Ваше число меньше загаданного");
        text.innerHTML = "Round " + i + ". Your number is less than the number";
        changeDiv("red");
    }
				
    else if (NumbUser == Numb.NumbComp) {
        //console.log("Вы угадали число!");
        text.innerHTML = "You guessed the number!";
        changeDiv("green");
        button.removeEventListener("click", playGuess);
        input.removeEventListener("keydown", keyDown);
    }    
    else {
        i++;
        //console.log("Раунд " + i + ". Ошибка");
        changeDiv("red");
        text.innerHTML = "Round " + i + ". Error";
    }                
    if (i == 10) {
        answer.style.height = "100px";
        //console.log("Вы проиграли :( Компьютер загадал число " + Numb.NumbComp);
        text.innerHTML = "You lost: (The computer made a number " + Numb.NumbComp;
        button.removeEventListener("click", playGuess);
        input.removeEventListener("keydown", keyDown);
    } 
}