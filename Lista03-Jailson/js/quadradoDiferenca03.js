function quadradoDiferenca() {
    let valor1 = parseInt(document.getElementById('numero01').value);
    let valor2 = parseInt(document.getElementById('numero02').value);

    let diferenca = valor1-valor2;
    let quadrado = diferenca**2;

    document.getElementById('resultado').innerHTML = "O quadrado da diferença correspondente é: "+quadrado;
}