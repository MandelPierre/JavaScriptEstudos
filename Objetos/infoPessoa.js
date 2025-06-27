//Objeto único com várias propriedades
const pessoa = {
    nome: "Ana Silva",
    idade: 28,
    solteiro: true,
    hobbies: ["ler", "caminhar", "fotografia", "cozinhar"],
    endereco: {
        rua: "Jardim Botanico",
        cidade: "New York",
        estado: "Munique",
    }
};

//Função para mostrar as informações da pessoa individual
function mostrarInfoPessoa(pessoa) {
    console.log(`Nome: ${pessoa.nome}`);
    console.log(`Idade: ${pessoa.idade}`);
    console.log(`Solteiro: ${pessoa.solteiro}`);
    console.log(`Hobbies: ${pessoa.hobbies.join(", ")}`);
    console.log(`Endereço: Rua: ${pessoa.endereco.rua}, Cidade: ${pessoa.endereco.cidade}, Estado: ${pessoa.endereco.estado}`);
}

//Chamando a função para mostrar a pessoa
mostrarInfoPessoa(pessoa);

//LISTA DE PESSOAS (array de objetos)
const arrayPessoas = [
    { nome: "Ana", idade: 25, cidade: "São Paulo" },
    { nome: "Pedro", idade: 30, cidade: "Rio de Janeiro" },
    { nome: "João", idade: 22, cidade: "Belo Horizonte" }
];

//a) Função para mostrar todas as pessoas da lista
function mostrarListaPessoas(lista) {
    lista.forEach((pessoa, index) => {
        console.log(`Pessoa ${index + 1}:`);
        console.log(`  Nome: ${pessoa.nome}`);
        console.log(`  Idade: ${pessoa.idade}`);
        console.log(`  Cidade: ${pessoa.cidade}`);
    });
}

//b) Adicionando uma nova pessoa à lista usando push
arrayPessoas.push({ nome: "Carla", idade: 27, cidade: "Recife" });

//c) Chamando a função para mostrar todas as pessoas (incluindo a nova)
console.log("\nLista de Pessoas");
mostrarListaPessoas(arrayPessoas);

//d) Função para filtrar pessoas por cidade
function filtrarPorCidade(lista, cidade) {
    return lista.filter(pessoa => pessoa.cidade === cidade);
}

//Chamando a função de filtro e exibindo o resultado
const resultadoFiltro = filtrarPorCidade(arrayPessoas, "Recife");
console.log("\nPessoas de Recife");
mostrarListaPessoas(resultadoFiltro);

//Calculadora
const calculadora = {
    soma: functionSoma,
    subtracao: functionSubt,
    multiplicacao: functionMult,
    divisao: functionDivi,
}

function functionSoma(numSoma1, numSoma2){
    return numSoma1 + numSoma2;
}

function functionSubt(numSubt1, numSubt2){
    return numSubt1 - numSubt2;
}

function functionMult(numMult1, numMult2){
    return numMult1 - numMult2;
}

function functionDivi(numDivi1, numDivi2){
    return numDivi1 - numDivi2;
}

//Valores
const numSoma1 = 18
const numSoma2 = 54

const numSubt1 = 9
const numSubt2 = 12

const numMult1 = 23
const numMult2 = 16

const numDivi1 = 10
const numDivi2 = 8


const resultSoma = functionSoma(numSoma1, numSoma2);
const resultSubt = functionSubt(numSubt1, numSubt2);
const resultMult = functionMult(numMult1, numMult2);
const resultDivi = functionDivi(numDivi1, numDivi2);

console.log("Resultados das funçoes")
console.log(resultSoma);
console.log(resultSubt);
console.log(resultMult);
console.log(resultDivi);

