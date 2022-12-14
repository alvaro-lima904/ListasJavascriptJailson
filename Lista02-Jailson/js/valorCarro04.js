function valorCarro() {
    let custoF = parseInt(document.getElementById('numero01').value);

    let PDistribuidor = 28*custoF/100;
    let impostos = 45*custoF/100;

    let valorTotal = custoF+PDistribuidor+impostos;

    document.getElementById('resultado').innerHTML = "O valor total que será pago pelo comprado é: R$"+valorTotal;
}