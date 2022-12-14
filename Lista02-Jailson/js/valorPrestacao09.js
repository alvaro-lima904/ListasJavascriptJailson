// 9) Efetuar o cálculo e a apresentação do valor de uma prestação em atraso, utilizando a fórmula PRESTACAO=VALOR+(VALOR*TAXA/100) *TEMPO).  

function valorPrestacao() {
    let valor = parseInt(document.getElementById('numero01').value);
    let taxa = parseInt(document.getElementById('numero02').value);
    let tempo = parseInt(document.getElementById('numero03').value);

    let prestacao = valor+(valor*taxa/100)*tempo;

    document.getElementById('resultado').innerHTML = "O valor total que deverá ser pago pelos atrasos é: "+prestacao;
}