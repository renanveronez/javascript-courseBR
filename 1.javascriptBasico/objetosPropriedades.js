
var aluno = {   // Conjunto de propriedades, que correspondem a chave e valor
  nome: "Renan",
  nota1: [7.5, 5.0]
}

console.log(aluno.nome, aluno.nota1);
// Que é o mesmo que:
console.log(aluno["nome"], aluno["nota1"]);

console.log(aluno); // Vai imprimir toda a estrutura do  objeto

// Para incluir propriedades:

aluno.matricula = 12345;
aluno["middleName"] = "Veronez";
// ou
var novaPropriedade = "lastName";
aluno[novaPropriedade] = "Drechsler";

console.log(aluno);

