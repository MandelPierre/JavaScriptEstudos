const anoAtual = new Date().getFullYear();

const livro = {
    titulo: 'Use a Cabeça! Java', 
    autor: 'Bert Bates',
    anoPublicacao: 2007,
    genero: 'Informática e programação'
};
livro.idadePublicacao = anoAtual - livro.anoPublicacao;

livro.genero = 'Aventura';
console.log(livro.genero);