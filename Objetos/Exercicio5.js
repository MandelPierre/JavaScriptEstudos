const carro = {
    Marca: "Honda",
    Modelo: "Civic Si",
    Ano: 2009,
    Cor: "Preto",
};

const carroNovo = {
    Marca: "Volkswagen",
    Modelo: "Gol",
    Ano: 2015,
    Cor: "Branco"
};

//Usa o operador de espalhamento para criar um novo objeto combinando os dois
const carroComNovosDetalhes = {
    ...carro,
    ...carroNovo
};

console.log("Objeto combinado (carroComNovosDetalhes):");
console.log(carroComNovosDetalhes);

//Modifica uma propriedade do novo objeto
carroComNovosDetalhes.Cor = "Vermelho";

console.log("\nApós alterar a propriedade 'Cor' do carroComNovosDetalhes:");
console.log(carroComNovosDetalhes);