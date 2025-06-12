/**Faça um algoritmo que crie um array com 10 números inteiros aleatórios com números de
-10 a 10.*/ 
let numeros = [];

for (let i = 0; i < 10; i++) {
    let numero = Math.floor(Math.random() * 21) - 10;
    numeros.push(numero);
}

console.log("Array com 10 números aleatórios entre -10 e 10:");
console.log(numeros);

numeros.reverse();
console.log("Ordem invertida:", numeros);