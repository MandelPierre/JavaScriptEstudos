/**Considere um array de números inteiros.

const numeros = [6, 9, 12, 15, 18, 21];

Utilize o método forEach() para multiplicar cada elemento do array por 3 e
exibir no console o resultado de cada multiplicação. Depois, utilize o método
findIndex() para encontrar o índice do número 18 no array original.*/
const numeros = [6, 9, 12, 15, 18, 21];

numeros.forEach((numero) => {
    const resultado = numero * 3;
    console.log(`Resultado da multiplicação por 3: ${resultado}`);
});

const indiceProcurado = numeros.findIndex((numero) => numero === 18);

console.log(`O número 18 está no índice: ${indiceProcurado}`);