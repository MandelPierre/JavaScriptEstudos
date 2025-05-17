/*Francisco tem 1,50m e cresce 2 centímetros por ano, enquanto 
Sara tem 1,10m e cresce 3 centímetros por ano. Faça um algoritmo que calcule 
e imprima na tela em quantos anos serão necessários para que Sara seja maior que Francisco. */
let francisco = 1.50;
let sara = 1.10;
let anos = 0;

while (sara < francisco) {
    francisco += 0.02;
    sara += 0.03;
    anos++;
}

console.log("Sara será mais alta que Francisco em " + anos + " anos.");
console.log("Altura final da Sara: " + sara.toFixed(2) + "m");
console.log("Altura final do Francisco: " + francisco.toFixed(2) + "m");