
function ola() {
  console.log("Olá");
}

function tchau() {
  console.log("Tchau");
}

function saudacao(qualSaudacao, nome) {
  qualSaudacao();
  console.log(nome)
}

saudacao(ola, "Renan")
saudacao(tchau, "Renan")