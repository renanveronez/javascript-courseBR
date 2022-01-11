

## Tipos de For
```js

let iterable = new Map([["a", 3], ["b", 4], ["c", 5]]);

for (let entry of iterable) {
  console.log(entry);
}
// [a, 3]
// [b, 4]
// [c, 5]

for (let [key, value] of iterable) {
  console.log(key);
  // console.log(value);
}
// a
// b
// c


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

// console.log(aluno1);
// console.log(aluno1.media());
// console.log(aluno2);
// console.log(aluno2.media());
// console.log(turma[2]);
// console.log(turma[2].media());

turma.forEach(function (sapato) {  // Para passar por todos elementos do array
  console.log(sapato);
})

for (var aluno of turma) {   // for da maneira tradicional
  console.log(aluno.nome + " - " + aluno.media());
}

```

## 