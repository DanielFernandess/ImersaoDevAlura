function adicionarFilme() {
  var filmeFavorito = document.getElementById("filme").value;

  //Add filme com url finalizando com .jpg ou .png
  if (filmeFavorito.endsWith(".jpg") || filmeFavorito.endsWith(".png")) {
    listarFilmesNaTela(filmeFavorito);
  } else {
    console.error("Endereço de filme inválido (JPG ou PNG)");
  }
  //Limpando campo
  document.getElementById("filme").value = "";
}

function listarFilmesNaTela(filme) {
  console.log(filme);
  var elementoFilmeFavorito = "<img src=" + filme + ">";
  var elementoListaFilmes = document.getElementById("listaFilmes");
  elementoListaFilmes.innerHTML =
    elementoListaFilmes.innerHTML + elementoFilmeFavorito;
}