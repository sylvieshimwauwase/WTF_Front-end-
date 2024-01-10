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
        question: "What does the CSS property 'display: none;' do?",
        answers: [
            { text: "Hide an element", correct: true},
            { text: "Change the background color of an element", correct: false},
            { text: "Increase the font size of an element", correct: false},
            { text: "Rotate an element", correct: false},
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
        question: "Which method is used to schedule a function to run at a specific time in JavaScript?",
        answers: [
            { text: "setInterval()", correct: false},
            { text: "setTimeout()", correct: true},
            { text: "setTime()", correct: false},
            { text: "setIntervalTimeout()", correct: false},
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
        question: "What is the purpose of the 'alt' attribute in the HTML 'img' tag?",
        answers: [
            { text: "Alternate text for the image", correct: true},
            { text: "Align the image", correct: false},
            { text: "Apply styles to the image", correct: false},
            { text: "Add a link to the image", correct: false},
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
