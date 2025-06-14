const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for (let i = 0; i < notas.length; i++) {
    somaDasNotas += notas[i];
}

console.log(somaDasNotas);
const media = somaDasNotas / notas.length;
console.log(`A média das notas é ${media}`);

const notasF = [10, 9, 8, 4];

let somaDasNotasF = 0;

for(let nota of notasF) {
    somaDasNotasF += nota;
}

const mediaF = somaDasNotasF / notasF.length;
console.log("A média é ", mediaF);

const numeros = [10, 8, 7.5, 6.4];
const alunos = ["Ana", "Marcos", "rui", "joao"];

numeros.forEach(function(nota){
    console.log(nota);
});

const novasNotas = numeros.map(function(nota){
    return nota += 1;
});
console.log(novasNotas);