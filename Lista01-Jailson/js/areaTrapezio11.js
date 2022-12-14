// var baseMaior = parseInt(prompt('Informe a base maior do trapézio: '));
// var baseMenor = parseInt(prompt('Informe a base menor do trapézio: '));
// var altura = parseInt(prompt('Informe a altura do trapézio: '));

// var area = (baseMaior+baseMenor)*altura/2;

// window.alert('De acordo com os dados, a área do trapézio é: '+area);

function trapezio() {
    let bMaior = parseInt(document.getElementById('numero01').value);
    let bMenor = parseInt(document.getElementById('numero02').value);
    let altura = parseInt(document.getElementById('numero03').value);

    let area = (bMaior+bMenor)*altura/2;

    document.getElementById('resultado').innerHTML = "A área do trapézio correspondente é: "+area;
}