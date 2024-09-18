console.log("Inicio do Quiz");
const gameOpcoes = document.querySelectorAll(".game-opcoes");
const gameImage = document.querySelectorAll(".game-image");
const gamePerguntas = document.querySelectorAll(".game-perguntas");
const label = document.querySelectorAll("label");

const quizData = [
    {
        question: "1) As barras de apoio correspondem a qual categoria de T.A.?",
        image: "assets/quiz_01.jpeg",
        font: "(Fonte da imagem: Adobe Stock – ID 402309543).",
        answers: [
            "Auxílios para a vida diária e prática.", 
            "Sistemas de controle de ambiente.", 
            "Órteses e próteses.", 
            "Mobilidade e adaptações em veículos.",
            "Esporte e lazer."],
        correct: 0
    },
    {
        question: "2) Os teclados em braile correspondem a qual categoria de T.A.?",
        image: "assets/quiz_02.jpeg",
        font: "(Fonte da imagem: Adobe Stock – ID 435941715).",
        answers: [
            "Recursos de acessibilidade ao computador.", 
            "Projetos arquitetônicos para acessibilidade.", 
            "Órteses e próteses.", 
            "Auxílios para pessoas com deficiência auditiva.",
            "Esporte e lazer."],
        correct: 0
    },
    {
        question: "3) O aplicativo com controle remoto universal corresponde a qual categoria de T.A.?",
        image: "assets/quiz_03.jpeg",
        font: "(Fonte da imagem: Adobe Stock – ID 376177259).",
        answers: [
            "Sistemas de controle de ambiente.", 
            "Órteses e próteses.", 
            "Adequação postural.", 
            "Mobilidade e adaptações em veículos.",
            "Esporte e lazer."],
        correct: 0
    },
    {
        question: "4) As rampas correspondem a qual categoria de T.A.?",
        image: "assets/quiz_04.jpeg",
        font: "(Fonte da imagem: Adobe Stock – ID 457010462).",
        answers: [
            "Comunicação Aumentativa e Alternativa (CAA).", 
            "Recursos de acessibilidade ao computador.", 
            "Projetos arquitetônicos para acessibilidade.", 
            "Órteses e próteses.", 
            "Esporte e lazer."],
        correct: 0
    },
    {
        question: "5) Uma mão robótica corresponde a qual categoria de T.A.?",
        image: "assets/quiz_05.jpeg",
        font: "(Fonte da imagem: Adobe Stock – ID 511843919).",
        answers: [
            "Comunicação Aumentativa e Alternativa (CAA).", 
            "Projetos arquitetônicos para acessibilidade.", 
            "Órteses e próteses.", 
            "Auxílios para pessoas com deficiência visual.",
            "Auxílios para pessoas com deficiência auditiva."],
        correct: 0
    },
    {
        question: "6) As placas em braile correspondem a qual categoria de T.A.?",
        image: "assets/quiz_06.jpeg",
        font: "(Fonte da imagem: Adobe Stock – ID 254840327).",
        answers: [
            "Órteses e próteses.", 
            "Adequação postural.", 
            "Auxílios para pessoas com deficiência visual.",
            "Comunicação Aumentativa e Alternativa (CAA).", 
            "Auxílios para pessoas com deficiência auditiva.", 
            "Esporte e lazer."],
        correct: 0
    },
    {
        question: "7) Os aparelhos auditivos correspondem a qual categoria de T.A.?",
        image: "assets/quiz_07.jpeg",
        font: "(Fonte da imagem: Adobe Stock – ID 237775616).",
        answers: [
            "Projetos arquitetônicos para acessibilidade.", 
            "Adequação postural.", 
            "Auxílios para pessoas com deficiência visual.",
            "Auxílios para pessoas com deficiência auditiva.", 
            "Mobilidade e adaptações em veículos."],
        correct: 0
    },
    {
        question: "8) Os veículos adaptados e com rampa correspondem a qual categoria de T.A.?",
        image: "assets/quiz_08.jpeg",
        font: "(Fonte da imagem: Adobe Stock – ID 297132471).",
        answers: [
            "Comunicação Aumentativa e Alternativa (CAA).", 
            "Recursos de acessibilidade ao computador.", 
            "Órteses e próteses.", 
            "Adequação postural.", 
            "Mobilidade e adaptações em veículos."],
        correct: 0
    },
    {
        question: "9) As cadeiras de rodas para basquete correspondem a qual categoria de T.A.?",
        image: "assets/quiz_09.jpeg",
        font: "(Fonte da imagem: Adobe Stock – ID 279225021).",
        answers: [
            "Comunicação Aumentativa e Alternativa (CAA).", 
            "Recursos de acessibilidade ao computador.", 
            "Projetos arquitetônicos para acessibilidade.", 
            "Órteses e próteses.", 
            "Esporte e lazer."],
        correct: 0
    },
    {
        question: "10) Os andadores e as bengalas correspondem a qual categoria de T.A.?",
        image: "assets/quiz_01.jpeg",
        font: "(Fonte da imagem: Adobe Stock – ID 399113855 - ID 546285258).",
        answers: [
            "Comunicação Aumentativa e Alternativa (CAA).", 
            "Recursos de acessibilidade ao computador.", 
            "Auxílios de mobilidade.", 
            "Sistemas de controle de ambiente.", 
            "Projetos arquitetônicos para acessibilidade."],
        correct: 0
    }
];


var numeroDaPergunta = 0;

document.addEventListener('DOMContentLoaded', () => {
    
    const radios = document.querySelectorAll('input[type="radio"]');

    function gameTransition() {
        let label = document.querySelectorAll('.label');
        label.forEach(element => {
          element.classList.add('hidden');
    
          setTimeout(() => {
            element.classList.remove('hidden');
          }, 800);
        })
      }

      const answersPlayer = [];

    radios.forEach(radio => {
        radio.addEventListener('change', () => {
            console.log(`Selecionado: ${radio.nextElementSibling.textContent}`);
            numeroDaPergunta=numeroDaPergunta+1;

            console.log(radios);

            gameTransition();
            answersPlayer.push(radio.nextElementSibling.textContent);
            
            setTimeout(() => {     
                radios.forEach(radio => {
                    radio.checked = false; // Desmarca cada radio
                });   

                gamePerguntas[0].children[0].innerText = quizData[numeroDaPergunta].question;
                gameImage[0].children[0].src = quizData[numeroDaPergunta].image;
                gameImage[0].children[1].innerText = quizData[numeroDaPergunta].font;
                gameOpcoes[0].children[1].innerText = quizData[numeroDaPergunta].answers[0];
                gameOpcoes[1].children[1].innerText = quizData[numeroDaPergunta].answers[1];
                gameOpcoes[2].children[1].innerText = quizData[numeroDaPergunta].answers[2];
                gameOpcoes[3].children[1].innerText = quizData[numeroDaPergunta].answers[3];
                gameOpcoes[4].children[1].innerText = quizData[numeroDaPergunta].answers[4];
            }, 600);
            console.log(answersPlayer)
        });
    });
});
