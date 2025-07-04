/*
Exercício 11: Cópia Segura de Objetos
*/

function clonarPerfil(perfil) {
    return JSON.parse(JSON.stringify(perfil));
}

const perfilOriginal = {
    nome: 'Bob',
    email: 'bob@example.com',
    configuracoes: {
        tema: 'claro',
        notificacoes: false
    }
};

const perfilCopia = clonarPerfil(perfilOriginal);

console.log('Perfil Original:', perfilOriginal);
console.log('Perfil Cópia:', perfilCopia);

perfilCopia.nome = 'Roberto';
perfilCopia.configuracoes.tema = 'escuro';

console.log('\nApós modificação da cópia:');
console.log('Perfil Original (não deve mudar):', perfilOriginal);
console.log('Perfil Cópia (deve mudar):', perfilCopia);


