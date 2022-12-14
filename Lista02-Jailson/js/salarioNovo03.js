function salarioNovo() {
    let salarioAtual = parseInt(document.getElementById('numero01').value);
    let percReajuste = parseInt(document.getElementById('numero02').value);

    let salarioNovo = salarioAtual+(salarioAtual*percReajuste/100);
    
    document.getElementById('resultado').innerHTML = "O seu salário novo é: "+salarioNovo;
}