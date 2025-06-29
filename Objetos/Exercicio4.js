const carro = {
    Marca: "Honda",
    Modelo: "Civic Si",
    Ano: 2009,
    Cor: "Preto"
};

Object.defineProperty(carro, "placa", {
    value: "ABC-1234",
    enumerable: false,
    writable: true,
    configurable: true
});

console.log("Propriedades enumeráveis com for...in:");
for (let chave in carro) {
    console.log(chave + ": " + carro[chave]);
}

const chavesEnumeraveis = Object.keys(carro);
console.log("\nChaves enumeráveis com Object.keys():");
console.log(chavesEnumeraveis);

console.log("\nAcessando diretamente a propriedade 'placa':");
console.log("Placa:", carro.placa);