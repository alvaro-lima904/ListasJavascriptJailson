function subtracao() {
    let valor1 = parseInt(document.getElementById('numero01').value);
    let valor2 = parseInt(document.getElementById('numero02').value);

    let subtracao = valor1-valor2;

    document.getElementById('resultado').innerHTML = "A subtração dos valores correspondentes é: "+subtracao;
}