"use strict";
var username = document.querySelector('#username');
var saveScoreBtn = document.querySelector('#saveScoreBtn');
var finalScore = document.querySelector('#finalScore');
var mostRecentScore = localStorage.getItem('mostRecentScore');
var highScores = JSON.parse(localStorage.getItem('highScores')) || [];
var MAX_HIGH_SCORES = 5;
finalScore.innerText = mostRecentScore;
username.addEventListener('keyup', function () {
    saveScoreBtn.disabled = !username.value;
});
var saveHighScore = function (e) {
    e.preventDefault();
    var score = {
        score: mostRecentScore,
        name: username.value,
    };
    highScores.push(score);
    highScores.sort(function (a, b) {
        return b.score - a.score;
    });
    highScores.splice(5);
    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('/');
};
