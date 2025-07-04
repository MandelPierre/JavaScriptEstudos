/*
Exercício 06: Sistema de Notas Fiscais
*/

function calcularTotalNota(itens) {
    return itens.reduce((total, item) => total + (item.precoUnitario * item.quantidade), 0);
}

const itensNota = [
    { nome: 'Caneta', precoUnitario: 2.50, quantidade: 10 },
    { nome: 'Caderno', precoUnitario: 15.00, quantidade: 2 },
    { nome: 'Borracha', precoUnitario: 1.20, quantidade: 5 }
];

const total = calcularTotalNota(itensNota);
console.log(`O valor total da nota fiscal é: R$ ${total.toFixed(2)}`);


