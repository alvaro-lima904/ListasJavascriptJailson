function volumeLata() {
    let raio = parseInt(document.getElementById('numero01').value);
    let altura = parseInt(document.getElementById('numero02').value);
    const pi = 3.14;

    let volume = pi*(raio**2)*altura;

    document.getElementById('resultado').innerHTML = "O volume da lata correspondente é: "+volume;
}