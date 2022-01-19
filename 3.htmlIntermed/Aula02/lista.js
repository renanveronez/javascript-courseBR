let lista = document.getElementById("lista");
let num = parseInt(lista.getAttribute("num"))

let conteudo = ""

for (let i = 1; i <= num; i++) {

  conteudo += "<li>" + i + "</li>"

}

lista.innerHTML = conteudo;