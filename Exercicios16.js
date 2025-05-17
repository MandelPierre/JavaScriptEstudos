/*Faça um algoritmo que verifique três valores que representam os três lados de um triângulo e verifique se 
são válidos, determine se o triângulo é equilátero, isósceles ou escaleno.*/
let ladoA = 5;
let ladoB = 5;
let ladoC = 5;

if (ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA) {
    if (ladoA === ladoB && ladoB === ladoC) {
        console.log("Triângulo Equilátero");
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        console.log("Triângulo Isósceles");
    } else {
        console.log("Triângulo Escaleno");
    }
} else {
    console.log("Os valores fornecidos não formam um triângulo válido.");
}