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

function changeDiv(color, id) { //функция изменения области ответа игры "Угадайка" и "Угадайка-мультиплеер"
    id.style.height = "70px";
    id.style.width = "250px";
    id.style.margin = "20px auto";
    id.style.display = "flex";
    id.style.borderRadius = "15px";
    
    if (color == "red") {
        id.style.background = "#ff1b1b";
        id.style.boxShadow = "0 0 10px 4px #ff1b1b";
        id.style.animation = "background_red 1s linear 1s infinite";
    }
    else if (color == "green") {
        id.style.background = "#079507";
        id.style.boxShadow = "0 0 10px 4px #079507";
        id.style.animation = "background_green 2s linear 1s 1";
    }
}