$(function() { //Функция для сворачивания меню когда фокус переходит на другие элементы
    $(".navbar-toggle").blur(function (event) {
        var screenWidth = window.innerWidth;
        if (screenWidth < 768) {
            $("#bs-example-navbar-collapse-1").collapse('hide');
        }
    });
});

var body = document.querySelector("body");
var a = document.createElement("a");
var span = document.createElement("span");
addEventListener("scroll", scroll);

function changeButton() { //функция изменения кнопки "вверх"
    body.appendChild(a);
    a.className = "scroll-button";
    a.style.display = "block";
    a.href = "#header-nav";
    a.appendChild(span);
    span.className = "glyphicon glyphicon-chevron-up scroll-span";
}

function scroll() { //функция для появления кнопки "вверх" при скролле вниз 
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > 100) {
        changeButton();
    }
    else {
        a.style.display = "none";
    }   
}

function changeDiv(color) { //функция изменения области ответа игры "Угадайка" и "Угадайка-мультиплеер"
    var answer = document.getElementById("answer");
    answer.style.height = "70px";
    answer.style.width = "250px";
    answer.style.margin = "20px auto";
    answer.style.display = "flex";
    answer.style.borderRadius = "15px";
    
    if (color == "red") {
        answer.style.background = "#ff1b1b";
        answer.style.boxShadow = "0 0 10px 4px #ff1b1b";
        answer.style.animation = "background_red 1s linear 1s infinite";
    }
    else if (color == "green") {
        answer.style.background = "#079507";
        answer.style.boxShadow = "0 0 10px 4px #079507";
        answer.style.animation = "background_green 2s linear 1s 1";
    }
}