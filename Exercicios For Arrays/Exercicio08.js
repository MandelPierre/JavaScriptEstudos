/**Crie uma função chamada executaOperacaoEmArray que recebe dois parâmetros: um array e uma
função de callback que executa alguma operação matemática. Essa função deve iterar por cada
elemento do array e aplicar a função de callback em cada um dos elementos, imprimindo o resultado
da operação no console.*/
function executaOperacaoEmArray(array, callback) {
    array.forEach((elemento, indice) => {
        const resultado = callback(elemento);
        console.log(`Elemento do índice ${indice}, resultado da operação: ${resultado}`);
    });
}

const numeros = [5, 11, 2, 9, 27, 9, 3];

function triplicar(numero) {
    return numero * 3;
}

executaOperacaoEmArray(numeros, triplicar);