//o que é uma variável?
/*
  A variável é um espaço reservado na memória
  do computador.
  Vamos declarar variáveis no JavaScript?

*/

var button = document.querySelector("button");

button.onclick = function () {
  var nome = prompt("Qual é o comando para inspencionar um repositório no git?");
  if ((nome == "git status")) {
    alert("O" + nome + ", serve para inspeciona um diretório.Parabéns você acertou!");
  }
  else {
    alert("O" + nome + ", serve para iniciar o git.você errou!");
  }
    window.location="aula2.html";
  
}
