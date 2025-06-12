/**Faça um algoritmo que leia um array de números inteiros e imprima na tela a soma dos números pares e a soma dos números ímpares separadamente. */
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let somaPares = 0;
let somaImpares = 0;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        somaPares += numeros[i];
    } else {
        somaImpares += numeros[i];
    }
}

console.log(`Soma dos números pares: ${somaPares}`);
console.log(`Soma dos números ímpares: ${somaImpares}`);