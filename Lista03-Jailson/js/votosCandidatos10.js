// 10) Em uma eleição sindical concorreram ao cargo de presidente três candidatos (A, B e C). Durante a apuração dos votos foram computados votos nulos e votos em branco, além dos votos válidos para cada candidato. Deve ser criado um programa de computador que efetue a leitura da quantidade de votos válidos para cada candidato, além de efetuar também a leitura da quantidade de votos nulos e votos em branco. Ao final o programa deve apresentar o número total de eleitores, considerando votos válidos, nulos e em branco***; o percentual correspondente de votos válidos em relação à quantidade de eleitores; o percentual correspondente de votos válidos do candidato A em relação à quantidade de eleitores; o percentual correspondente de votos válidos do candidato B em relação à quantidade de eleitores; o percentual correspondente de votos válidos do candidato C em relação à quantidade de eleitores; o percentual correspondente de votos nulos em relação à quantidade de eleitores; e por último o percentual correspondente de votos em branco em relação à quantidade de eleitores. 

function votosCandidatos() {
    let candidatoA = parseInt(document.getElementById('numero01').value);
    let candidatoB = parseInt(document.getElementById('numero02').value);
    let candidatoC = parseInt(document.getElementById('numero03').value);
    let votosNulos = parseInt(document.getElementById('numero04').value);
    let votosBrancos = parseInt(document.getElementById('numero05').value);

    let totalEleitores = candidatoA+candidatoB+candidatoC+votosBrancos+votosNulos;
    let percA = candidatoA/totalEleitores*100;
    let percB = candidatoB/totalEleitores*100;
    let percC = candidatoC/totalEleitores*100;
    let percNulos = votosNulos/totalEleitores*100;
    let percBrancos = votosBrancos/totalEleitores*100;

    document.getElementById('resultado1').innerHTML = "O número total de eleitores é: "+totalEleitores;
    document.getElementById('resultado2').innerHTML = "O percentual de votos no candidato A é:"+percA+"%";
    document.getElementById('resultado3').innerHTML = "O percentual de votos no candidato B é:"+percB+"%";
    document.getElementById('resultado4').innerHTML = "O percentual de votos no candidato C é:"+percC+"%";
    document.getElementById('resultado5').innerHTML = "O percentual de votos nulos é: "+votosNulos+"%";
    document.getElementById('resultado6').innerHTML = "O percentual de votos em branco é: "+votosBrancos+"%";
}