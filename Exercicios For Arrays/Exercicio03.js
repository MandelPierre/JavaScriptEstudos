/**Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da
array, no seguinte formato: 'o menor número é X e o maior número é Y'.*/
function encontrarMenorEMaior(array) {
    let menor = array[0];
    let maior = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < menor) {
            menor = array[i];
        }
        if (array[i] > maior) {
            maior = array[i];
        }
    }

    return `O menor número é ${menor} e o maior número é ${maior}`;
}

// Exemplo de uso:
const numeros = [9, 4, 1, 16, 3];
console.log(encontrarMenorEMaior(numeros));
