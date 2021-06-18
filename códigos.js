var kiki= "kiki";
var lily= "lily";
var frodo= "frodo";
var hannah= "hannah"
var luana= "luana";
var gabi= "gabi";

//localStorage.clear();
var investigador= localStorage.getItem("personagem")

if(investigador !== null){
    window.location.href= "início/"+investigador+".html";
}else{

}

function setar(personagem){
    var selected= personagem;
   
    if(typeof(Storage) !== "undefined") {
        
        localStorage.setItem("personagem",selected);
        location.reload();

    } else{
    
    }

}
