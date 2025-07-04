/*
Exercício 18: Processamento de Log
*/

function filtrarLogsPorNivel(logs, nivelDesejado) {
    return logs
        .map(logString => JSON.parse(logString))
        .filter(logObjeto => logObjeto.level === nivelDesejado);
}

const logsSistema = [
    '{"level": "info", "message": "Usuário logado"}',
    '{"level": "error", "message": "Falha na conexão com o banco"}',
    '{"level": "info", "message": "Dados salvos"}',
    '{"level": "error", "message": "Erro de autenticação"}'
];

const logsDeErro = filtrarLogsPorNivel(logsSistema, "error");
console.log("Logs de Erro:", logsDeErro);

const logsDeInfo = filtrarLogsPorNivel(logsSistema, "info");
console.log("Logs de Informação:", logsDeInfo);


