//Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.
const numeros = [5, 8, 9, 20, 16, 3];
let soma = 0;

for(let i = 0; i < numeros.length; i++){
    soma += numeros[i];
}

console.log(`A soma dos números é ${soma}`);