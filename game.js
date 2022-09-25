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
        question: What is Batman's ultimate quote?',
        A: 'Believe me, Jim, I wish it were true, but deep inside, I doubt it.',
        B: 'I want you to remember the one man who beat you.',
        C: 'I am vengeance, I am the night, I am Batman!',
        D: 'Goodnight, humanitarian.',
        answer: B,
    },

    {
        question: What is the one movie that has the same plot as the remake?',
        A: 'Beauty and the Beast.',
        B: 'Jungle Book.',
        C: 'Cinderella.',
        D: 'The Lion King.',
        answer: D,
    },

    {
        question: Which girl would be perfect for Naruto?',
        A: 'Hinata.',
        B: 'Sakura.',
        C: 'Ino.',
        D: 'Tenten.',
        answer: A,
    },

    {
        question: Who is your favorite Pokemon?',
        A: 'Eevee.',
        B: 'Lucario.',
        C: 'Pikachu.',
        D: 'Charizard.',
        answer: D,
    },

    {
        question: Finish the quote. BLOCKADE! KANKERS!',
        A: 'Can you guess what I'm doing?',
        B: 'Gravy.',
        C: 'EXTREME CLOSE-UP!',
        D: 'Hello? Hello?.',
        answer: C,
    },

    {
        question: What dinosaur did King Kong fought?',
        A: 'V-rex.',
        B: 'T-rex.',
        C: 'Skullcrawler.',
        D: 'Giant Snake.',
        answer: A,
    },

    {
        question: When did the first Godzilla came out?',
        A: '1933.',
        B: '1954.',
        C: '1962.',
        D: '1998.',
        answer: B,
    },

    {
        question: What song did Iroh sing?',
        A: 'Four Seasons.',
        B: 'It's a long long way to Ba Sing Sa.',
        C: 'He uses his tsungi horn',
        D: 'Leaves from the vine.',
        answer: D,
    },

    {
        question: Should the Teen Titans (2003) have a crossover with other movies and/or shows?',
        A: 'Yes.',
        B: 'No.',
        C: 'Maybe.',
        D: 'It already happened!',
        answer: A,
    },

    {
        question: What is the first gaming console?',
        A: 'Nintendo.',
        B: 'Xbox.',
        C: 'The Magnavox Odyssey.',
        D: 'PlayStation.',
        answer: C,
    }
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

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

    const questionIndex = Math.floor
}