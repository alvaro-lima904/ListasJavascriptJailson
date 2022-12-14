function quadradoSoma() {
    let valor1 = parseInt(document.getElementById('numero01').value);
    let valor2 = parseInt(document.getElementById('numero02').value);
    let valor3 = parseInt(document.getElementById('numero03').value);

    let soma = valor1+valor2+valor3;
    let quadrado = soma**2;

    document.getElementById('resultado').innerHTML = "O quadrado da soma correspondentes: "+quadrado;
}