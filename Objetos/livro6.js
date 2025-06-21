const anoAtual = new Date().getFullYear();

const livro = {
    titulo: 'Use a Cabeça! Java', 
    autor: 'Bert Bates',
    anoPublicacao: 2007,
    genero: 'Informática e programação'
};
livro.idadePublicacao = anoAtual - livro.anoPublicacao;

if (livro.avaliacao === null) {
    livro.avaliacao = 4.8;
    console.log(`Avaliação atribuída ao livro: ${livro.avaliacao}`);
}

delete livro.avaliacao;

console.log(livro);