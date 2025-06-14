//Escreva um código que utilize o loop for/of para iterar e imprimir cada elemento de um array.
const numbers = [90, 80, 70, 60, 50, 40];

let soma = 0;

for(let num of numbers) {
    soma += num;
    console.log(soma);
}

