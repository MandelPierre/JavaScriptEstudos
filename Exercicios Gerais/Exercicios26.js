/**Faça um algoritmo que receba um array de números e imprima na tela o maior e o menor valor encontrados no array.*/
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let maior = num[0];
let menor = num[0];

for (let i = 0; i < num.length; i++) {
    if(num[i] > menor) {
        maior = num[i];
    }
    if (num[i] < menor) {
        menor = num[i];
    }
}

console.log(`Maior valor: ${maior}`);
console.log(`Menor valor: ${menor}`);
