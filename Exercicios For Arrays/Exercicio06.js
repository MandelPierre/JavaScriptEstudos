//Crie um programa que calcule a média dos números presentes em um array utilizando um loop for.
const notas = [9, 8.5, 8, 10];
let somaDasNotas = 0;

notas.forEach(somaNotas);

function somaNotas (nota) {
    somaDasNotas += nota;    
}
const media = somaDasNotas / notas.length;
console.log(`A média é ${media}`);