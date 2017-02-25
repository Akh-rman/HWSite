$(function () { //Функция для сворачивания меню когда фокус переходит на другие элементы
    $(".navbar-toggle").blur(function (event) {
        var screenWidth = window.innerWidth;
        if (screenWidth < 768) {
            $("#bs-example-navbar-collapse-1").collapse('hide');
        }
    });
});

function changeDiv(color) { //функция изменения области ответа игры "Угадайка" и "Угадайка-мультиплеер"
    var answer = document.getElementById("answer");
    answer.style.height = "70px";
    answer.style.width = "250px";
    answer.style.margin = "20px auto";
    answer.style.display = "flex";
    
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