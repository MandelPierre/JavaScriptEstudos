/**Faça um algoritmo que efetue o cálculo do salário líquido de um professor. As informações
fornecidas serão: valor da hora aula, número de aulas lecionadas no mês e percentual de
desconto do INSS. Imprima na tela o salário líquido final.
*/
let valorAula = 20;
let aulasLec = 300;
let percentualInss = 0.14;
let salario = aulasLec * valorAula;
let desconto = salario * percentualInss;
let salarioLiquido = salario - desconto;

console.log(`O salário total deste professor é de ${salario}`)
console.log(`E o salário líquido final é de ${salarioLiquido}`)