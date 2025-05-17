/*Faça um algoritmo que receba um valor A e B, e troque o valor de A por B e o valor de B por A e imprima na tela os valores. (pesquise como se faz isso com JavaScript)*/
let A = 4;
let B = 7;

console.log("Antes da troca");
console.log("A =", A);
console.log("B =", B);

let aux = A;
A = B;
B = aux;

console.log("Depois da troca");
console.log("A =", A);
console.log("B =", B);