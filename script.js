var segredo = +(Math.random() * 10).toFixed();
var resultado = document.getElementById("resultado");

// console.log(segredo);

var tentativas = 0;

function Chutar() {
  var gameover = +document.querySelector("#gameover").value;
  // console.log(gameover)
  var chute = +document.getElementById("valor").value;
  if (chute == segredo) {
    resultado.innerHTML = "PARABÉNS!!!<br>Você acertou!<br>:D";
    document.querySelector("#dica").remove();
    document.querySelector("#chutar").remove();
  } else if (chute < 0 || chute > 10) {
    resultado.innerHTML = "Número inválido<br>:|";
    document.querySelector("#dica").innerHTML = "";
  } else {
    resultado.innerHTML = "Você errou!<br>Tente novamente <br>:/";
    if (chute < segredo) {
      document.querySelector("#dica").innerHTML =
        "Dica: o número é maior do que o que você chutou...";
    } else {
      document.querySelector("#dica").innerHTML =
        "Dica: o número é menor do que o que você chutou...";
    }
  }
  tentativas++;
  if (tentativas == gameover && chute != segredo) {
    alert("GAME OVER!");
    resultado.innerHTML =
      "FIM DE JOGO!<br>:(<br>O número era <b>" + segredo + "</b>";
    document.querySelector("#chutar").remove();
    document.querySelector("#dica").remove();
  }
  event.preventDefault();
}

// document.querySelector("#chutar").addEventListener("click", Chutar);
