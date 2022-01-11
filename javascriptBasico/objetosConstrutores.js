// ******************* Com dois alunos *********************
// var calcMedia = function () {
//   return (this.nota1 + this.nota2) / 2;
// }

// var turma = [
//   {
//     nome: "Igor",
//     nota1: 9,
//     nota2: 7,
//     media: calcMedia
//   },
//   {
//     nome: "Joao",
//     nota1: 4,
//     nota2: 3,
//     media: calcMedia
//   }
// ]

// var aluno = turma[0];
// console.log(aluno);
// console.log(aluno.media());

// // ******************* Criar função com argumentos, para ser utilizado para vários alunos, passando aluno como argumento ************

// function criarAluno(nome, n1, n2) {
//   return {
//     nome: nome,
//     nota1: n1,
//     nota2: n2,
//     media: function () {
//       return (this.nota1 + this.nota2) / 2;
//     }
//   }
// }

// var aluno2 = criarAluno("Renan", 8, 6);
// console.log(aluno2);
// console.log(aluno2.media());

// ****************

function criarAlunoTres(nome, n1, n2) {   // Essa função não é um objeto, e sim RETORNA um objeto.

  var aluno = {
    nome: nome,
    nota1: n1,
    nota2: n2,
    media: function () {
      return (this.nota1 + this.nota2) / 2;
    }
  }

  return aluno;
}

// Com o construtor da função acima pronto, basta agora incluir a função de criarAluno dentro do array turma.

var turma = [
  criarAlunoTres("Joao", 9, 6),
  criarAlunoTres("Carlos", 7, 4),
  criarAlunoTres("Maria", 8, 6),
]

var aluno1 = turma[0];
var aluno2 = turma[1];


console.log(aluno1);
console.log(aluno1.media());
console.log(aluno2);
console.log(aluno2.media());
console.log(turma[2]);
console.log(turma[2].media());

// turma.forEach(function (sapato) {  // Para passar por todos elementos do array
//   console.log(sapato);
// })

// for (var aluno of turma) {   // for da maneira tradicional
//   console.log(aluno.nome + " - " + aluno.media());
// }


// // ***************************

function alunoObject(nome, n1, n2) {
  this.nome = nome;
  this.nota1 = n1;
  this.nota2 = n2;

  this.media = function () {
    return (this.nota1 + this.nota2) / 2;
  }
  return this;
}

// Instanciar o objeto. Pega um modelo de objeto e transforma em objeto de fato:
var a = new alunoObject("Igor", 8, 7);
var b = new alunoObject("Roberto", 5, 6);

console.log(a);
console.log(b);