/**Faça um algoritmo que compare três valores inteiros diferentes e imprima na tela os valores em ordem decrescente.*/
let a = 10;
let b = 25;
let c = 15;

let maior, meio, menor;

if (a > b && a > c) {
    maior = a;
    if (b > c) {
        meio = b;
        menor = c;
    } else {
        meio = c;
        menor = b;
    }
} else if (b > a && b > c) {
    maior = b;
    if (a > c) {
        meio = a;
        menor = c;
    } else {
        meio = c;
        menor = a;
    }
} else {
    maior = c;
    if (a > b) {
        meio = a;
        menor = b;
    } else {
        meio = b;
        menor = a;
    }
}

console.log("Valores em ordem decrescente: " + maior + ", " + meio + ", " + menor);