const estudante = {
    nome: 'Joao',
    cpf: '1238763681',
}

estudante.nome //Notação de ponto

function exibeInfoEstudante(objEstudante, infoEstudante) {
    return objEstudante[infoEstudante]; //Notação colchetes
}

//Informando a propriedade com a função
console.log(exibeInfoEstudante(estudante, 'nome'));
console.log(exibeInfoEstudante(estudante, 'cpf'));
//Informando a propriedade com uma String
console.log(estudante['nome']);
console.log(estudante['cpf'], "\n");
console.log(estudante.cpf.substring(0,5));

estudante.sobrenome = 'Santos';
console.log(estudante.nome, estudante.sobrenome);