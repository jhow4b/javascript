const data = [
    {
        id: 1,
        question: "Qual desses jogos não é da FromSoftware?",
        answers: [
            { answer: "Elden Ring", isCorrect: false},
            { answer: "Dark Souls", isCorrect: false},
            { answer: "Lies of P",  isCorrect: true},
            { answer: "Sekiro",  isCorrect: false},
        ],
    },
    {
        id: 2,
        question: "Qual jogo ganhou o GOTY em 2023?",
        answers: [
            { answer: "Baldur's Gate 3", isCorrect: true},
            { answer: "Alan Wake 2", isCorrect: false},
            { answer: "Zelda Tears of the Kingdom", isCorrect : false},
            { answer: "Resident Evil 4 Remake", isCorrect: false},
        ],
    },
    {
        id: 3,
        question: "Qual é o melhor mangá do mundo?",
        answers : [
            { answer: "Boku no Hero", isCorrect : false},
            { answer: "Jujutsu Kaisen", isCorrect : false},
            { answer: "Naruto", isCorrect : false},
            { answer: "One Piece", isCorrect : true},
        ],
    },
]

const game = document.querySelector(".game")
const resultScreen = document.querySelector(".result")
const question = document.querySelector(".question")
const answersContainer = document.querySelector(".answers")
const submit = document.querySelector(".submit")
const play = document.querySelector(".play")

let questionIndex = 0
let correctCount = 0
let wrongCount = 0
let total = 0
let selectedAnswer

const playAgain = () => {
    questionIndex = 0
    correctCount = 0
    wrongCount = 0
    total = 0
    showQuestion(questionIndex)
}

play.addEventListener("click", () => {
    game.style.display = "block"
    resultScreen.style.display = "none"
    playAgain()
})

const showResult = () => {
    game.style.display = "none"
    resultScreen.style.display = "block"
    
    resultScreen.querySelector(".correct").textContent = `Respostas corretas: ${correctCount}`
    resultScreen.querySelector(".wrong").textContent = `Respostas erradas: ${wrongCount}`
    resultScreen.querySelector(".score").textContent = `Pontuação: ${correctCount * 10}`
}

const showQuestion = (questionNumber) => {
    if (questionIndex >= data.length) showResult()
    selectedAnswer = null
    question.textContent = data[questionNumber].question
    answersContainer.innerHTML = data[questionNumber].answers.map((item, index) =>
    `
    <div class="answer">
        <input type="radio" name="answer" id="${index}" value="${item.isCorrect}">
        <label for="${index}">${item.answer}</label>
    </div>
    `
    ).join("")

    selectAnswer()
}

const selectAnswer = () => {
    answersContainer.querySelectorAll("input").forEach((el) => {
        el.addEventListener("click", (e) => {
            selectedAnswer = e.target.value
        })
    })
}

const submitAnswer = () => {
    submit.addEventListener("click", () => {
        if (selectedAnswer !== null) {
            selectedAnswer === "true" ? correctCount++ : wrongCount++
            questionIndex++
            showQuestion(questionIndex)            
        } else alert("Selecione uma resposta")
        
    })
}
    
showQuestion(questionIndex)
submitAnswer()