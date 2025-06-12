/**Faça um algoritmo que leia uma string e verifique se ela é um palíndromo (ou seja, se permanece igual quando lida de trás para frente).*/
let frase = "Socorram me subi no onibus em Marrocos";

// Remove espaços e coloca tudo em minúsculas
let texto = frase.replace(/\s+/g, '').toLowerCase();

// Inverte a string
let invertido = texto.split('').reverse().join('');

// Verifica se é palíndromo
if (texto === invertido) {
    console.log("É um palíndromo!");
} else {
    console.log("Não é um palíndromo.");
}