
// Função Normal
function dobroA(x) {
  return (2 * x);
}
console.log(dobroA(5));

//***************************************
// Ou Função Anônima
let dobroB = function (x) {
  return (2 * x);
}
console.log(dobroB(6));

//***************************************
// Ou Arrow Function
let dobroC = (x) => {
  return (2 * x);
}
console.log(dobroB(7))

// Arrow function "não entende" o this


//***************************************
// Se a Arrow Function retorna unicamente o próprio retorno, então pode ser abreviada ainda mais

let dobroD = x => 2 * x;
console.log((dobroD(8)))