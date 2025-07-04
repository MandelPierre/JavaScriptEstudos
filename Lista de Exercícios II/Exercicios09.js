/*
Exercício 09: Carrinho de Compras
*/

const carrinho = {
    itens: [],
    adicionarItem: function(item) {
        const itemExistente = this.itens.find(i => i.idProduto === item.idProduto);
        if (itemExistente) {
            itemExistente.quantidade += item.quantidade;
        } else {
            this.itens.push(item);
        }
    }
};

carrinho.adicionarItem({ idProduto: 1, nome: 'Camiseta', quantidade: 2 });
console.log('Carrinho após adicionar Camiseta:', carrinho.itens);

carrinho.adicionarItem({ idProduto: 2, nome: 'Calça', quantidade: 1 });
console.log('Carrinho após adicionar Calça:', carrinho.itens);

carrinho.adicionarItem({ idProduto: 1, nome: 'Camiseta', quantidade: 3 });
console.log('Carrinho após adicionar mais Camiseta:', carrinho.itens);


