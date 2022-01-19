
let jogador = document.getElementById("jogador");

let xInicial = 0
let yInicial = 0

function moverJogadorPara(x, y) {
  let posX = x + "px"
  let posY = y + "px"
  if (x < 500) {
    jogador.style.top = posX;
    jogador.style.left = posY;
  }
  else {
    xInicial = 0
    yInicial = 0
  }
}

setInterval(function () {
  moverJogadorPara(xInicial++, yInicial++)
}, 10)