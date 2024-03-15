const questions = [
    {
        question: "Which is larget animal in the world?",
        answer:[
            { text: "shark", correct: false},
            { text: "Blue whale", correct: true},
            { text: "Elephant", correct: false},
            { text: "Giraffe", correct: false},
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answer:[
            { text: "Asia", correct: false},
            { text: "Arctic", correct: true},
            { text: "Australia", correct: true},
            { text: "Africa", correct: false},
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answer:[
            { text: "Asia", correct: false},
            { text: "Arctic", correct: true},
            { text: "Australia", correct: true},
            { text: "Africa", correct: false},
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answer:[
            { text: "Asia", correct: false},
            { text: "Arctic", correct: true},
            { text: "Australia", correct: true},
            { text: "Africa", correct: false},
        ]
    }

];

const questionElement = document.getElementByID("question");
const answerButton = document.getElementByID("answer-buttons");
const nextButton = document.getElementByID("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    let currentQuestion = questoin[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.currect){
            button.dataset.correct = answer.currect;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none"
    while (answerButton.firstChild){
        answerButton.appendChild(answerButton.firstChild);
    } 
}

function selectAnswer(){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
    }else{
        selectedBtn.classList.add("incorrect");
    }
}

startQuiz()