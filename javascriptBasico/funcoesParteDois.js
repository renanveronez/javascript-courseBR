
// Passando a função para uma variável
function saudacao() {
  return "Olá mundo"
}

var s = saudacao;
console.log(s);     // -> Vai imprimir a estrutura da função.
console.log(s());   // -> Vai imprimir o retorno da função -> Olá mundo


// ****** Atribuindo a função a variáveis ********
function media(n1, n2) {
  var nota1 = n1;
  var nota2 = n2;
  var media = (nota1 + nota2) / 2;

  return media;
}

// Atribuir a função a uma variável
var m = media;

// Teremos o mesmo resultado em resultado e resutlado2:
var resultado2 = m(10, 5);
var resultado1 = media(10, 5);

console.log(resultado2);
console.log(resultado1);

// ****** Função Anônima e Arrow Function ********

//Função anônima -> Não há nome para a função e ela já é atribuída à variável
var media2 = function (n1, n2) {
  return (n1 + n2) / 2;
}
var m2 = media2(8, 4);
console.log(`Media 2 (Função Anônima):  ${m2}`);

// Arrow Function -> Não há necessário explicitar que é uma função. Deve ser posto tb a "=>"
var media3 = (n1, n2) => {
  return (n1 + n2) / 2;
}

var m3 = media3(10, 0);

console.log("Media 3 (Arrow Function): " + m3);