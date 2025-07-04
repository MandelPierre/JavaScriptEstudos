/*
Exercício 15: Atualização e Envio de Dados
*/

const pedido = {
    id: 1,
    cliente: "João Silva",
    data: "2025-07-04",
    produtos: [
        { id: 10, nome: "Teclado Mecânico", quantidade: 1, preco: 350.00 },
        { id: 20, nome: "Mouse Gamer", quantidade: 1, preco: 120.00 }
    ]
};

pedido.produtos.push({ id: 30, nome: "Monitor Ultrawide", quantidade: 1, preco: 1500.00 });

const pedidoJSON = JSON.stringify(pedido, null, 2);

console.log("Objeto Pedido Atualizado e Convertido para JSON:\n", pedidoJSON);


