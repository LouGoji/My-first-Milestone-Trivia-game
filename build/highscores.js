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
var highScoresList = document.querySelector('#highScoresList');
var highScores = JSON.parse(localStorage.getItem('highScores')) || [];
highScoresList.innerHTML =
    highScores.map(function (score) {
        return "<li class=\"high-score\">".concat(score.name, " - ").concat(score.score, "</li>");
    }).join('');
function lengthArray(arr1, arr2) {
    return __spreadArray([arr1], arr2, true).length;
}
function lengthArray2(arr1, arr2) {
    return __spreadArray([arr1], arr2, true).length;
}
function lengthArray3(arr1, arr2) {
    return __spreadArray([arr1], arr2, true).length;
}
