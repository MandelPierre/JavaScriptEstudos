/*
Exercício 03: Calculadora de Juros Compostos
*/

function calcularJurosCompostos(capitalInicial, taxaDeJuros, tempoEmMeses) {
    const montanteFinal = capitalInicial * Math.pow((1 + taxaDeJuros), tempoEmMeses);
    return montanteFinal;
}


const capital = 1000;
const taxa = 0.01;
const tempo = 12;

const montante = calcularJurosCompostos(capital, taxa, tempo);
console.log(`O montante final após ${tempo} meses é: R$ ${montante.toFixed(2)}`);

const capital2 = 5000;
const taxa2 = 0.005;
const tempo2 = 24;

const montante2 = calcularJurosCompostos(capital2, taxa2, tempo2);
console.log(`O montante final após ${tempo2} meses é: R$ ${montante2.toFixed(2)}`);


