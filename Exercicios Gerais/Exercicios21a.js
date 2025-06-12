/*Faça um algoritmo que mostre um valor aleatório entre 0 e 100.*/
let min = 0;
let max = 100;

let numero = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(numero);
