function antecessor() {
    var n1 = parseInt(document.getElementById('numero01').value);

    let anterior = n1-1;

    document.getElementById('resultado').innerText = "O número antecessor ao informado é "+anterior;

};