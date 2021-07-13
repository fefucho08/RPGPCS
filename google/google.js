function pesquisa(){
    var pesquisado = search_area.value;

    if(pesquisado=="$5oR@"){
        window.location="../escotilha/pc1/pc1.html"
    }else if(pesquisado=="4$pNg"){
        window.location="../imagens/Planos PMC.png"
    }else{
        alert("Nenhum resultado encontrado")
    }
    search_area.value= "";
}
