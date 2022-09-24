//Gerando numero aleatorio de 0 - 10
var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);

  //condições
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Parabéns, Você Acertou!";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Você Deve Digitar Um Numero De 0 a 10";
  } else if (chute > numeroSecreto) {
    elementoResultado.innerHTML = "O Número Secreto É Mais Baixo";
  } else if (chute < numeroSecreto) {
    elementoResultado.innerHTML = "O Número Secreto É Mais Alto";
  } else {
    elementoResultado.innerHTML = "Errou, Tente Novamente";
  }
}