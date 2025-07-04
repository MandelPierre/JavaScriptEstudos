/*
Exercício 14: Configuração de Aplicação via JSON
*/

const configJsonString = JSON.stringify({
    nomeDoApp: "MeuApp",
    versao: "1.0.0",
    modulosAtivos: ["dashboard", "relatorios", "usuarios"]
}, null, 2);

const config = JSON.parse(configJsonString);

if (config.modulosAtivos.includes("relatorios")) {
    console.log("O módulo 'relatorios' está ativo.");
} else {
    console.log("O módulo 'relatorios' NÃO está ativo.");
}

const configJsonString2 = JSON.stringify({
    nomeDoApp: "OutroApp",
    versao: "1.1.0",
    modulosAtivos: ["dashboard", "usuarios"]
}, null, 2);

const config2 = JSON.parse(configJsonString2);

if (config2.modulosAtivos.includes("relatorios")) {
    console.log("O módulo 'relatorios' está ativo em OutroApp.");
} else {
    console.log("O módulo 'relatorios' NÃO está ativo em OutroApp.");
}


