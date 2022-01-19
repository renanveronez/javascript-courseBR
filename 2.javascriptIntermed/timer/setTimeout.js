function mudarCor() {
  let h = document.getElementsByTagName("h1")[0]
  h.style.color = "blue";
}
function mudarTexto() {
  let h = document.getElementsByTagName("h1")[0]
  h.innerHTML = "Novo Título";

  setTimeout(mudarCor, 2000)
}

