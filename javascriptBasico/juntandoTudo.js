// Nome do aluno - Nota 1 , Nota 2, Media - Aprovado ou Reprovado

var nomes = ["Igor", "José", "Maria"];
var notasA = [7.0, 6.5, 9.5];
var notasB = [8.0, 7.0, 8.5];

function media(n1, n2) {
  return (n1 + n2) / 2;
}

function passou(resultadoDaMedia) {
  var resultado = "Reprovado"

  if (resultadoDaMedia > 7) {
    resultado = "Aprovado"
  }

  return resultado;

  // Ou
  if (resultadoDaMedia > 7) {
    return "Aprovado";
  } else {
    return "Reprovado";
  }
}

for (var index in nomes) {
  console.log(
    "Nome: " + nomes[index] + " " +
    "Nota A: " + notasA[index] + " " +
    "Nota B: " + notasB[index] + " " +
    "Media: " + media(notasA[index], notasB[index])
  );
}

// Refatorando:
console.log(" ")
console.log("Refatorando:")
for (var index in nomes) {

  var nomesAlunos = nomes[index];
  var nota1 = notasA[index];
  var nota2 = notasB[index];
  var resultadoMedia = media(nota1, nota2);

  console.log(
    "Nome: " + nomesAlunos + " " +
    "Nota A: " + nota1 + " " +
    "Nota B: " + nota2 + " " +
    "Media: " + resultadoMedia + " " +
    "Resultado: " + passou(resultadoMedia)
  );
}