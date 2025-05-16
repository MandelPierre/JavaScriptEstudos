/*Faça um algoritmo que calcule através do valor do salário mínimo
 e o valor do salário somado da dupla, calcule quantos salários
 mínimos vocês ganham e imprima na tela o resultado.*/
let salario1 = 2200;
let salario2 = 3000;
let somaSalario = salario1 + salario2;
let salarioMinimo = 1525

let quantidadeSalariosMinimos = somaSalario / salarioMinimo;
console.log("A soma dos salários é: R$ " + somaSalario)
console.log("Isso equivale a " + quantidadeSalariosMinimos + " salários mínimos.");
