function acertou(){
    var contador = 0;
    contador += 1;
    localStorage.setItem('contador', contador)
    alert("Parabens,acertou" + "\nquantidade de acertos: " + contador);
    window.location.href = "../pages/pergunta2.html";
    
}

function acertou2(){
    contador = localStorage.getItem('contador');
    contador++;
    localStorage.setItem('contador', contador)
    alert("Parabens,acertou" + "\nquantidade de acertos: " + contador);
    window.location.href = "../pages/pergunta3.html";
}

function acertou3(){
    contador = localStorage.getItem('contador');
    contador++;
    localStorage.setItem('contador', contador)
    alert("Parabens,acertou" + "\nquantidade de acertos: " + contador);
    window.location.href = "../pages/pergunta4.html";
}

function acertou4(){
    contador = localStorage.getItem('contador');
    contador++;
    localStorage.setItem('contador', contador)
    alert("Parabens,acertou" + "\nquantidade de acertos: " + contador);
    window.location.href = "../pages/pergunta5.html";
}

function acertou5(){
    contador = localStorage.getItem('contador');
    contador++;
    localStorage.setItem('contador', contador)
    alert("Parabens,acertou" + "\nquantidade de acertos: " + contador);
    window.location.href = "../pages/pergunta6.html";
}

function acertou6(){
    contador = localStorage.getItem('contador');
    contador++;
    localStorage.setItem('contador', contador)
    alert("Parabens,acertou" + "\nquantidade de acertos: " + contador);
    window.location.href = "../pages/fim.html";
}

function errou(){
    alert("Oops, errou!");
}



