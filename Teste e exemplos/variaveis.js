//Atividade 1
let nome = "Jonas";
let idade = 63;
let casado = true;

console.log(`A variável nome ${nome} é do tipo String`);
console.log(`A variável idade ${idade} é do tipo Número`);
console.log(`A variável casado ${casado} é do tipo booleano`);

//Atividade 2
const nomeUm = "Pierre";
const nomeDois = "Mandel";
let nomeJunto;

const juncao = nomeUm + " " + nomeDois;
nomeJunto = `${nomeUm} ${nomeDois}`;
console.log(`Meu nome completo é ${juncao}`);

//Atividade 3
let num = 5;
let name = "Tênis";
let texto = `Tenho ${num} ${name}`;

console.log(texto)

//Atividade 4
let minhaVariavel = 'Primeiro valor';
console.log(minhaVariavel);

minhaVariavel = 'Novo valor';
console.log(minhaVariavel);

//Atividade 5
var varUm = 5;
let varDois = 2;

if (varUm < 4) {
    console.log(varUm);
} else {
    console.log(varDois);
}

//Atividade 6
const estaChovendo = true;

if (estaChovendo) { // Ou inf (estaChovendo === true)
    console.log('é melhor levar um guarda-chuva!');
} else {
    console.log('O tempo está bom, sem necessidade de guarda0chuva.');
}