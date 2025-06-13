//Teste de puxar metade do array
const numerosMetade = [0, 1, 2, 3, 4, 5, 6];

const metade = numerosMetade.slice(0, numerosMetade.length/2);
const outraMetade = numerosMetade.slice(numerosMetade.length/2);
console.log(metade);
console.log(outraMetade);

//Delete e add arrays
const arrayName = ["Pierre", "Ana", "Caio", "Jordan"];
console.log(arrayName);
arrayName.splice(1, 2, "João");
console.log(arrayName);

//Crie uma função que receba dois arrays e os concatene em um único array.
const num = [90, 91, 92, 93, 94, 95];
const num2 = [80, 81, 82, 83, 84, 85, 86];

const numJuntos =  num.concat(num2);
numJuntos
console.log(numJuntos);

/**Crie um array chamado numeros contendo números de 1 a 10. 
 * Utilize o método slice para criar um novo array chamado parteNumeros 
 * que contenha apenas os números de índice 3 a 7 de numeros. */
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosSlice = numeros.slice(2, numeros.length-3);
console.log(numerosSlice);

/**Dado o array frutas contendo frutas que desejamos comprar na feira: const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi']
Utilize o método splice para remover as frutas no índice 2 e 3 e, em seguida, adicione as frutas 'Kiwi' e 'Pêssego' nesses mesmos índices.*/
const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi'];
frutas.splice(2, 3, "Kiwi", "Pêssego");
console.log(frutas);

/**Crie dois arrays chamados menuPrincipal e menuDeSobremesas contendo opções do cardápio de 
 * um restaurante.Utilize o método concat para criar um novo array menuCompleto contendo 
 * todos os elementos de menuPrincipal seguidos pelos elementos de menuDeSobremesas. */
const menuPrincipal = ["Bolonhesa", "Batata-Frita", "Picanha"];
const menuDeSobremesas = ["Sorvete", "Petit Gateu", "Sagu"];
const menuCompleto = menuPrincipal.concat(menuDeSobremesas);
console.log(menuCompleto);