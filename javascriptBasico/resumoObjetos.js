// 1º maneira de criar um Objeto, abrindo e fechando chaves
var a = {}

// 2º maneira de criar um Objeto, dentro da função
function obj(n, s) {
  return {
    nome: n,
    sobrenome: s
  }
}

var b = obj("Renan", "Veronez")
console.log(b);

// 3º maneira de criar um Objeto, dentro da função, mas sem haver um retorno
// Pra esse modelo sem return, é necessário instanciar com o New

function obj(n, s) {

  this.nome = n;         // this representa a instância do próprio objeto
  this.sobrenome = s;

}

var c = new obj("Renan", "Veronez")
console.log(c);
console.log(c.nome);
console.log(c["sobrenome"]);
