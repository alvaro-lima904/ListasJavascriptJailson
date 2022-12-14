function grausCelsius() {
    let fahrenheit = parseInt(document.getElementById('numero01').value);

    let celsius = (fahrenheit-32)*5/9;

    document.getElementById('resultado').innerHTML = "Esta mesma temperatura em graus celsius é: "+celsius;
}