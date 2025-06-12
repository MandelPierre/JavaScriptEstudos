/**Faça um algoritmo que leia um array de números e remova todos os valores repetidos, imprimindo o array final sem duplicatas.*/
let numeros = [5, 10, 5, 20, 10, 30, 20, 40, 30, 50];
let semDuplicatas = [];

for (let i = 0; i < numeros.length; i++) {
    if (!semDuplicatas.includes(numeros[i])) {
        semDuplicatas.push(numeros[i]);
    }
}

console.log("Array sem duplicatas:", semDuplicatas);