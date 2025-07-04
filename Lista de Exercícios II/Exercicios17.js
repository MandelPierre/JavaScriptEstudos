/*
Exercício 17: Biblioteca de Mídia
*/

const biblioteca = {
    "Stephen King": [
        { titulo: "It: A Coisa", anoPublicacao: 1986 },
        { titulo: "O Iluminado", anoPublicacao: 1977 }
    ],
    "J.K. Rowling": [
        { titulo: "Harry Potter e a Pedra Filosofal", anoPublicacao: 1997 },
        { titulo: "Harry Potter e a Câmara Secreta", anoPublicacao: 1998 }
    ]
};

function buscarLivrosPorAutor(autor) {
    if (biblioteca[autor]) {
        console.log(`Livros de ${autor}:`);
        biblioteca[autor].forEach(livro => {
            console.log(`- ${livro.titulo} (${livro.anoPublicacao})`);
        });
    } else {
        console.log(`Autor "${autor}" não encontrado na biblioteca.`);
    }
}

buscarLivrosPorAutor("Stephen King");
buscarLivrosPorAutor("J.K. Rowling");
buscarLivrosPorAutor("George Orwell");


