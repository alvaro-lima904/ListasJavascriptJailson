function novoSalario() {
    let salarioMensal = parseInt(document.getElementById('numero01').value);
    let percReajuste = parseInt(document.getElementById('numero02').value);

    let salarioNovo = salarioMensal+(salarioMensal*percReajuste/100);

    document.getElementById('resultado').innerHTML = "O novo salário é: "+salarioNovo;
}