function multiplicacao() {
    let valor1 = parseInt(document.getElementById('numero01').value);
    let valor2 = parseInt(document.getElementById('numero02').value);

    let multiplicacao = valor1*valor2;

    document.getElementById('resultado').innerHTML = "O resultado da muliplicação correspondente é: "+multiplicacao;
}