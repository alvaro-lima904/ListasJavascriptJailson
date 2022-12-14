// 10) Ler dois valores (inteiros, reais ou caracteres) para as variáveis A e B, e efetuar a troca dos valores de forma que a variável A passe a possuir o valor da variável B e a variável B passe a possuir o valor da variável A. Apresentar os valores trocados.  

// var valor1 = prompt('Solicita um valor: ');
// var valor2 = prompt('Solicita outro valor: ');

// var auxiliar = valor1;
// var valor1 = valor2;
// var valor2 = auxiliar;

// window.alert('o valor da primeira variável é: '+valor1);
// window.alert('o valor da segunda variável é: '+valor2);

function troca() {
    let valor1 = document.getElementById('numero01').value;
    let valor2 = document.getElementById('numero02').value;
    
    let auxiliar = valor1;
    valor1 = valor2;
    valor2 = auxiliar;

    document.getElementById('resultado1').innerHTML = "O valor da primeira variável agora é: "+valor1;
    document.getElementById('resultado2').innerHTML = "O valor da segunda variável agora é: "+valor2;
}