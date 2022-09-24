var cartaHermioneGranger = {
  nome: "Hermione Granger",
  imagem:
    "https://d2r9epyceweg5n.cloudfront.net/stores/984/645/products/e10be202973a04a322335e02d38d4dd91-7233a3dde0a9b7c62615594424425280-1024-1024.png",
  atributos: {
    ataque: 5,
    defesa: 9,
    magia: 8
  }
};

var cartaHarryPotter = {
  nome: "Harry Potter",
  imagem: "https://media.contentapi.ea.com/content/dam/gin/images/2017/01/harry-potter-goblet-of-fire-key-art.jpg.adapt.crop16x9.575p.jpg",
  atributos: {
    ataque: 9,
    defesa: 8,
    magia: 6
  }
};

var cartaRony = {
  nome: "Rony",
  imagem: "https://static1.purebreak.com.br/articles/9/97/35/9/@/384519-de-harry-potter-prove-que-voce-sabe-t-diapo-4.jpg",
  atributos: {
    ataque: 5,
    defesa: 10,
    magia: 4
  }
};

var cartaVoldemort = {
  nome: "Voldemort",
  imagem:
    "https://capricho.abril.com.br/wp-content/uploads/2019/10/harry-potter-voldemort-e1571074841538.jpg",
  atributos: {
    ataque: 10,
    defesa: 8,
    magia: 7
  }
};

var cartaDracoMalfoy = {
  nome: "Draco Malfoy",
  imagem:
    "https://recreio.uol.com.br/media/_versions/legacy/2021/11/08/harry-potter-tom-felton-que-interpretou-draco-malfoy-posta-foto-com-elenco-do-filme-1232881_widexl.jpg",
  atributos: {
    ataque: 6,
    defesa: 5,
    magia: 9
  }
};

var cartaDobby = {
  nome: "Dobby",
  imagem:
    "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_480,c_limit,dpr_1/cdn/be2fd56d-92fa-4160-8f17-e9c35ff2ee96/4ff028f0-5b05-4d56-80d5-3e209cd85b1f_560_420.jpg",
  atributos: {
    ataque: 3,
    defesa: 6,
    magia: 7
  }
};

var cartaAlvoDumbledore = {
  nome: "Alvo Dumbledore",
  imagem:
    "https://criticalhits.com.br/wp-content/uploads/2021/08/dumbledore-scaled-1-910x607.jpg",
  atributos: {
    ataque: 10,
    defesa: 5,
    magia: 8
  }
};

var cartaHagrid = {
  nome: "Hagrid",
  imagem:
    "https://epipoca.com.br/wp-content/uploads/2021/04/Hagrid-Robbie-Coltrane-em-a-Saga-Harry-Potter-Reproducao11-1200x900.jpg",
  atributos: {
    ataque: 5,
    defesa: 8,
    magia: 4
  }
};

var cartaMaquina;
var cartaJogador;
var cartas = [cartaHermioneGranger, cartaHarryPotter, cartaRony, cartaVoldemort, cartaDracoMalfoy, cartaDobby, cartaAlvoDumbledore, cartaHagrid];
//             0                   1                  2          3               4                 5           6                    7

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 8);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 8);
  while (numeroCartaJogador == numeroCartaMaquina) {
    numeroCartaJogador = parseInt(Math.random() * 8);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  exibirCartaJogador();
}

function obtemAtributoSelecionado() {
  var radioAtributo = document.getElementsByName("atributo");
  for (var i = 0; i < radioAtributo.length; i++) {
    if (radioAtributo[i].checked) {
      return radioAtributo[i].value;
    }
  }
}

function jogar() {
  console.log("chamou");
  var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado");

  if (
    cartaJogador.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Venceu</p>";
  } else if (
    cartaJogador.atributos[atributoSelecionado] <
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Perdeu</p>";
  } else {
    htmlResultado = "<p class='resultado-final'>Empatou</p>";
  }
  divResultado.innerHTML = htmlResultado;

  document.getElementById("btnJogar").disabled = true;
  exibirCartaMaquina();
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}