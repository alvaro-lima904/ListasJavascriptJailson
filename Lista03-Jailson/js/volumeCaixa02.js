function volumeCaixa() {
    let comprimento = parseInt(document.getElementById('numero01').value);
    let largura = parseInt(document.getElementById('numero02').value);
    let altura = parseInt(document.getElementById('numero03').value);

    let volume = comprimento*largura*altura;

    document.getElementById('resultado').innerHTML = "O volume da caixa correspondente é: "+volume
}