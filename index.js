

var arrowLeft = document.getElementById("arrow--left");
var imgLeft = document.getElementById("img--left");
var a = `./img/home_coworking/arrow-left.svg`;
arrowLeft.addEventListener("mouseover", function () {
    imgLeft.src = "./img/home_coworking/arrow2-2.svg"

});

arrowLeft.addEventListener("mouseout", function () {
    imgLeft.src = a;
});


var arrowRight = document.getElementById("arrow--right");
var imgRight = document.getElementById("img--right");
var b = `./img/home_coworking/arrow1.svg`;
arrowRight.addEventListener("mouseover", function () {
    imgRight.src = "./img/home_coworking/arrow1-2.svg"

});

arrowRight.addEventListener("mouseout", function () {
    imgRight.src = b;
});