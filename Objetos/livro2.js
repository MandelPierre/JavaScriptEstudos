const anoAtual = new Date().getFullYear();

const livro = {
    titulo: 'Use a Cabeça! Java', 
    autor: 'Bert Bates',
    anoPublicacao: 2007,
    genero: 'Informática e programação'
};

livro.idadePublicacao = anoAtual - livro.anoPublicacao;

const mostrarDetalhes = `
Título: ${livro.titulo}
Autor: ${livro.autor}
Ano de Publicação: ${livro.anoPublicacao}
Gênero: ${livro.genero}
Idade da Publicação: ${livro.idadePublicacao} anos
`;

console.log(mostrarDetalhes);