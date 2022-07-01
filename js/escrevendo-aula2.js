//o que é uma variável?
/*
  A variável é um espaço reservado na memória
  do computador.
  Vamos declarar variáveis no JavaScript?

*/

var button = document.querySelector("button");
var ct = 0

button.onclick = function () {
  var nome = prompt("Qual é o comando para inspencionar um repositório no git?");
  if ((nome == "git status")) {
    alert("O" + nome + ", serve para inspeciona um diretório.Parabéns você acertou!");
    window.location = "aula3.html";

  }
  else {
    ct++;
    alert("você errou!, você tem mais " + (3 - ct) + " tentativas");
    /* alert("O" + nome + ", serve para iniciar o git.você errou!");*/

    if (ct > 2) {
      window.location = "aula1.html";
    }
  }
}