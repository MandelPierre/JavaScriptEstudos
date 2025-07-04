/*
Exercício 16: Sistema de Blog
*/

const posts = [
    {
        id: 1,
        titulo: "Primeiros Passos em JavaScript",
        autor: "Ana",
        comentarios: ["Ótimo artigo!", "Muito útil para iniciantes."]
    },
    {
        id: 2,
        titulo: "Entendendo o DOM",
        autor: "Bruno",
        comentarios: ["Bem explicado."]
    }
];

function adicionarComentario(postId, novoComentario) {
    const post = posts.find(p => p.id === postId);
    if (post) {
        post.comentarios.push(novoComentario);
        console.log(`Comentário adicionado ao post "${post.titulo}".`);
    } else {
        console.log(`Post com ID ${postId} não encontrado.`);
    }
}

console.log("Posts antes de adicionar comentário:", JSON.stringify(posts, null, 2));
adicionarComentario(1, "Concordo plenamente!");
adicionarComentario(3, "Post inexistente.");
console.log("\nPosts depois de adicionar comentário:", JSON.stringify(posts, null, 2));


