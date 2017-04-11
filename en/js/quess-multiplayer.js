var playerNum = 1; //Number of the player who is walking now
var label = document.createElement("p");
label.innerHTML = "Player " + playerNum;
label.style.textAlign = "center";
label.style.margin = "0 0 10px 0";
label.style.fontSize = "1.2em";
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
    div.insertBefore(label, div.children[1]);
    div.insertBefore(input, div.children[2]);
    button.innerHTML = "Отправить";
    button.addEventListener("click", playGuess2);
    input.addEventListener("keydown", keyDown);
    button.removeEventListener("click", start);
}

function keyDown(event) {
    if (event.keyCode == 13) {
        playGuess2(); 
    }
}

function check() {
    if (playerNum == 1) {
        playerNum = 2;
        label.innerHTML = "Player " + playerNum;
    } 
    else {
        playerNum = 1;
        label.innerHTML = "Player " + playerNum;
    }
    input.value = "";
}

function playGuess2() { //Function for the game "Guess Multiplayer"
    var NumbUser = document.getElementById("input").value;
    NumbUser = parseInt(NumbUser);
    
    if (NumbUser > Numb.NumbComp) {
        i++;
        //console.log("Раунд " + i + ". Ваше число больше загаданного");
        text.innerHTML = "Round " + i + ". Your number is greater than the number";
        changeDiv("red");
        check();
    }
				
    else if (NumbUser < Numb.NumbComp) {
        i++;
        //console.log("Раунд " + i + ". Ваше число меньше загаданного");
        text.innerHTML = "Round " + i + ". Your number is less than the number";
        changeDiv("red");
        check();
    }
				
    else if (NumbUser == Numb.NumbComp) {
        //console.log("Вы угадали число!");
        text.innerHTML = "You guessed the number!";
        changeDiv("green");
        button.removeEventListener("click", playGuess2);
        input.removeEventListener("keydown", keyDown);
    }    
    else {
        i++;
        //console.log("Раунд " + i + ". Ошибка");
        changeDiv("red");
        check();
        text.innerHTML = "Round " + i + ". Error";
    } 
    
    if (i == 10) {
        answer.style.height = "100px";
        //console.log("Вы проиграли :( Компьютер загадал число " + Numb.NumbComp);
        text.innerHTML = "You lost: (The computer made a number " + Numb.NumbComp;
        button.removeEventListener("click", playGuess2);
        input.removeEventListener("keydown", keyDown);
    }          
}