/*Faça um algoritmo com quatro notas obtidas por um aluno, calcule a média das notas obtidas, 
 imprima na tela o nome do aluno e se o aluno foi aprovado ou reprovado.
 Para o aluno ser considerado aprovado sua média final deve ser maior ou igual a 7. 
*/
let nota1 = 8;
let nota2 = 7.5;
let nota3 = 6;
let nota4 = 9.5;
let aluno = 'José Pinto da Silva';
let media = (nota1 + nota2 + nota3 + nota4) / 4;

if(media >= 7) {
    console.log(`O aluno ${aluno}, está aprovado! Sua média foi ${media}`)
}else{
    console.log(`O aluno ${aluno}, está reprovado! Sua média foi ${media}`)
}


