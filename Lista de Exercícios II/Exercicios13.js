/*
Exercício 13: Consumo de API (Simulação)
*/

function importarUsuario(jsonString) {
    const usuario = JSON.parse(jsonString);
    console.log(`Profissão do usuário: ${usuario.dados_pessoais.profissao}`);
}

const dadosApi = '{"id": 101, "nome": "Ana Clara", "dados_pessoais": {"idade": 28, "profissao": "Engenheira de Software"}}';
importarUsuario(dadosApi);


