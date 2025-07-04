/*
Exercício 04: Gestão de Tarefas (Kanban)
*/

function filtrarTarefasPorStatus(listaDeTarefas, statusDesejado) {
    return listaDeTarefas.filter(tarefa => tarefa.status === statusDesejado);
}

const tarefas = [
    { id: 1, titulo: 'Comprar mantimentos', responsavel: 'João', status: 'A Fazer' },
    { id: 2, titulo: 'Pagar contas', responsavel: 'Maria', status: 'Concluído' },
    { id: 3, titulo: 'Preparar apresentação', responsavel: 'João', status: 'Em Andamento' },
    { id: 4, titulo: 'Agendar reunião', responsavel: 'Pedro', status: 'A Fazer' },
    { id: 5, titulo: 'Revisar código', responsavel: 'Maria', status: 'Em Andamento' }
];

const tarefasAFazer = filtrarTarefasPorStatus(tarefas, 'A Fazer');
console.log('Tarefas a Fazer:', tarefasAFazer);

const tarefasConcluidas = filtrarTarefasPorStatus(tarefas, 'Concluído');
console.log('Tarefas Concluídas:', tarefasConcluidas);


