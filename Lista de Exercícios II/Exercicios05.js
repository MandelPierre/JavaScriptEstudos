/*
Exercício 05: Relatório de Vendas
*/

function gerarRelatorioVendas(vendas) {
    return vendas.map(venda => `Produto: ${venda.produto}, Valor: R$ ${venda.valor.toFixed(2)}`);
}

const vendas = [
    { produto: 'Notebook', valor: 2500.00 },
    { produto: 'Mouse', valor: 75.50 },
    { produto: 'Teclado', valor: 150.00 },
    { produto: 'Monitor', valor: 900.00 }
];

const relatorio = gerarRelatorioVendas(vendas);
console.log('Relatório de Vendas:', relatorio);


