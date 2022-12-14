function somaQuadrados() {
    let valor1 = parseInt(document.getElementById('numero01').value);
    let valor2 = parseInt(document.getElementById('numero02').value);
    let valor3 = parseInt(document.getElementById('numero03').value);

    let resposta = (valor1*valor1) + (valor2*valor2) + (valor3*valor3);

    document.getElementById('resultado').innerHTML = "A soma dos quadrados dos valores correspondentes é: "+resposta;
}