let produto = 10
let escolha = 1
console.log("escolha como pagar: 1 - À Vista em Dinheiro ou Pix, recebe 15% de desconto, 2 - À Vista no cartão de crédito, recebe 10% de desconto  3 - Parcelado no cartão em duas vezes, preço normal do produto sem juros 4- Parcelado no cartão em três vezes ou mais, preço normal do produto mais juros de 10%");

if (escolha===1){

    produto -= produto * 15/100

    console.log(produto)
}

if(escolha===2){
    produto -= produto * 10/100

    console.log(produto)
}

if(escolha===3){
    console.log(produto)
}

if(escolha===4){
    produto += produto * 10/100

    console.log(produto)
}