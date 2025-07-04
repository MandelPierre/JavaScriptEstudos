/*
Exercício 10: Desestruturação de Dados (Destructuring)
*/

function exibirDetalhesProduto(produto) {
    const { nome, preco } = produto;
    console.log(`Nome do Produto: ${nome}, Preço: R$ ${preco.toFixed(2)}`);
}

const produto1 = {
    id: 101,
    nome: 'Smartphone',
    preco: 1500.00,
    categoria: 'Eletrônicos'
};

exibirDetalhesProduto(produto1);

const produto2 = {
    id: 102,
    nome: 'Fone de Ouvido',
    preco: 250.00,
    categoria: 'Acessórios'
};

exibirDetalhesProduto(produto2);


