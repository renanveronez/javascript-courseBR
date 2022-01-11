function loaded() {
  let t = document.getElementById("titulo")

  // t.onclick = mudarTexto;
  // ou

  t.addEventListener("mouseover", mudarTexto)
  t.addEventListener("mouseout", mouseout)
}

function mudarTexto() {
  this.innerHTML = "Novo texto"
}

function mouseout() {
  this.innerHTML = "Mouse fora do elemento"
}