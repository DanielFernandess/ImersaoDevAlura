//bloco de codigo q quando clica no botão são executados
function Converter() {
  //puxa elemento da web
  var valorElemento = document.getElementById("valor");

  //pega o que esta dentro dele - value
  var valor = valorElemento.value;

  //ponto flutuante
  var valorEmDolarNumerico = parseFloat(valor);

  var valorEmReal = valorEmDolarNumerico * 5;
  console.log(valorEmReal);

  //ixibindo valor

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em Real é R$ " + valorEmReal;
  //colocando no HTML
  elementoValorConvertido.innerHTML = valorConvertido;
}