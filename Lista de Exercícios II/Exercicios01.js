/*
Exercício 01: Sistema de Folha de Pagamento
*/

function calcularSalarioLiquido(funcionario) {
    const salarioBrutoTotal = funcionario.salarioBruto + (funcionario.horasExtras * funcionario.valorHoraExtra);
    const inss = salarioBrutoTotal * 0.10;
    const salarioLiquido = salarioBrutoTotal - inss;
    return salarioLiquido;
}

const funcionario1 = {
    salarioBruto: 2000,
    horasExtras: 20,
    valorHoraExtra: 15
};

const salarioFinal = calcularSalarioLiquido(funcionario1);
console.log(`O salário líquido do funcionário é: R$ ${salarioFinal.toFixed(2)}`);

const funcionario2 = {
    salarioBruto: 3500,
    horasExtras: 10,
    valorHoraExtra: 25
};

const salarioFinal2 = calcularSalarioLiquido(funcionario2);
console.log(`O salário líquido do funcionário é: R$ ${salarioFinal2.toFixed(2)}`);


