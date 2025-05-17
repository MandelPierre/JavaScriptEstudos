/*Faça um algoritmo com o nome e a idade de uma pessoa e imprima na tela o nome da pessoa e sua faixa etária conforme tabela abaixo.*/
let idade = 45;
let nome = 'Josevaldo';

if(idade <= 12) {
    console.log("O", nome, "é criança");
} else if(idade >= 13 && idade <= 17) {
    console.log("O", nome, "é adolescente");
} else if(idade >= 18 && idade <= 64) {
    console.log("O", nome, "é adulto");
} else if(idade >= 65) {
    console.log("O", nome, "é idoso");
}
