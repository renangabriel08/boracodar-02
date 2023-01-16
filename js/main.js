var parado = document.getElementById("parado");
var movendo = document.getElementById("movendo");

function girar () {
    parado.style.display = "none";
    movendo.style.display = "flex";
}

function parar () {
    parado.style.display = "flex";
    movendo.style.display = "none";
}