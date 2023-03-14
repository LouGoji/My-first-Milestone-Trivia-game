const username = document.querySelector('#username')
const saveScoreBtn = document.querySelector('#saveScoreBtn') as HTMLButtonElement
const finalScore = document.querySelector('#finalScore')
const mostRecentScore = localStorage.getItem('mostRecentScore')

const bestScores = JSON.parse(<string>localStorage.getItem('bestScores')) || []

const MAX_HIGH_SCORES = 5

finalScore!.innerHTML = mostRecentScore!

username!.addEventListener('keyup', () => {
    saveScoreBtn!.disabled = !username!.value
})

let saveHighScore = (e: { preventDefault: () => void }) => {
    e.preventDefault()

    const score = {
        score: mostRecentScore,
        name: username!.value,
    }

    highScores.push(score)

    highScores.sort((a: { score: number },b: { score: number }) => {
        return b.score - a.score
    })

    highScores.splice(5)

    localStorage.setItem('highScores', JSON.stringify(highScores))
    window.location.assign('/')
}