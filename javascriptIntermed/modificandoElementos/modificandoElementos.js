let p = document.getElementById("p1");

p.innerHTML = "Novo conteúdo"
p.innerText = "Conteúdo mais novo"
p.textContent = "Mais novo ainda"

let p2 = document.getElementById("p2");
let p4 = document.getElementById("p4");
let p5 = document.getElementById("p5");
let p6 = document.getElementById("p6");

p2.textContent = "P2: <h2>Tem um h2 dentro do p</h2>"
p4.innerText = "P4: <h2>Tem um h2 dentro do p</h2>"

p5.innerHTML = "P5: <h2>Tem um h2 dentro do p</h2>"
// p5 é o único que vai colocar a propriedade h2


console.log(p6.innerText)
// Não vai aparecer o span

console.log(p6.textContent)
// Vai aparecer o span


let p7 = document.getElementById("p7");
p7.style = "color:blue"
p7.style.backgroundColor = "yellow"

let meuAtt = p7.getAttribute("meuAtt")
console.log(meuAtt)

p8.setAttribute("meuAtt2", "Substituir nome")
console.log(p8)
// Vai retornar com meuatt2="Substituir nome"

p8.setAttribute("novoAtributo", "Qualquer coisa")
// Vai criar um novo atributo com o id "Qualquer coisa"