function quadrado() {
    let lado = parseInt(document.getElementById('numero01').value);

    let area = lado**2;

    document.getElementById('resultado').innerHTML = "A área do quadrado correspondente é: "+area;
}