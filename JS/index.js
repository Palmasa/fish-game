const game = new Game('game-canvas')

function removeItem(event) {
    const target = event.currentTarget
    target.parentNode.removeChild(target)
}

let roundsCounter = 0

function accScore() {
    const scores = document.getElementById("scores")
    const newScore = document.createElement('p')
    newScore.innerHTML = `${roundsCounter} round : ${game.getScore()} pts`
    scores.appendChild(newScore)
}


function converterRounds() {
    if (roundsCounter === 1) {
        return "First"
    } else if (roundsCounter === 2) {
        return "Second"
    } else if (roundsCounter === 3) {
        return "Third"
    } else if (roundsCounter === 4) {
        return "Fourth"
    } else if (roundsCounter === 5) {
        return "Fith"
    } else if (roundsCounter === 6) {
        return "Sixth"
    } else if (roundsCounter === 7) {
        return "Seventh"
    } else if (roundsCounter === 8) {
        return "Eight"
    } else if (roundsCounter === 9) {
        return "Ninth"
    } else if (roundsCounter === 10) {
        return "Tenth"
    } else {
        return roundsCounter
    }
}

const playAgainBut = document.getElementById("buttonRestart")
const unShow = (element) => element.style.visibility = "hidden"
const hide = (element) => element.style.cursor = "none"
const father = document.getElementById("game")
const son = document.getElementById("game-canvas")

const playGame = () => {
    unShow(playAgainBut)
            game.start()
            game.untilStart()
        
            const addBtn = document.getElementById('start')
            addBtn.addEventListener('click', removeItem)
            addBtn.onclick = () => {
                game.presStart()
                father.style.cursor = "none"
            }
        
            playAgainBut.addEventListener('click', ()=> {
                father.style.cursor = "none"
                roundsCounter = roundsCounter + 1
                unShow(playAgainBut)
                accScore()
                game.reSet()
                game.presStart()
            })
            
            document.addEventListener('keydown', (event) => {
                game.onKeyEvent(event)
            })
        
            document.addEventListener('keyup', (event) => {
                game.onKeyEvent(event)
            })
}

window.addEventListener('load', () => {
    if (window.innerHeight < window.innerWidth) {
        playGame()
    } else {
        alert("You are now in phone" + screen.orientation.angle)
    }
    window.addEventListener("orientationchange", function() {
        if (window.innerHeight > window.innerWidth) {
            alert("You are now in phone" + screen.orientation.angle)
        } else {
            playGame()
        }
    })

})

