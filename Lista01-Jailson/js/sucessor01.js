function sucessor() {
    let n1 = parseInt(document.getElementById("numero01").value);
    let n2 = 1;

    let sucessor = n1+n2;

    
    document.getElementById('resultado').innerHTML = 'O número sucessor do informado é '+sucessor;
}
