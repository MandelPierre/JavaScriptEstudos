/*Faça um algoritmo que faça a idade de um integrante da dupla, menos a idade do outro integrante, imprima na tela se o resultado é par ou ímpar, positivo ou negativo.*/
let idade1 = 19;
let idade2 = 18;
let sub = idade1 - idade2;
let parImpar = sub % 2 === 0 ? "Par" : "Ímpar";

console.log("A subtração das idades é par ou impar?", parImpar);
console.log("A subtração das idades é positiva?", sub > 0);
