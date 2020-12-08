var userChoice = "";
var pcChoice = "";
var res = "";

var contUser = 0;
var contPc = 0;

var piedra = document.getElementById("piedra");
var papel = document.getElementById("papel");
var tijeras = document.getElementById("tijeras");
var userScore = document.getElementById("user-score");
var pcScore = document.getElementById("pc-score");

function updateUser(eleccion) {
  userChoice = eleccion;
}

function updatePc() {
  var num = Math.floor(Math.random() * 3);
  switch (num) {
    case 0:
      pcChoice = "piedra";
      break;
    case 1:
      pcChoice = "papel";
      break;
    case 2:
      pcChoice = "tijeras";
      break;
  }
}

function checkRes() {
  switch (userChoice) {
    case "piedra":
      if (pcChoice == "piedra") {
        res = "Empate";
      } else if (pcChoice == "papel") {
        res = "Derrota";
      } else {
        res = "Victoria";
      }

      break;
    case "papel":
      if (pcChoice == "piedra") {
        res = "Victoria";
      } else if (pcChoice == "papel") {
        res = "Empate";
      } else {
        res = "Derrota";
      }
      break;
    case "tijeras":
      if (pcChoice == "piedra") {
        res = "Derrota";
      } else if (pcChoice == "papel") {
        res = "Victoria";
      } else {
        res = "Empate";
      }
      break;
  }

  if (res == "Victoria") {
    contUser++;
  } else if (res == "Derrota") {
    contPc++;
  } else {
  }
}

function mostrarResultado() {
  userScore.innerHTML = contUser;
  pcScore.textContent = contPc;
}

function main() {
  piedra.addEventListener("click", function () {
    updateUser("piedra");
    updatePc();
    checkRes();

    mostrarResultado();
  });
  papel.addEventListener("click", function () {
    updateUser("papel");
    updatePc();
    checkRes();

    mostrarResultado();
  });
  tijeras.addEventListener("click", function () {
    updateUser("tijeras");
    updatePc();
    checkRes();

    mostrarResultado();
  });
}

main();
