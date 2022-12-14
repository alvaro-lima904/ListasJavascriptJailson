function distributiva() {
    let A = parseInt(document.getElementById('numero01').value);
    let B = parseInt(document.getElementById('numero02').value);
    let C = parseInt(document.getElementById('numero03').value);
    let D = parseInt(document.getElementById('numero04').value);

    let totalA = (A*B) + (A*C) + (A*D);
    let totalB = (B*C) + (B*D);
    let totalC = (C*D)

    let valorTotal = totalA+totalB+totalC;

    document.getElementById('resultado1').innerHTML = "O resultado da propriedade distributiva de A é: "+totalA;
    document.getElementById('resultado2').innerHTML = "O resultado da propriedade distributiva de B é: "+totalB;
    document.getElementById('resultado3').innerHTML = "O resultado da propriedade distributiva de C é: "+totalC;
    document.getElementById('resultado4').innerHTML = "O resultado total dos valores é: "+valorTotal;
}