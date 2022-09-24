var listaFilmes = [
  "https://br.web.img3.acsta.net/medias/nmedia/18/95/59/60/20417256.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/thumb/3/33/Chamber_of_Secrets.jpg/250px-Chamber_of_Secrets.jpg",
  "https://br.web.img2.acsta.net/medias/nmedia/18/93/88/04/20282944.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/7/7b/Harry_Potter_C%C3%A1lice_Fogo_2004.jpg",
  "https://br.web.img3.acsta.net/medias/nmedia/18/90/67/58/20107766.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/b/b0/Harry_Potter_Half_Blood_Prince_2009.jpg",
  "https://ingresso-a.akamaihd.net/img/cinema/cartaz/7767-cartaz.jpg"
];

for (var i = 0; i < listaFilmes.length; i++) {
  document.write("<img src=" + listaFilmes[i] + ">");
}