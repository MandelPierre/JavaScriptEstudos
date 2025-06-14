const alunos = ["Ana", "João", "Rui"];
const medias = [9, 8, 5, 10, 9];
const cadastro = [medias, alunos];

function exibeNomeENumero(nome){
    if(cadastro[1].includes(nome)){
        const [notas, nomes] = cadastro;
        const indice = cadastro.indexOf(nome);
        const media = cadastro[0][indice];
        console.log(`O aluno ${nome} tem nota = ${media}`);
    } else {
        console.log("Aluno não cadastrado");
    }
}

exibeNomeENumero("Ana");
/*
const medias = [10,8,7.5,6];
const alunos = ["ana", "rui", "yuri", "joao"];
const cadastro = [medias,alunos];

function exibeNomeENumero(nome){
    if(cadastro[1].includes(nome)){
        const [notas,nomes] = cadastro
        const indice = cadastro[1].indexOf(nome);
        const media = cadastro[0][indice];
        console.log(`O aluno ${nome} tem nota = ${media}`);
    } else{
        console.log("Aluno não cadastrado")
    }
}

exibeNomeENumero("rui");
*/