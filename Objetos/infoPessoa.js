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
}

function functionSoma(numSoma1, numSoma2){
    return numSoma1 + numSoma2;
}

const num1 = 3;
const num2 = 5;

const resultadoFunction = functionSoma(num1, num2);
console.log(resultadoFunction);