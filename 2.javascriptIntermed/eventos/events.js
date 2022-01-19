function h3click() {
  console.log("Executando a função")
}

function changeH2() {

  let input = document.getElementById("alterarTexto")
  let h2 = document.getElementsByTagName("h2")[0]

  h2.innerText = input.value;
}

function changeH2this(qualquernome) {
  let h2 = document.getElementsByTagName("h2")[1]
  h2.innerText = qualquernome.value;
}

function changeH2oninput(qualquernome) {
  let h2 = document.getElementsByTagName("h2")[2]
  h2.innerText = qualquernome.value;
}

function hideH3() {
  let hide = document.getElementById("hideText");
  hide.style.display = "none";
}
