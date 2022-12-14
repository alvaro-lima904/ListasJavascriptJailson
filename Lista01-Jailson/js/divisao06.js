function divisao() {
    let valor1 = parseInt(document.getElementById('numero01').value);
    let valor2 = parseInt(document.getElementById('numero02').value);

    let divisao = valor1/valor2;

    document.getElementById('resultado').innerHTML = "A divisão dos valores correspondentes é: "+divisao;
}