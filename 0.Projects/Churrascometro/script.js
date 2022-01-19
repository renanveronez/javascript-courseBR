let inputAdultos = document.getElementById("adultos")
let inputCriancas = document.getElementById("criancas")
let inputDuracao = document.getElementById("duracao")

// console.log(
//   inputAdultos.value,
//   inputCriancas.value,
//   inputDuracao.value,
// )

let resultado = document.getElementById("resultado")

function calcular() {
  console.log("Calculando...")

  let adultos = inputAdultos.value;
  let criancas = inputCriancas.value;
  let duracao = inputDuracao.value;

  let qtdTotalCarne = carnePP(duracao) * adultos + (400 / 2 * criancas);
  console.log(qtdTotalCarne);
  let qtdTotalBebidas = bebidasPP(duracao) * adultos + (400 / 2 * criancas);
  console.log(qtdTotalBebidas);
  let qtdTotalCerveja = cervejaPP(duracao) * adultos;
  console.log(qtdTotalCerveja);

  resultado.innerHTML = `<p>${qtdTotalCarne / 1000} Kg de Carne</p>`
  resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja / 355)} latas de Cerveja</p>`
  resultado.innerHTML += `<p>${qtdTotalBebidas}ml de Bebidas</p>`
  // O += é pq o primeiro cria um innerHTML e no segundo e terceiro é pra dizer q é pra acrescentar


}

function carnePP(duracao) {

  if (duracao >= 6) {
    return 650
  } else {
    return 400
  }
}

function cervejaPP(duracao) {

  if (duracao >= 6) {
    return 2000
  } else {
    return 1200
  }
}

function bebidasPP(duracao) {

  if (duracao >= 6) {
    return 1000
  } else {
    return 1500
  }
}