var popup= document.querySelector(".pop-up");
var popup2= document.querySelector(".pop-up-2");
var body= document.querySelector(".body");

function abre() {
    popup.style.display = "block";
    body.style.overflow = "hidden";
}

function abre2() {
    popup2.style.display = "block";
    body.style.overflow = "hidden";
}

function fecha() {
    popup.style.display = "none";
    body.style.overflow = "auto";
}

function fecha2() {
    popup2.style.display = "none";
    body.style.overflow = "auto";
}

function enviar() {
    var input= document.querySelector("#nome");
    var nome= input.value;
    alert (`Desculpe ${nome}, não foi possível enviar sua mensagem. Tente novamente mais tarde`)
}