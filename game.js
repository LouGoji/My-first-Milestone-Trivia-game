const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'What is Batman_s ultimate quote?',
        choice1: 'Believe me, Jim, I wish it were true, but deep inside, I doubt it.',
        choice2: 'I want you to remember the one man who beat you.',
        choice3: 'I am vengeance, I am the night, I am Batman!',
        choice4: 'Goodnight, humanitarian.',
        answer: 3,
    },

    {
        question: 'What is the one movie that has the same plot as the remake?',
        choice1: 'Beauty and the Beast.',
        choice2: 'Jungle Book.',
        choice3: 'Cinderella.',
        choice4: 'The Lion King.',
        answer: 4,
    },

    {
        question: 'Which girl would be perfect for Naruto?',
        choice1: 'Hinata.',
        choice2: 'Sakura.',
        choice3: 'Ino.',
        choice4: 'Tenten.',
        answer: 1,
    },

    {
        question: 'What is the top favorite Pokemon?',
        choice1: 'Eevee.',
        choice2: 'Lucario.',
        choice3: 'Pikachu.',
        choice4: 'Charizard.',
        answer: 4,
    },

    {
        question: 'Finish the quote. BLOCKADE! KANKERS!',
        choice1: 'Can you guess what I_m doing?',
        choice2: 'Gravy.',
        choice3: 'EXTREME CLOSE-UP!',
        choice4: 'Hello? Hello?.',
        answer: 3,
    },

    {
        question: 'What dinosaur did King Kong fought?',
        choice1: 'V-rex.',
        choice2: 'T-rex.',
        choice3: 'Skullcrawler.',
        choice4: 'Giant Snake.',
        answer: 1,
    },

    {
        question: 'When did the first Godzilla came out?',
        choice1: '1933.',
        choice2: '1954.',
        choice3: '2014.',
        choice4: '1998.',
        answer: 2,
    },

    {
        question: 'What song did Iroh sing?',
        choice1: 'Four Seasons.',
        choice2: 'It_s a long long way to Ba Sing Sa.',
        choice3: 'He uses his tsungi horn',
        choice4: 'Leaves from the vine.',
        answer: 4,
    },

    {
        question: 'Should the Teen Titans (2003) have a crossover with other movies and/or shows?',
        choice1: 'Yes.',
        choice2: 'No.',
        choice3: 'Maybe.',
        choice4: 'It already happened!',
        answer: 1,
    },

    {
        question: 'What is the first gaming console?',
        choice1: 'Nintendo.',
        choice2: 'Xbox.',
        choice3: 'The Magnavox Odyssey.',
        choice4: 'PlayStation.',
        answer: 3,
    },
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 10

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)
        
        return window.location.assign('/end.html')
    }

    questionCounter++
    progressText.innerText = 'Question ${questionCounter} of ${MAX_QUESTIONS}'
    progressBarFull.style.width = '${(questionCounter/MAX_QUESTION) * 100}%'

    const questionIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion =availableQuestions[questionIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice + number']
    })

    availableQuestions.splice(questionIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()