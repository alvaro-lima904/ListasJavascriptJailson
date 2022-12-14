function losango() {
    let dMaior = parseInt(document.getElementById('numero01').value);
    let dMenor = parseInt(document.getElementById('numero02').value);

    let losango = dMaior*dMenor/2;

    document.getElementById('resultado').innerHTML = "A área do losango correspondente é: "+losango;
}