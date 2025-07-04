/*
Exercício 02: Validador de Força de Senha
*/

function validarSenha(senha) {
    if (senha.length < 8) {
        return false;
    }

    if (!/[A-Z]/.test(senha)) {
        return false;
    }

    if (!/[a-z]/.test(senha)) {
        return false;
    }

    if (!/[0-9]/.test(senha)) {
        return false;
    }

    return true;
}

console.log(`'Senha123' é válida? ${validarSenha('Senha123')}`);
console.log(`'senhafraca' é válida? ${validarSenha('senhafraca')}`);
console.log(`'SENHAFORTE1' é válida? ${validarSenha('SENHAFORTE1')}`);
console.log(`'MinhaSenha1' é válida? ${validarSenha('MinhaSenha1')}`);
console.log(`'1234567' é válida? ${validarSenha('1234567')}`);


