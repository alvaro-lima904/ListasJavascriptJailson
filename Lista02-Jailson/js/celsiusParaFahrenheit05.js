function grausFahrenheit() {
    let celsius = parseInt(document.getElementById('numero01').value);

    let fahrenheit = (celsius/5)*9+32;

    document.getElementById('resultado').innerHTML = "Esta mesma temperatura em graus fahrenheit é: "+fahrenheit;
}