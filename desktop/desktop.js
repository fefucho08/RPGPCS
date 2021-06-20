var popup= document.querySelector(".popup_options")
var popupwall= document.querySelector(".popup_wallpaper")
var wallpaper= document.querySelector("body")
var imagem= localStorage.getItem("wallpaper")
wallpaper.style.backgroundImage= "url("+imagem+")"

const um= "../imagens/fundo_desktop.jpeg"
const dois= "../imagens/desktop1.jpeg"
const tres= "../imagens/desktop2.png"


function option(){
    popup.style.display= "flex"
}

function desliga(){
    popup.style.display= "none"
    window.location= "../index.html"
}

function logout(){
    localStorage.removeItem("personagem");
    window.location="../index.html";
}

function cancela(){
    popup.style.display= "none"
}

function mudar(img){
        wallpaper.style.backgroundImage= "url("+img+")"

        localStorage.setItem("wallpaper", img)
}

function fechar(){
    popupwall.style.display= "none";
}

function astral(){
    window.location="https://app.astraltabletop.com/play/-MT6eLOMx8fl5cpoGMW-/portal"
}

function livro(){
    alert("Livro somente disponível em inglês :(");
    window.location="../Livro_CoC.pdf";
}

function ajuda (){
    window.location="https://drive.google.com/file/d/1jwmP3CTzHMAqmTcq4rnTAwF5yeac1Pdo/view"
}

document.onmousedown = click 

function click(event) { 
      
    if (event.button == 2) { 
              var confirmado= confirm("Deseja mudar o plano de fundo?")
              if(confirmado==true){
                  popupwall.style.display="block"
              }else{

              }
    } 
} 
