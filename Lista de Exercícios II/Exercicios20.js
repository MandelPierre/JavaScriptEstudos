/*
Exercício 20: Gerador de Relatório Final
*/

function gerarRelatorioCompleto(vendas) {
    const totalVendas = vendas.reduce((total, venda) => total + venda.valor, 0);

    const produtoMaisCaro = vendas.reduce((maisCaro, venda) => {
        return (maisCaro.valor || 0) < venda.valor ? venda : maisCaro;
    }, {});

    const relatorio = {
        totalVendas: totalVendas,
        produtoMaisCaro: produtoMaisCaro.produto,
        dataRelatorio: new Date().toLocaleDateString("pt-BR")
    };

    return JSON.stringify(relatorio, null, 2);
}

const vendasEx5 = [
    { produto: 'Notebook', valor: 2500.00 },
    { produto: 'Mouse', valor: 75.50 },
    { produto: 'Teclado', valor: 150.00 },
    { produto: 'Monitor', valor: 900.00 },
    { produto: 'Cadeira Gamer', valor: 1200.00 }
];

const relatorioFinal = gerarRelatorioCompleto(vendasEx5);
console.log("Relatório Final de Vendas:\n", relatorioFinal);


