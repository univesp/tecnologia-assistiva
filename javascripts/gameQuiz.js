console.log("Inicio do Quiz");

const quizData = [
    {
        question: "1) As barras de apoio correspondem a qual categoria de T.A.?",
        image: "assets/quiz_01.jpeg",
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
        answers: [
            "Recursos de acessibilidade ao computador.", 
            "Projetos arquitetônicos para acessibilidade.", 
            "Órteses e próteses.", 
            "Auxílios para pessoas com deficiência auditiva.",
            "Esporte e lazer."],
        correct: 0
    }
];

var n = 1;
console.log(quizData[n].question);
console.log(quizData[n].image);
console.log(quizData[n].answers[0]);
console.log(quizData[n].answers[1]);
console.log(quizData[n].answers[2]);
console.log(quizData[n].answers[3]);
console.log(quizData[n].answers[4]);
console.log(quizData[n].correct);

// script.js
document.addEventListener('DOMContentLoaded', () => {
    const radios = document.querySelectorAll('input[type="radio"]');

    radios.forEach(radio => {
        radio.addEventListener('change', () => {
            console.log(`Selecionado: ${radio.nextElementSibling.textContent}`);
        });
    });
});
