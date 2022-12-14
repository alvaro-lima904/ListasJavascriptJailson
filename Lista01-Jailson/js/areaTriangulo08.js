function areaTriangulo() {
    let base = parseInt(document.getElementById('numero01').value);
    let altura = parseInt(document.getElementById('numero02').value);

    let area = base*altura/2;

    document.getElementById('resultado').innerHTML = "A área do triângulo correspondente é: "+area;
}