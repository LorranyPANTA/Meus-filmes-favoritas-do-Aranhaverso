function AdicionarFilme() {
    var campoFilme = document.getElementById("urlFilmes");
    var filmeEscolhido = campoFilme.value;
    var listaFilmes = [
      "https://musicart.xboxlive.com/7/94fc5000-0000-0000-0000-000000000002/504/image.jpg",
      "https://br.web.img3.acsta.net/pictures/17/05/29/23/31/530814.jpg",
      "https://br.web.img2.acsta.net/pictures/19/07/05/17/30/5167951.jpg"
    ];
    if (filmeEscolhido.endsWith("Homem aranha no aranhaverso")) {
      listarFilmeNaTela(listaFilmes[0]);
    }
    if (filmeEscolhido.endsWith("Homem aranha de volta ao lar")) {
      listarFilmeNaTela(listaFilmes[1]);
    }
    if (filmeEscolhido.endsWith("Homem aranha longe do lar")) {
      listarFilmeNaTela(listaFilmes[2]);
    }
    campoFilme.value = "";
  }
  
  function listarFilmeNaTela(filme) {
    var filmeNaTela = document.getElementById("filmeNaTela");
    var elementoFilme = "<img src=" + filme + ">";
    filmeNaTela.innerHTML = filmeNaTela.innerHTML + elementoFilme;
  }
  