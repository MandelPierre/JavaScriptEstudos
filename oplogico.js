let idade = 18;
let temCarteira = true;
let consumiuBebida = true;

if(idade >= 18 && temCarteira) {
    console.log("Você pode dirigir!");
}

if(idade < 18 || !temCarteira) {
    console.log("Você não poder dirigir!");
}

if(consumiuBebida) {
    console.log("Você não pode dirigir no momento!");
}
