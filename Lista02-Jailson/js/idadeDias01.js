function idadeDias () {
    let anos = parseInt(document.getElementById('numero01').value);
    let meses = parseInt(document.getElementById('numero02').value);
    let dias = parseInt(document.getElementById('numero03').value);

    let anosDias = anos*365;
    let mesesDias = meses*30;

    let idade = anosDias+mesesDias+dias;

    document.getElementById('resultado').innerHTML = "De acordo com as informações, sua idade em dias é: "+idade;
}