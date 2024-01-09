const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            { text: "HyperText Markup Language", correct: true},
            { text: "High-level Text Markup Language", correct: false},
            { text: "Hyper Transfer Markup Language", correct: false},
            { text: "HyperText Machine Language", correct: false},
        ]
    },
    {
        question: "How do you select an element with id in CSS",
        answers: [
            { text: ".example", correct: false},
            { text: " #example", correct: true},
            { text: " element.example", correct: false},
            { text: "$example", correct: false},
        ]
    },
    {
        question: "What is the correct way to declare a variable in JavaScript?",
        answers: [
            { text: "let myVar = 10;", correct: true},
            { text: "variable myVar = 10;", correct: false},
            { text: "v myVar = 10;", correct: false},
            { text: "myVar: 10;", correct: false},
        ]
    },
    {
        question: "Which tag is used for creating an unordered list in HTML?",
        answers: [
            { text: "<ol>", correct: false},
            { text: "<li>", correct: false},
            { text: "<ul>", correct: true},
            { text: "<list>", correct: false},
        ]
    },
    {
        question: "What property is used to change the text color in CSS?",
        answers: [
            { text: "color", correct: true},
            { text: "text-color", correct: false},
            { text: "font-color", correct: false},
            { text: "textColor", correct: false},
        ]
    },
    {
        question: "Which function is used to print something in the console in JavaScript?",
        answers: [
            { text: "console.print()", correct: false},
            { text: "log()", correct: false},
            { text: " print.console()", correct: false},
            { text: "console.log()", correct: true},
        ]
    },
    {
        question: "What does the acronym DOCTYPE stand for in HTML?",
        answers: [
            { text: "Document Type", correct: true},
            { text: "Document Type Code", correct: false},
            { text: "Document Text", correct: false},
            { text: "Document Text Code", correct: false},
        ]
    },
    {
        question: "How do you include external stylesheets in HTML?",
        answers: [
            { text: "<link rel="stylesheet" type="text/css" href="styles.css">", correct: true},
            { text: "<style src="styles.css">", correct: false},
            { text: "<link type="css" href="styles.css">", correct: false},
            { text: "<style link="styles.css">", correct: false},
        ]
    },
    {
        question: "What is the purpose of the === operator in JavaScript?",
        answers: [
            { text: "Equality (loose)", correct: false},
            { text: "Assignment", correct: false},
            { text: "Identity (strict)", correct: true},
            { text: " Not Equal", correct: false},
        ]
    },
    {
        question: "Which tag is used for creating a hyperlink in HTML?",
        answers: [
            { text: "<link>", correct: false},
            { text: "<a>", correct: true},
            { text: "<hlink>", correct: false},
            { text: "<url>", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `${score} out of ${questions.length}`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();
