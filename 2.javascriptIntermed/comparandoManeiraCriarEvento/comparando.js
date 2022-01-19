function f() {
  console.log("teste")
  console.log(this);  // O elemento this vai ser o "window"
}

function f1() {
  console.log("teste f1")
  console.log(this); // O elemento this vai ser o "h1"
}

window.onload = function () {
  let h1 = document.getElementsByTagName("h1")[0];

  h1.addEventListener("click", f1);
}