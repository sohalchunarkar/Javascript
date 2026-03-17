
let random = parseInt(Math.random() * 100 + 1)
const input = document.querySelector("#guessField")
const submit = document.querySelector("#subt")
const prevGuesses = document.querySelector(".guesses")
const remGuesses = document.querySelector(".lastResult")
const lowOrHigh = document.querySelector(".lowOrHi")
const startover = document.querySelector(".resultParas")

const p = document.createElement('p')
let prevGues = []
let numGuess = 1

let playGame = true
if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(input.value)
        validateGuess(guess)
    })
}


function validateGuess(guess) {
    if (isNaN(guess)) {
        displayMessage("the guess is not a number")

    }
    else if (guess < 1) {
        displayMessage("The guess can't be lower than 1")
    }
    else if (guess > 100) {
        displayMessage("The guess can't be greater thatn 100")
    } else {
        prevGues.push(guess)
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`game over .Random num was ${random}`)
            endGame()
        }
        else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === random) {
        displayMessage("Your Guess number is Correct")
        endGame()
    } else if (guess < random) {
        displayMessage("The number is too low")
    }

    else if (guess > random) {
        displayMessage("The number is too high")
    }
}


function displayGuess(guess) {

    input.value = ''
    prevGuesses.innerHTML += `${guess} ,`
    numGuess++;
    remGuesses.innerHTML = `${11 - numGuess}`


}

function displayMessage(message) {
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    input.value = ''
    input.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = '<h2 id ="newGame">Start new Game </h2>'
    startover.appendChild(p)
    playGame = false
    StartGame()

}

function StartGame() {
    const newGame = document.querySelector('#newGame')
    newGame.addEventListener('click', function (e) {
        random = parseInt(Math.random() * 100 + 1)
        prevGues = []
        numGuess = 1
        prevGuesses.innerHTML = ''
        remGuesses.innerHTML = '10'
        input.removeAttribute('disabled')
        startover.removeChild(p)
        playGame = true
    })
}



