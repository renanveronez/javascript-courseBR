// let dog = {
//   sound: "Au Au",
//   speak: function () {
//     console.log(this.sound);
//   }
// }

// let cat = {
//   sound: "Miau",
//   speak: function () {
//     console.log(this.sound);
//   }
// }

// dog.speak();
// cat.speak();

// Refatorando:

function speakGeneric() {
  console.log(this.sound);
}

let dog = {
  sound: "Au Au",
  speak: speakGeneric
}

let cat = {
  sound: "Miau",
  speak: speakGeneric
}

// dog.speak();
// cat.speak();

let bindedFunction = speakGeneric.bind(cat);
bindedFunction();