//o que é uma variável?
/*
  A variável é um espaço reservado na memória
  do computador.
  Vamos declarar variáveis no JavaScript?

*/

var button = document.querySelector("button");

button.onclick = function () {
  var nome = prompt("Qual é o comando para pra criar um diretório?");
  if ((nome == "mkdir")) {
    alert("O" + nome + ", cria uma pasta no diretório.Parabéns você acertou!");
  }
  else {
    alert("O" + nome + ", serve para iniciar o git.você errou!");
  }
    window.location="aula5.html";
  
}
