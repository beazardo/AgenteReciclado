export function stringToObject(link){

    var recortePrimeiro = link.split("?");
    var variaveis = recortePrimeiro[1];

    if(variaveis){
        var recorteSegundo = variaveis.split("&");
    }
    else{
        var recorteSegundo = []
    }
    
    var objetos = {};

    for(var i = recorteSegundo.length - 1; i >= 0; i -=1){
        var cortaConteudo = recorteSegundo[i].split("=");
        objetos[cortaConteudo[0]] = cortaConteudo[1]
    }
    return objetos;
}