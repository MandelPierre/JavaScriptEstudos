/*
Exercício 19: Placar de Jogo
*/

function gerenciarPlacar(jogadores) {
    return jogadores.map(jogador => {
        let classificacao;
        if (jogador.pontos > 100) {
            classificacao = 'Ouro';
        } else if (jogador.pontos > 50) {
            classificacao = 'Prata';
        } else {
            classificacao = 'Bronze';
        }
        return { ...jogador, classificacao };
    });
}

const jogadores = [
    { nome: 'Jogador A', pontos: 120 },
    { nome: 'Jogador B', pontos: 70 },
    { nome: 'Jogador C', pontos: 30 },
    { nome: 'Jogador D', pontos: 101 }
];

const placarAtualizado = gerenciarPlacar(jogadores);
console.log("Placar Atualizado:", placarAtualizado);


