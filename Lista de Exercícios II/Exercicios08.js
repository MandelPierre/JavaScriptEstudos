/*
Exercício 08: Perfil de Usuário
*/

const perfilUsuario = {
    nome: 'Alice',
    email: 'alice@example.com',
    configuracoes: {
        tema: 'escuro',
        notificacoes: true
    }
};

function alternarTema(perfil) {
    perfil.configuracoes.tema = perfil.configuracoes.tema === 'escuro' ? 'claro' : 'escuro';
}

console.log('Tema inicial:', perfilUsuario.configuracoes.tema);
alternarTema(perfilUsuario);
console.log('Tema após alternar:', perfilUsuario.configuracoes.tema);
alternarTema(perfilUsuario);
console.log('Tema após alternar novamente:', perfilUsuario.configuracoes.tema);


