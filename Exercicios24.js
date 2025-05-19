/**Faça um algoritmo que receba um valor numérico e verifique se ele é um número primo.
Imprima na tela se o número é primo ou não. */
let num = 3;
let primo = true;

if (num <= 1) {
  primo = false;
} else {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      primo = false;
      break;
    }
  }
}

if (primo) {
  console.log(`O número ${num} é um número primo`);
} else {
  console.log(`O número ${num} não é um número primo`);
}