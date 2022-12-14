// var totalEleitores = parseInt(prompt("Informe o total de eleitores: "));
// var votosBrancos = parseInt(prompt("Informe a quantidade de votos em branco: "));
// var votosNulos = parseInt(prompt("Informe a quantidade de votos nulos: "));
// var votosValidos = parseInt(prompt("Informe a quantidade de votos válidos: "));

// var percBrancos = votosBrancos*totalEleitores/100;
// var percNulos = votosNulos*totalEleitores/100;
// var percValidos = votosValidos*totalEleitores/100;

// window.alert('O percentual de votos em branco é:'+percBrancos);
// window.alert('O percentual de votos nulos é: '+percNulos);
// window.alert('O percentual de votos válidos é: '+percValidos);

function percentual(){
    let totalEleitores = parseInt(document.getElementById('numero01').value);
    let votosNulos= parseInt(document.getElementById('numero02').value);
    let votosBranco = parseInt(document.getElementById('numero03').value);
    let votosValidos = parseInt(document.getElementById('numero04').value);

    let percNulos = votosNulos*totalEleitores/100;
    let percBrancos = votosBranco*totalEleitores/100;
    let percValidos = votosValidos*totalEleitores/100;

    document.getElementById('resultado1').innerHTML = "O percentual de votos nulos é: "+percNulos.toFixed(2);
    document.getElementById('resultado2').innerHTML = "O percentual de votos em branco é: "+percBrancos.toFixed(2);
    document.getElementById('resultado3').innerHTML = "O percentual de votos válidos é: "+percValidos.toFixed(0);
}