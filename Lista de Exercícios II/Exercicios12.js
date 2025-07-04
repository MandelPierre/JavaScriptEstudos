/*
Exercício 12: Exportação de Dados para API
*/

function exportarDadosParaJSON(dados) {
    return JSON.stringify(dados, null, 2);
}

const tarefasEx4 = [
    { id: 1, titulo: 'Comprar mantimentos', responsavel: 'João', status: 'A Fazer' },
    { id: 2, titulo: 'Pagar contas', responsavel: 'Maria', status: 'Concluído' },
    { id: 3, titulo: 'Preparar apresentação', responsavel: 'João', status: 'Em Andamento' }
];

const jsonTarefas = exportarDadosParaJSON(tarefasEx4);
console.log('Dados exportados para JSON:\n', jsonTarefas);


