/**Faça um algoritmo que receba um valor numérico e verifique se ele é um número primo.
Imprima na tela se o número é primo ou não. */
let num = 5;
let primo = true;

if(num <= 1) {
    primo = false;
}

for (let i = 2; i < numero; i++) {
  if (numero % i === 0) {
    ehPrimo = false;
  }
}

if (ehPrimo) {
  console.log(numero + " é primo");
} else {
  console.log(numero + " não é primo");
}