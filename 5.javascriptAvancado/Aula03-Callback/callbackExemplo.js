// Dessa forma, o usuário não vai ser exibido quando o listarUsuarios for executado pela 1º vez.
// let usuarios = ["Adriano", "Marcia", "José"];

// function inserirUsuario(nome) {
//   usuarios.push(nome)
// }

// function listarUsuarios() {
//   console.log(usuarios)
// }

// inserirUsuario("Renan");

// listarUsuarios();


// Utilizando o callback, a função inserirUsuario vai demorar 1s para ser executada, mas já vai listar todos usuarios
let usuarios = ["Adriano", "Marcia", "José"];

function inserirUsuario(nome, callbackExemplo) {
  setTimeout(() => {
    usuarios.push(nome);
    callbackExemplo();
  }, 1000)  // Simular um delay na inclusão do usuario
}

function listarUsuarios() {
  console.log(usuarios)
}

inserirUsuario("Renan", listarUsuarios);
