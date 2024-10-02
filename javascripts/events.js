$(document).ready(function(){

  //////////////////////////////////////////////////////////////////
  // HEADER DINÂMICO
  // Mostra header somente no início da página.
  // Descomentar caso utilizada a classe .header-dinamico. Caso contrário, deletar.

    $(window).scroll(function(){
      var nav = $(".header-dinamico .container");
      var scroll = $(window).scrollTop();
      if(scroll == 0){
        nav.fadeIn();
      } else {
        nav.fadeOut();
      }
    });

  //////////////////////////////////////////////////////////////////

  // Seu código abaixo
  function preloadImages(imageArray) {
    imageArray.forEach(src => {
        const img = new Image();
        img.src = src;
    });
  }

  // Array com os URLs das imagens
  const imagesToPreload = [
      'assets/quiz_01.jpeg',
      'assets/quiz_02.jpeg',
      'assets/quiz_03.jpeg',
      'assets/quiz_04.jpeg',
      'assets/quiz_05.jpeg',
      'assets/quiz_06.jpeg',
      'assets/quiz_07.jpeg',
      'assets/quiz_08.jpeg',
      'assets/quiz_09.jpeg',
      'assets/quiz_10.jpeg',
      'assets/categoria_01.svg',
      'assets/categoria_02.svg',
      'assets/categoria_03.svg',
      'assets/categoria_04.svg',
      'assets/categoria_05.svg',
      'assets/categoria_06.svg',
      'assets/categoria_07.svg',
      'assets/categoria_08.svg',
      'assets/categoria_09.svg',
      'assets/categoria_10.svg',
      'assets/categoria_11.svg',
      'assets/categoria_12.svg',
      // Adicione mais URLs de imagens conforme necessário
  ];

  // Chama a função para pré-carregar as imagens
  preloadImages(imagesToPreload);

    // Seu código acima

  })

let box = document.getElementById("box-auxilio");
let boxReferencia = document.getElementById("box-auxilio2");
let tamanhoBox = [];
var n = 0;
let buttonRecursosServicos = document.querySelectorAll('.buttonRecursosServicos');

var paragraph = document.querySelectorAll('.paragraph');
// tamanhoBox.push(box.clientHeight)

function nextBtn(){
  if(n >= 0 && n <= 11){
    n += 1;
    boxInterativo(n);
    boxReferenciaTamanho(n);

    if(tamanhoBox.length < 11 && tamanhoBox[n-1] == undefined){
      tamanhoBox.push(box.clientHeight);
    }
  }
}

function backBtn(){
  if(n >= 0 && n <= 11){
    n -= 1;
    boxInterativo(n);
    boxReferenciaTamanho(n)
  }
}


let infoBox = [
  [
    "assets/categoria_01.svg",
    "Auxílios para a vida diária e prática.",
    "Materiais e produtos que favorecem desempenho autônomo e independente em tarefas rotineiras ou facilitam o cuidado de pessoas em situação de dependência de auxílio, nas atividades como se alimentar, cozinhar, vestir-se, tomar banho e executar necessidades pessoais.",
    "Exemplos",
    "Talheres modificados, suportes para utensílios domésticos, roupas desenhadas para facilitar o vestir e despir, abotoadores, velcro, recursos para transferência, barras de apoio, equipamentos para facilitar o uso do relógio, da calculadora, verificar a temperatura do corpo, identificar se as luzes estão acesas ou apagadas, cozinhar, identificar cores e peças do vestuário, verificar pressão arterial, identificar chamadas telefônicas, escrever, etc."
  ],//0
  [
    "assets/categoria_02.svg",
    "Comunicação Aumentativa e Alternativa (C.A.A.).",
    "Destinada a atender pessoas sem fala ou escrita funcional ou em defasagem entre sua necessidade comunicativa e sua habilidade em falar e/ou escrever.",
    "Exemplos",
    "Recursos como as pranchas de comunicação, construídas com simbologia gráfica (ARASAAC, SymbolStix, Widgit, BLISS, PCS e outros), letras ou palavras escritas (para expressar desejos, sentimentos, entendimentos), vocalizadores (pranchas com produção de voz) ou o computador com softwares específicos e pranchas dinâmicas em computadores tipo tablets."
  ],//1
  [
    "assets/categoria_03.svg",
    "Recursos de acessibilidade ao computador.",
    "Conjunto de hardware e software especialmente idealizado para tornar o computador acessível a pessoas com privações sensoriais (visuais e auditivas), intelectuais e motoras. Inclui dispositivos de entrada (mouses, teclados e acionadores diferenciados) e dispositivos de saída (sons, imagens e informações táteis).",
    "Exemplos",
    "Recursos de dispositivo de entrada como teclados modificados, os teclados virtuais com varredura, mouses especiais e acionadores diversos, software de reconhecimento de voz, dispositivos apontadores que valorizam movimento de cabeça, movimento de olhos, ondas cerebrais (pensamento), órteses e ponteiras para digitação, entre outros. Como dispositivos de saída podemos citar softwares leitores de tela, software para ajustes de cores e tamanhos das informações (efeito lupa), os softwares leitores de texto impresso (O.C.R.), impressoras braile e linha braile, impressão em relevo, entre outros."
  ],//2
  [
    "assets/categoria_04.svg",
    "Sistemas de controle de ambiente.",
    "Controles que são programados para realizar funções (apagar ou acender luzes, desligar fogo ou torneira, trancar ou abrir portas, etc.) e promover maior independência.",
    "Exemplos",
    "Por meio de um controle remoto as pessoas com limitações motoras, podem ligar, desligar e ajustar aparelhos eletroeletrônicos como a luz, o som, televisores, ventiladores, executar a abertura e fechamento de portas e janelas, receber e fazer chamadas telefônicas, acionar sistemas de segurança, entre outros, localizados em seu quarto, sala, escritório, casa e arredores. O controle remoto pode ser acionado de forma direta ou indireta e neste caso, um sistema de varredura é disparado e a seleção do aparelho, bem como a determinação de que seja ativado, se dará por acionadores (localizados em qualquer parte do corpo) que podem ser de pressão, de tração, de sopro, de piscar de olhos, por comando de voz, etc."
  ],//3
  [
    "assets/categoria_05.svg",
    "Projetos arquitetônicos para acessibilidade.",
    "Projetos de edificação e urbanismo que garantem acesso, funcionalidade e mobilidade as pessoas, independentemente de sua condição física e sensorial.",
    "Exemplos",
    "Adaptações estruturais e reformas na casa ou ambiente de trabalho, por meio de rampas, elevadores, adaptações em banheiros, mobiliário entre outras, que retiram ou reduzem as barreiras físicas."
  ],//4
  [
    "assets/categoria_06.svg",
    "Órteses e próteses.",
    "Próteses são peças artificiais que substituem partes ausentes do corpo. Órteses são colocadas junto a um segmento corpo, garantindo-lhe um melhor posicionamento, estabilização e/ou função.",
    "Exemplos",
    "São normalmente confeccionadas sob medida e servem no auxílio de mobilidade, de funções manuais (escrita, digitação, utilização de talheres, manejo de objetos para higiene pessoal), correção postural, entre outros."
  ],//5
  [
    "assets/categoria_07.svg",
    "Adequação postural.",
    "Recursos que ajudem os sujeitos a ter uma postura estável e confortável, favorecendo um bom desempenho funcional.",
    "Exemplos",
    "Cadeira de rodas, poltrona postural, recursos que auxiliam e estabilizam a postura deitada e de pé, almofadas no leito, os estabilizadores ortostáticos, etc."
  ],//6
  [
    "assets/categoria_08.svg",
    "Auxílios de mobilidade.",
    "Recursos utilizados para auxiliar na mobilidade dos sujeitos.",
    "Exemplos",
    "Bengalas, muletas, andadores, carrinhos, cadeiras de rodas manuais ou elétricas, scooters e qualquer outro veículo, equipamento ou estratégia utilizada na melhoria da mobilidade pessoal."
  ],//7
  [
    "assets/categoria_09.svg",
    "Auxílios para qualificação da habilidade visual e recursos que ampliam a informação às pessoas com deficiência visual.",
    "Equipamentos que visam à independência das pessoas com deficiência visual na realização de tarefas diárias.  ",
    "Exemplos",
    "Auxílios ópticos, lentes, lupas manuais e lupas eletrônicas; os softwares ampliadores de tela. Material gráfico com texturas e relevos, mapas e gráficos táteis, software OCR em celulares para identificação de texto informativo, etc."
  ],//8
  [
    "assets/categoria_10.svg",
    "Auxílios para pessoas com deficiência auditiva.",
    "Equipamentos que visam à independência das pessoas com deficiência auditiva na realização das tarefas diárias.",
    "Exemplos",
    "Equipamentos como infravermelho, FM, aparelhos para surdez, telefones com teclado-teletipo (T.T.Y.), sistemas com alerta táctil-visual, celular com mensagens escritas e chamadas por vibração, software que favorece a comunicação ao telefone celular transformando em voz o texto digitado no celular e em texto a mensagem falada. Livros, textos e dicionários digitais em língua de sinais. Sistema de legendas (close-caption / subtitles)."
  ],//9
  [
    "assets/categoria_11.svg",
    "Mobilidade e adaptações em veículos. ",
    "São adaptações realizadas em veículos automotores para auxiliar no deslocamento da pessoa com deficiência.",
    "Exemplos",
    "Acessórios que possibilitam uma pessoa com deficiência física dirigir um automóvel, facilitadores de embarque e desembarque como elevadores para cadeiras de rodas (utilizados nos carros particulares ou de transporte coletivo), rampas para cadeiras de rodas, serviços de autoescola para pessoas com deficiência."
  ],//10
  [
    "assets/categoria_12.svg",
    "Esporte e lazer.",
    "Recursos que favorecem a prática de esporte e participação em atividades de lazer.",
    "Exemplos",
    "Cadeira de rodas para basquete, bola sonora, auxílio para segurar cartas e prótese para escalada no gelo, etc."
  ]//11
];

  boxInterativo(n);
  boxReferenciaTamanho(n);

  function boxInterativo(n){
    changeText();

    let proximoValor;

    if(tamanhoBox[n]){
      proximoValor = tamanhoBox[n];
    } else {
      proximoValor = changeContent();
    }
    if(n == 0){
      let btnBack = document.getElementById("btnBack");
      btnBack.style.display = "none";
    } else {
      btnBack.style.display = "flex";
    }

    if(n == 11){
      let btnNext = document.getElementById("btnNext");
      btnNext.style.display = "none";
    } else {
      btnNext.style.display = "flex";
    }

    if(n >= 0 && n <= 11){
      setTimeout(() => {
        requestAnimationFrame(() => {
          box.style.height = proximoValor + 'px'; // Nova altura
        });
        
      box.children[0].children[0].children[0].src = infoBox[n][0];
      box.children[0].children[1].children[0].innerHTML = `<strong style="text-transform: uppercase;">${infoBox[n][1]}</strong>`;
      box.children[0].children[1].children[1].innerHTML = infoBox[n][2];
      box.children[1].innerHTML = "Exemplos:";
      box.children[2].innerHTML = infoBox[n][4];

      paragraph.forEach(element => {  
        element.classList.remove('hidden');
      })

      }, 500);
    }
  }

  function boxReferenciaTamanho(n){
    if(n >= 0 && n <= 10){

      // boxReferencia.children[0].children[0].children[0].src = infoBox[n+1][0];
      boxReferencia.children[0].children[1].children[0].innerHTML = `<strong style="text-transform: uppercase;">${infoBox[n+1][1]}</strong>`;
      boxReferencia.children[0].children[1].children[1].innerHTML = infoBox[n+1][2];
      boxReferencia.children[1].innerHTML = "Exemplos:";
      boxReferencia.children[2].innerHTML = infoBox[n+1][4];

    }
    else if(n == 12){
      boxReferencia.children[0].children[0].children[0].src = infoBox[11][0];
      boxReferencia.children[0].children[1].children[0].innerHTML = `<strong style="text-transform: uppercase;">${infoBox[11][1]}</strong>`;
      boxReferencia.children[0].children[1].children[1].innerHTML = infoBox[11][2];
      boxReferencia.children[1].innerHTML = "Exemplos:";
      boxReferencia.children[2].innerHTML = infoBox[11][4];
    }
    else{console.log("saiu")}
  }

  // teste de animação
  function changeText() {

    paragraph.forEach(element => {
      element.classList.add('hidden');

    })
  }

  function changeContent() {
    const box = document.getElementById('box-auxilio2');
    
    // Força o navegador a recalcular a altura
    box.style.height = 'auto';

      const newHeight = box.offsetHeight; // Nova altura após o conteúdo ser atualizado
      return newHeight;
    
  }


  const elements = document.querySelectorAll('.animate__animated');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {  // Verifica se o elemento está visível
        if (entry.target.tagName === 'IMG') { // Verifica se é uma imagem
          entry.target.classList.add("animate__bounceInRight"); // Animação para imagens
        } else {
          entry.target.classList.add("animate__bounceInLeft"); // Animação para outros elementos
        }
        observer.unobserve(entry.target); // Para não adicionar a animação repetidamente
      }
    });
  }, {
    threshold: 0.2  // Define o percentual do elemento visível para acionar a animação
  });
  
  // Comece a observar todos os elementos selecionados
  elements.forEach(element => {
    observer.observe(element);
  });
  
  buttonRecursosServicos.forEach(element => {
    element.addEventListener("click", function(){
      // alert("Clicou no clique");

      const span = this.querySelector('span');
      

      if(span.children[0].style.transform == "rotate(180deg)"){
        span.children[0].style.transform = "rotate(0deg)"
      } else {
        span.children[0].style.transform = "rotate(180deg)";
      }

      console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
      console.log(span.children[0].style.transform)
      console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
    });
  });


  

// teste de animação