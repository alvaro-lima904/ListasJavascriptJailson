function dolarParaReal() {
    let dolares = parseInt(document.getElementById('numero01').value);
    let cotacao = parseFloat(document.getElementById('numero02').value);

    let reais = dolares/cotacao;

    document.getElementById('resultado').innerHTML = "Essa mesma quantia pode ser convertida em: R$"+reais;
}