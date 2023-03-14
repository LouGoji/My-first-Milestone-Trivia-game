"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var question = document.querySelector('#question');
var choices = Array.from(document.querySelectorAll('.choice-text'));
var progressText = document.querySelector('#progressText');
var scoreText = document.querySelector('#score');
var progressBarFull = document.querySelector('#progressBarFull');
var currentQuestion = {};
var acceptingAnswers = true;
var score = 0;
var questionCounter = 0;
var availableQuestions = [];
var questions = [
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
];
var SCORE_POINTS = 100;
var MAX_QUESTIONS = 10;
var startGame = function () {
    questionCounter = 0;
    score = 0;
    availableQuestions = __spreadArray([], questions, true);
    getNewQuestion;
    return score;
};
var getNewQuestion = function () {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score.toString());
        return window.location.assign('/end.html');
    }
    questionCounter++;
    progressText ? progressText.innerHTML = "Question ".concat(questionCounter, " of ").concat(MAX_QUESTIONS) : null;
    progressBarFull ? progressBarFull.style.width = '${(questionCounter/MAX_QUESTION) * 100}%' : null;
    console.log;
    var questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question ? question.innerText = currentQuestion.question
        :
    ;
    choices.forEach(function (choice) {
        var number = choice.dataset['number'];
        choice.innerText = currentQuestion["choice" + number];
        console.log();
    });
    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
};
choices.forEach(function (choice) {
    choice.addEventListener('click', function (e) {
        if (!acceptingAnswers)
            return;
        acceptingAnswers = false;
        var selectedChoice = e.target;
        var selectedAnswer = selectedChoice.dataset['number'];
        var classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';
        if (classToApply === 'correct') {
            incrementScore(SCORE_POINTS);
        }
        selectedChoice.parentElement.classList.add(classToApply);
        setTimeout(function () {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});
incrementScore = function (num) {
    score += num;
    scoreText.innerText = score;
};
startGame();
function lengthArray(arr1, arr2) {
    return __spreadArray([arr1], arr2, true).length;
}
function lengthArray2(arr1, arr2) {
    return __spreadArray([arr1], arr2, true).length;
}
function lengthArray3(arr1, arr2) {
    return __spreadArray([arr1], arr2, true).length;
}
function incrementScore(SCORE_POINTS) {
    throw new Error("Function not implemented.");
}
