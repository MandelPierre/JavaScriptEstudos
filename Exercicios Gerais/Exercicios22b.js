/**Faça um algoritmo que calcule a quantidade de litros de combustível gastos em uma
viagem, sabendo que o carro faz 12km com um litro. Deve-se fornecer ao usuário o tempo que
será gasto na viagem a sua velocidade média, distância percorrida, a quantidade de litros
utilizados para fazer a viagem e o valor gasto com combustível.*/
let tempoHoras = 5;
let velocidadeMedia = 80;
let precoCombustivel = 5.50;
let consumoPorLitro = 12;
let distancia = tempoHoras * velocidadeMedia;
let litrosUsados = distancia / consumoPorLitro;
let valorGasto = litrosUsados * precoCombustivel;

console.log(`Tempo de viagem: ${tempoHoras} horas`);
console.log(`Velocidade média: ${velocidadeMedia} km/h`);
console.log(`Distância percorrida: ${distancia} km`);
console.log(`Combustível usado: ${litrosUsados.toFixed(2)} litros`);
console.log(`Valor gasto com combustível: R$ ${valorGasto.toFixed(2)}`);