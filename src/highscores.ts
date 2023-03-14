const highScoresList = document.querySelector('#highScoresList')
const highScores = JSON.parse(localStorage.getItem('highScores')) || []

highScoresList.innerHTML =
highScores.map((score: { name: any; score: any; }) => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`
}).join('')

function lengthArray<T> (arr1: T[], arr2: T[]): number {
    return [arr1, ...arr2 ].length;
}

function lengthArray2<T> (arr1: T[], arr2: T[]): number {
    return [arr1, ...arr2 ].length;
}

function lengthArray3<T> (arr1: T[], arr2: T[]): number {
    return [arr1, ...arr2 ].length;
}