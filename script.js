const questions = [
    {
        questions:"Which is the largest animal in the world",
        answers: [
            {text: "Shark", correct: "false"},
            {text: "Blue Whale", correct: "true"},
            {text: "Elephant", correct: "false"},
            {text: "Giraffe", correct: "false"},
        ]
    },
    {
        questions:"Which is the smallest country in the world",
        answers: [
            {text: "Bhutan", correct: "false"},
            {text: "Vatican City", correct: "true"},
            {text: "Nepal", correct: "false"},
            {text: "Sri lanka", correct: "false"},
        ]               
    },
    {
        questions:"Which is the largest desert in the world",
        answers: [
            {text: "Thar", correct: "false"},
            {text: "Sahara", correct: "false"},
            {text: "Gobi", correct: "false"},
            {text: "Antartica", correct: "true"},
        ]
    },
    {
        questions:"Which is the smallest continent in the world",
        answers: [
            {text: "Asia", correct: "false"},
            {text: "Australia", correct: "true"},
            {text: "Arctic", correct: "false"},
            {text: "Africa", correct: "false"},
        ]
    },
]

const questionElement = document.getElementById('question')
const ansBtns = document.getElementById('answer-buttons')
const nextBtn = document.getElementById('next-btn')

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next"
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex]
    let quesNo = currentQuestionIndex+1;
    questionElement.innerHTML =  quesNo + '. '+ currentQuestion.questions;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement('button')
        button.innerHTML = answer.text;
        button.classList.add('btn');
        ansBtns.appendChild(button);
        
        button.addEventListener('click', ()=>{
            if(answer.correct === 'true'){
                button.classList.add('correct') 
                score++;
            }
            else{
                button.classList.add('incorrect')
            }
            
            nextBtn.style.display = 'block';
        });    
    });
}
 


function resetState(){
    nextBtn.style.display = 'none';
    while(ansBtns.firstChild){
        ansBtns.removeChild(ansBtns.firstChild)
    }
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of the ${questions.length}!`
    nextBtn.innerHTML = 'Play Again'
    nextBtn.style.display = 'block'
}

function handleNextButton(){
      currentQuestionIndex++;
      if(currentQuestionIndex<questions.length){
        showQuestion();
      }
      else{
        showScore();
      }
}

nextBtn.addEventListener('click', ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})


startQuiz();