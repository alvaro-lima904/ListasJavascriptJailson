// 8) Efetuar o cálculo da quantidade de litros de combustível gasta em uma viagem, utilizando um automóvel que faz 12 Km por litro. Para obter o cálculo, o usuário deve fornecer o tempo gasto (TEMPO) e a velocidade média (VELOCIDADE) durante a viagem. Desta forma, será possível obter a distância percorrida com a fórmula DISTANCIA=TEMPO * VELOCIDADE. Possuindo o valor da distância, basta calcular a quantidade de litros de combustível utilizada na viagem com a fórmula LITROS_USADOS=DISTÂNCIA/12. Ao final, o programa deve apresentar os valores da velocidade média (VELOCIDADE), tempo gasto na viagem (TEMPO), a distância percorrida (DISTÂNCIA) e a quantidade de litros (LITROS_USADOS) utilizada na viagem.  

function litrosUsados() {
    let tempo = parseInt(document.getElementById('numero01').value);
    let velocidadeM = parseInt(document.getElementById('numero02').value);

    let distancia = tempo*velocidadeM;
    let combustivelGasto = distancia/12;

    document.getElementById('resultado1').innerHTML = "O tempo gasto na viagem é: "+tempo;
    document.getElementById('resultado2').innerHTML = "A velocidade média nessa viagem foi: "+velocidadeM;
    document.getElementById('resultado3').innerHTML = "A distância percorrida nessa viagem foi: "+distancia;
    document.getElementById('resultado4').innerHTML = "A quantidade em litros gastos nessa viagem foi: "+combustivelGasto;
}