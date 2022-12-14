// var raio = parseFloat(prompt('Informe o raio do círculo: '));
// var pi = 3.14;

// var area = 3.14*raio;

// window.alert('De acordo com os dados informados, a área do circulo é: '+area);

function circulo() {
    let raio = parseInt(document.getElementById('numero01').value);
    const pi = 3.14;

    let area = pi*raio;

    document.getElementById('resultado').innerHTML = "A área do círculo correspondente é: "+area;
}