function realParaDolar() {
    let reais = parseInt(document.getElementById('numero01').value);
    let cotacao = parseFloat(document.getElementById('numero02').value);

    let conversao = reais*cotacao;

    document.getElementById('resultado').innerHTML = 'A conversão de reais para dólares deste mesmo valor é: '+conversao;
}