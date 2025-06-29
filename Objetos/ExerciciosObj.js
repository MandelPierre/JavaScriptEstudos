// Criação do objeto pessoa
const pessoa = {
  nome: "João",
  notas: [8.5, 9.0, 7.5, 8.0],

  // Método para calcular a média das notas
  calcularMediaNotas: function () {
    const soma = this.notas.reduce((acumulador, nota) => acumulador + nota, 0);
    const media = soma / this.notas.length;
    return media;
  },

  // Método para classificar o desempenho com base na média
  classificarDesempenho: function () {
    const media = this.calcularMediaNotas();

    if (media >= 9) {
      return "Desempenho excelente";
    } else if (media >= 7.6 && media < 9) {
      return "Bom desempenho";
    } else if (media >= 6 && media <= 7.5) {
      return "Desempenho regular";
    } else {
      return "Desempenho insuficiente";
    }
  }
};

// Chamando os métodos e exibindo os resultados
const media = pessoa.calcularMediaNotas();
console.log(`Média das notas de ${pessoa.nome}: ${media.toFixed(2)}`);

const desempenho = pessoa.classificarDesempenho();
console.log(`Classificação de desempenho: ${desempenho}`);

const carro = {
    Marca: "Honda",
    Modelo: "Civic Si",
    Ano: 2009,
    Cor: "Preto"
};

console.log("\nPropriedades do carro");

for (var prop in carro) {
    console.log(`${prop}: ${carro[prop]}`);
}

carro.KmRodado = "200.000 Km";
carro.Motor = "2.0 i-VETC";
carro.Cambio = "Manual";

console.log("\nPropriedades do carro atualizadas");

for (var propAtt in carro){
    console.log(`${propAtt}: ${carro[propAtt]}`);
}
