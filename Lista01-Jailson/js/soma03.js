function soma() {
    let valor1 = parseInt(document.getElementById("numero01").value);
    let valor2 = parseInt(document.getElementById("numero02").value);

    let soma2 = valor1+valor2;

    document.getElementById('resultado').innerHTML = "O resultado da soma dos valores correspondentes é: "+soma2;
}