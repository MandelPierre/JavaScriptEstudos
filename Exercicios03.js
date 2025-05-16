/**Faça um algoritmo que compare dois valores inteiros A e B, se os valores de A e B forem iguais, 
deverá somar os dois valores, caso contrário deverá multiplicar A por B. Ao final de qualquer um dos 
cálculos deve-se atribuir o resultado a uma variável C e imprimir seu valor no console. */
let a = 4;
let b = 6;

if(a == b) {
    let c = a + b;
    console.log("A soma destes números será:", c);
}else{
    let c = a * b;
    console.log("A multiplicação destes números será:", c);
}