/**Você recebeu um array numeros contendo valores numéricos. Crie um programa que verifique se um
número específico está presente nesse array. Se estiver, o programa deve retornar a posição (índice)
desse número. Caso contrário, se o número não estiver presente, o programa deve retornar "-1".*/
function encontrarIndice(array, numeroProcurado) {
    const indice = array.indexOf(numeroProcurado);
    return indice; // se não encontrar, indexOf já retorna -1
}

const numeros = [1, 52, 7, 81, 12, 9, 73, 96, 4, 0, 8, 3, 67, 2, 54, 76];
const numeroProcurado = 2;

const resultado = encontrarIndice(numeros, numeroProcurado);
console.log(`O número a ser procurado esta no índice ${resultado}`);