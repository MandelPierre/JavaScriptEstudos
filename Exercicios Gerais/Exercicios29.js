/**Faça um algoritmo que leia uma lista de nomes e imprima na tela os nomes que começam com a letra "A".*/
let nomes = ["Ana", "Bruno", "alice", "Carlos", "Amanda", "beatriz", "Arthur"];

console.log("Nomes que começam com a letra 'A':");

for (let i = 0; i < nomes.length; i++) {
    if (nomes[i][0].toUpperCase() === 'A') {
        console.log(nomes[i]);
    }
}