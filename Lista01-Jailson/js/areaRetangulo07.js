function areaRetangulo() {
    let base = parseInt(document.getElementById('numero01').value);
    let altura = parseInt(document.getElementById('numero02').value);

    let area = base*altura;

    document.getElementById('resultado').innerHTML = "A área do retângulo correspondente é: "+area;
}