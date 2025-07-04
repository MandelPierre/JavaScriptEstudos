/*
Exercício 07: Filtro de Clientes Especiais
*/

function identificarClientesEspeciais(compras) {
    const clientesEspeciais = compras
        .filter(compra => compra.valor > 500)
        .map(compra => compra.clienteId);

    return [...new Set(clientesEspeciais)];
}

const comprasClientes = [
    { clienteId: 1, valor: 600, data: '2025-01-10' },
    { clienteId: 2, valor: 300, data: '2025-01-15' },
    { clienteId: 1, valor: 700, data: '2025-02-01' },
    { clienteId: 3, valor: 550, data: '2025-02-05' },
    { clienteId: 2, valor: 800, data: '2025-03-01' }
];

const clientesEspeciais = identificarClientesEspeciais(comprasClientes);
console.log("Clientes Especiais (IDs):", clientesEspeciais);


