const kiki= "kiki";
const lily= "Lily";
const frodo= "frodo"
const hannah= "hannah";
const luana= "luana";
const gabi= "gabi";

function irparadoc(){
    window.location= "https://docs.google.com/document/d/1Vc1V67dDJXHrR1T-zaod22Ff-OL8bWLfqE9bELMvnfQ/edit"
}

function valida(personagem){
    var senha= input_senha.value;

    if(personagem==kiki && senha=="H284fgwh618Ma3rC8s"){
        window.location="../desktop/desktop.html";
    }else if(personagem==lily && senha=="clebinho2000"){
        window.location="../desktop/desktop.html";
    }else if(personagem==frodo && senha=="05060708"){
        window.location="../desktop/desktop.html"
    }else if(personagem==hannah && senha=="c4l3bnanna"){
        window.location="../desktop/desktop.html"
    }else if(personagem==luana && senha=="£u@n@c0//1n5"){
        window.location="../desktop/desktop.html"
    }else if(personagem==gabi && senha== "smith1102gabi"){
        window.location="../desktop/desktop.html"
    }else{
        alert("Senha incorreta")
    }
    
    
}