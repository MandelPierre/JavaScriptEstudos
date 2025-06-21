const anoAtual = new Date().getFullYear();

const livro = {
    titulo: 'Use a Cabeça! Java', 
    autor: 'Bert Bates',
    anoPublicacao: 2007,
    genero: 'Informática e programação'
};
livro.idadePublicacao = anoAtual - livro.anoPublicacao;

function exibeInfoLivro(objLivro, infoLivro) {
    return objLivro[infoLivro];
}

console.log(exibeInfoLivro(livro, 'titulo'));
console.log(exibeInfoLivro(livro, 'autor'));
console.log(exibeInfoLivro(livro, 'anoPublicacao'));
console.log(exibeInfoLivro(livro, 'genero'));
console.log(exibeInfoLivro(livro, 'idadePublicacao'));