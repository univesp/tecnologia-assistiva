console.log("Inicio do Quiz");
const gameOpcoes = document.querySelectorAll(".game-opcoes");
const gameImage = document.querySelectorAll(".game-image");
const gamePerguntas = document.querySelectorAll(".game-perguntas");
const label = document.querySelectorAll("label");
const btnRefazer = document.getElementById("refazer");
let respostaCorreta = [];
var answersPlayer = [];
var numeroDaPergunta = 0;
var questoesAcertada = 0;
var numeroGabarito = 0;
let numbers = [0, 1, 2, 3, 4];

const quizData = [
    {
        question: "1) As barras de apoio correspondem a qual categoria de T.A.?",
        image: "assets/quiz_01.jpeg",
        alt:"A foto mostra uma senhora com cabelos brancos e curtos, segurando em uma barra de apoio metálica. Ela está vestindo uma camisa cinza estampada com o que parecem ser pequenos desenhos abstratos coloridos.",
        font: "(Fonte da imagem: Adobe Stock – ID 402309543).",
        answers: [
            "Auxílios para a vida diária e prática.", 
            "Sistemas de controle de ambiente.", 
            "Órteses e próteses.", 
            "Mobilidade e adaptações em veículos.",
            "Esporte e lazer."],
        correct: "Auxílios para a vida diária e prática."
    },
    {
        question: "2) Os teclados em braile correspondem a qual categoria de T.A.?",
        image: "assets/quiz_02.jpeg",
        alt:"A foto exibe uma visão em close de um teclado com teclas amarelas que possuem caracteres em Braille. Os pontos em Braille estão dispostos em padrões retangulares em cada tecla, sugerindo que o teclado é projetado para usuários com deficiência visual, permitindo que eles digitem usando o sistema Braille. O fundo é uma superfície de madeira desfocada, que coloca o foco no teclado.",
        font: "(Fonte da imagem: Adobe Stock – ID 435941715).",
        answers: [
            "Recursos de acessibilidade ao computador.", 
            "Projetos arquitetônicos para acessibilidade.", 
            "Órteses e próteses.", 
            "Auxílios para pessoas com deficiência auditiva.",
            "Esporte e lazer."],
        correct: "Recursos de acessibilidade ao computador."
    },
    {
        question: "3) O aplicativo com controle remoto universal corresponde a qual categoria de T.A.?",
        image: "assets/quiz_03.jpeg",
        alt:"A foto mostra as mãos de uma pessoa branca segurando um smartphone com um aplicativo de casa inteligente na tela. O aplicativo exibe vários controles e informações relacionadas à automação residencial. Na metade superior da tela, há uma roda colorida com ícones indicando diferentes funções, como iluminação, controle de temperatura e segurança. Abaixo desta roda, há um controle deslizante de temperatura definido em 24 graus Celsius, sugerindo que o usuário pode ajustar a temperatura de sua casa usando este aplicativo. O fundo da imagem mostra um interior de cozinha moderno, indicando que o sistema de casa inteligente pode estar controlando recursos neste espaço.",
        font: "(Fonte da imagem: Adobe Stock – ID 376177259).",
        answers: [
            "Sistemas de controle de ambiente.", 
            "Órteses e próteses.", 
            "Adequação postural.", 
            "Mobilidade e adaptações em veículos.",
            "Esporte e lazer."],
        correct: "Sistemas de controle de ambiente."
    },
    {
        question: "4) As rampas correspondem a qual categoria de T.A.?",
        image: "assets/quiz_04.jpeg",
        alt:"A foto mostra um close-up de uma cadeira de rodas motorizada na borda de uma rampa. A cadeira de rodas está posicionada na rampa texturizada, indicando uma área que normalmente sinaliza uma transição para uma zona diferente, como o início ou fim de uma calçada.",
        font: "(Fonte da imagem: Adobe Stock – ID 457010462).",
        answers: [
            "Comunicação Aumentativa e Alternativa (CAA).", 
            "Recursos de acessibilidade ao computador.", 
            "Projetos arquitetônicos para acessibilidade.", 
            "Órteses e próteses.", 
            "Esporte e lazer."],
        correct: "Projetos arquitetônicos para acessibilidade."
    },
    {
        question: "5) Uma mão robótica corresponde a qual categoria de T.A.?",
        image: "assets/quiz_05.jpeg",
        alt:"A foto mostra uma mulher branca e longos cabelos castanhos lisos, que está acoplando em seu antebraço uma mão robótica preta e moderna, que é detalhada com dedos articulados, que parecem capazes de movimento e função semelhante a uma mão humana. A mulher é jovem, está vestindo uma camisa azul clara com uma camiseta branco por baixo e está em um ambiente interno, possivelmente uma sala de estar, com paredes claras e decoração minimalista ao fundo. ",
        font: "(Fonte da imagem: Adobe Stock – ID 511843919).",
        answers: [
            "Comunicação Aumentativa e Alternativa (CAA).", 
            "Projetos arquitetônicos para acessibilidade.", 
            "Órteses e próteses.", 
            "Auxílios para pessoas com deficiência visual.",
            "Auxílios para pessoas com deficiência auditiva."],
        correct: "Órteses e próteses."
    },
    {
        question: "6) As placas em braile correspondem a qual categoria de T.A.?",
        image: "assets/quiz_06.jpeg",
        alt:"A foto mostra um close-up de um painel de controle de elevador com botões para diferentes andares. Os botões estão organizados em duas colunas. A coluna da esquerda, de cima para baixo, tem os números 6, 4, 2 e B1 (indicando o primeiro subsolo). A coluna da direita tem a letra R (provavelmente indicando telhado ou um nível especial), seguida pelos números 5, 3 e 1. Cada botão é circular com numeração ou letras brancas em um fundo escuro. Ao lado de cada botão existe uma pequena placa metálica com escrita em braile.",
        font: "(Fonte da imagem: Adobe Stock – ID 254840327).",
        answers: [
            "Órteses e próteses.", 
            "Adequação postural.", 
            "Auxílios para pessoas com deficiência visual.",
            "Comunicação Aumentativa e Alternativa (CAA).", 
            "Auxílios para pessoas com deficiência auditiva.", 
            "Esporte e lazer."],
        correct: "Auxílios para pessoas com deficiência visual."
    },
    {
        question: "7) Os aparelhos auditivos correspondem a qual categoria de T.A.?",
        image: "assets/quiz_07.jpeg",
        alt:"A foto mostra um close-up do lado esquerdo da cabeça de um homem branco, focando na orelha onde se encaixa um aparelho auditivo bege. O aparelho é pequeno e curvado, projetado para se ajustar confortavelmente atrás da orelha, com um tubo fino e transparente que se estende até a entrada do canal auditivo, onde uma ponta branca menor é inserida para transmitir o som. A pele da bochecha tem uma barba rala.",
        font: "(Fonte da imagem: Adobe Stock – ID 237775616).",
        answers: [
            "Projetos arquitetônicos para acessibilidade.", 
            "Adequação postural.", 
            "Auxílios para pessoas com deficiência visual.",
            "Auxílios para pessoas com deficiência auditiva.", 
            "Mobilidade e adaptações em veículos."],
        correct: "Auxílios para pessoas com deficiência auditiva."
    },
    {
        question: "8) Os veículos adaptados e com rampa correspondem a qual categoria de T.A.?",
        image: "assets/quiz_08.jpeg",
        alt:"A foto mostra uma rampa de acesso para cadeira de rodas sendo desdobrada de um veículo. A rampa é metálica, com uma superfície perfurada para aderência e está fixada ao chão do veículo, que parece ser uma van adaptada. O veículo está estacionado em uma estrada asfaltada ao lado de uma área gramada. É interessante notar que a rampa permite o acesso independente ao veículo para pessoas que utilizam cadeira de rodas, promovendo a inclusão.",
        font: "(Fonte da imagem: Adobe Stock – ID 297132471).",
        answers: [
            "Comunicação Aumentativa e Alternativa (CAA).", 
            "Recursos de acessibilidade ao computador.", 
            "Órteses e próteses.", 
            "Adequação postural.", 
            "Mobilidade e adaptações em veículos."],
        correct: "Mobilidade e adaptações em veículos."
    },
    {
        question: "9) As cadeiras de rodas para basquete correspondem a qual categoria de T.A.?",
        image: "assets/quiz_09.jpeg",
        alt:"A foto mostra cinco paratletas em cadeiras de rodas, alinhados lado a lado em uma quadra esportiva interna. Eles estão vestindo uniformes esportivos vermelhos com números visíveis e o logotipo de uma equipe. As cadeiras de rodas são especializadas, com rodas anguladas para maior estabilidade e manobrabilidade. O fundo é uma parede amarela sólida com três faixas horizontais vermelhas separadas.",
        font: "(Fonte da imagem: Adobe Stock – ID 279225021).",
        answers: [
            "Comunicação Aumentativa e Alternativa (CAA).", 
            "Recursos de acessibilidade ao computador.", 
            "Projetos arquitetônicos para acessibilidade.", 
            "Órteses e próteses.", 
            "Esporte e lazer."],
        correct: "Esporte e lazer."
    },
    {
        question: "10) Os andadores e as bengalas correspondem a qual categoria de T.A.?",
        image: "assets/quiz_10.jpeg",
        alt:"A foto do lado esquerdo mostra um rapaz adolescente, ele é branco e tem cabelos curtos castanhos. Ele está utilizando um andador com rodas, projetado para auxiliar na locomoção. Ele está vestindo uma camiseta roxa de mangas curtas, calça jeans e tênis cinza com detalhes pretos. O andador possui uma estrutura metálica preta com quatro rodas grandes cinzas, apoios de mão acolchoados, com freios e um assento integrado. Há também uma cesta de arame abaixo do assento. E a foto do lado direito mostra um menino branco pequeno ainda criança, utilizando um andador pediátrico amarelo. Ele possui cabelo curto e loiro, além de ter olhos azuis. Ele veste uma blusa de manga longa cinza e calça jeans azul, com sapatos ortopédicos brancos que têm detalhes em preto, verde e laranja. O andador tem quatro rodas, duas alças pretas que a criança segura e uma estrutura metálica com banco que oferece suporte para seu corpo enquanto caminha. Ao fundo, há o piso de madeira de uma casa e parcialmente visível à esquerda está uma mulher adulta vestindo uma blusa de manga longa azul e calça jeans.",
        font: "(Fonte da imagem: Adobe Stock – ID 399113855 - ID 546285258).",
        answers: [
            "Comunicação Aumentativa e Alternativa (CAA).", 
            "Recursos de acessibilidade ao computador.", 
            "Auxílios de mobilidade.", 
            "Sistemas de controle de ambiente.", 
            "Projetos arquitetônicos para acessibilidade."],
        correct: "Auxílios de mobilidade."
    }
];

let arrGabarito = [
    "As barras de apoio correspondem a categoria de auxílios para a vida diária e prática.", 
    "Os teclados em braile correspondem a categoria de recursos de acessibilidade ao computador.",
    "O aplicativo com controle remoto universal corresponde a categoria de sistemas de controle de ambiente.",
    "As rampas correspondem a categoria de projetos arquitetônicos para acessibilidade.",
    "A mão ou perna robótica corresponde a categoria de próteses.",
    "As placas em braile correspondem a categoria de auxílios para pessoas com deficiência visual.",
    "Os aparelhos auditivos correspondem a categoria de auxílios para pessoas com deficiência auditiva.",
    "Os veículos adaptados e com rampa correspondem a categoria de mobilidade e adaptações em veículos.",
    "As cadeiras de rodas para basquete, assim como as bicicletas adaptadas correspondem a categoria de esporte e lazer.",
    "Os andadores e as bengalas correspondem a categoria de auxílios de mobilidade."
]

for(let x = 0; x < quizData.length;x++){
    respostaCorreta.push(quizData[x].correct)
    console.log(respostaCorreta[x])
}


document.addEventListener('DOMContentLoaded', () => {
    const radios = document.querySelectorAll('input[type="radio"]');
    var questoesAcertada = 0;
    var numeroDaPergunta = 0;
    var answersPlayer = [];

    updateQuestionsAndAnswers();

    function gameTransition() {
        let label = document.querySelectorAll('.label');
        label.forEach(element => {
            element.classList.add('hidden');
        });
    }

    function criarElementoChekado() {
        const span = document.createElement('span');
        span.className = 'chekado';
        const img = document.createElement('img');
        img.src = 'assets/sim.png';
        img.alt = '';
        span.appendChild(img);
        return span;
    }

    const radioChecks = document.querySelectorAll('label');
    radioChecks.forEach((radioCheck) => {
        radioCheck.addEventListener('click', () => {
            const elementosChekados = document.querySelectorAll('.chekado');
            elementosChekados.forEach(el => el.remove());
            const novoElemento = criarElementoChekado();
            radioCheck.parentElement.children[0].appendChild(novoElemento);
        });
    });

    function changeHandler(event) {
        numeroDaPergunta++;
        gameTransition();
        answersPlayer.push(event.target.nextElementSibling.textContent);

        radios.forEach(radio => {
            radio.checked = false; // Desmarca cada radio
        });

        if (numeroDaPergunta < 10) {
            setTimeout(() => {
                const elementosChekados = document.querySelectorAll('.chekado');
                elementosChekados.forEach(el => el.remove());
                // Atualiza perguntas e respostas
                updateQuestionsAndAnswers();


            }, 600);
        } else {
            finalizeGame();
        }
    }

    radios.forEach(radio => {
        radio.addEventListener('change', changeHandler);
    });

    function updateQuestionsAndAnswers() {
        generateUniqueRandomNumbers()
        console.log(numbers)
        // Atualiza a pergunta e as opções com base na pergunta atual
        gamePerguntas[0].children[0].innerText = quizData[numeroDaPergunta].question;
        gameImage[0].children[0].src = quizData[numeroDaPergunta].image;
        gameImage[0].children[0].alt = quizData[numeroDaPergunta].alt;
        gameImage[0].children[1].innerText = quizData[numeroDaPergunta].font;
        gameOpcoes[0].children[2].innerText = quizData[numeroDaPergunta].answers[numbers[0]];
        gameOpcoes[1].children[2].innerText = quizData[numeroDaPergunta].answers[numbers[1]];
        gameOpcoes[2].children[2].innerText = quizData[numeroDaPergunta].answers[numbers[2]];
        gameOpcoes[3].children[2].innerText = quizData[numeroDaPergunta].answers[numbers[3]];
        gameOpcoes[4].children[2].innerText = quizData[numeroDaPergunta].answers[numbers[4]];

        let label = document.querySelectorAll('.label');

        label.forEach(element => {
            setTimeout(() => {
                element.classList.remove('hidden');
            }, 300);
        });
    }

    function generateUniqueRandomNumbers() { 
        for (let i = numbers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [numbers[i], numbers[j]] = [numbers[j], numbers[i]]; // Troca os elementos
        }
    
        return numbers; 
    }    

    function finalizeGame() {
        const gameContent = document.querySelectorAll(".game-content");
        const gameContentGabarito = document.getElementById("gameContent");
        gameContent[0].style.display = "none";
        // Calcula respostas corretas
        calculateCorrectAnswers();
        gameContentGabarito.style.display = "block";
        insertGabarito();
    }

    function calculateCorrectAnswers() {
        for (let y = 0; y < 10; y++) {
            if (answersPlayer[y] === respostaCorreta[y]) {
                questoesAcertada++;
            }
        }
    }

    function insertGabarito() {
        const gameContentId = document.getElementById("gameContent");
        const gabarito = document.createElement('p');
        gabarito.innerText = "Parabéns! Você chegou ao final deste Game Quiz sobre a classificação de categorias dos recursos de Tecnologia Assistiva, acertando " + questoesAcertada + " de 10 questões. ";
        gabarito.classList = "font-weight-bold";
        const terceiroFilho = gameContentId.children[0];
        gameContentId.insertBefore(gabarito, terceiroFilho);

        if(numeroGabarito == 0){
            for (let z = 0; z < 10;z++){
                const contentGabarito = document.querySelectorAll(".content-gabarito")
                const gabaritoParagrafo = document.createElement('p');
                gabaritoParagrafo.innerText = `${z+1}) ${arrGabarito[z]}`;
                contentGabarito[0].appendChild(gabaritoParagrafo);
            }
            numeroGabarito++;
        }
    }

    function refazer() {
        const gameContentGabarito = document.getElementById("gameContent");
        const gameContent = document.querySelectorAll(".game-content");

        gameContent[0].style.display = "block";
        gameContentGabarito.style.display = "none";
        gameContentGabarito.children[0].remove();
        questoesAcertada = 0;
        numeroDaPergunta = 0;
        answersPlayer = [];

        updateQuestionsAndAnswers();

        const elementosChekados = document.querySelectorAll('.chekado');
        elementosChekados.forEach(el => el.remove());

        removeRadioListeners();
        gamePlay();
    }

    function removeRadioListeners() {
        radios.forEach(radio => {
            radio.removeEventListener('change', changeHandler);
        });
    }

    function gamePlay() {
        radios.forEach(radio => {
            radio.addEventListener('change', changeHandler);
        });
    }

    const btnRefazer = document.getElementById("refazer");
    btnRefazer.addEventListener("click", refazer);
});
