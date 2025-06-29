const carro = {
    Marca: "Honda",
    Modelo: "Civic Si",
    Ano: 2009,
    Cor: "Preto",
    ligado: false,

    //Método para ligar o carro
    ligar: function () {
        if (this.ligado) {
            console.log("O carro já está ligado.");
        } else {
            this.ligado = true;
            console.log("O carro foi ligado.");
        }
    },

    //Método para desligar o carro
    desligar: function () {
        if (!this.ligado) {
            console.log("O carro já está desligado.");
        } else {
            this.ligado = false;
            console.log("O carro foi desligado.");
        }
    },

    //Método para obter detalhes do carro
    obterDetalhes: function () {
        for (var prop in carro) {
            if (typeof carro[prop] !== "function"){
                console.log(`${prop}: ${carro[prop]}`)
            }
        }
    }
};

carro.ligar();
carro.ligar();
carro.desligar();
carro.desligar();

console.log(carro.obterDetalhes());
