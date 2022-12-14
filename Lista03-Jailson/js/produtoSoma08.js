function produtoSoma () {
    let valor1 = parseInt(document.getElementById('numero01').value);
    let valor2 = parseInt(document.getElementById('numero02').value);
    let valor3 = parseInt(document.getElementById('numero03').value);
    let valor4 = parseInt(document.getElementById('numero04').value);

    let produto = valor1*valor3;
    let soma = valor2+valor4;

    document.getElementById('resultado1').innerHTML = "O produto do primeiro valor com o terceiro é: "+produto;
    document.getElementById('resultado2').innerHTML = "A soma do segundo com o quarto valor é: "+soma;
}