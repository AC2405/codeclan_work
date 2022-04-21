document.addEventListener('DOMContentLoaded', () => {
    console.log("JS Loaded")
    const buttons = document.querySelectorAll('.choice')
    for(let button of buttons){
        button.addEventListener('click', handleChoice)
    }
})
const handleChoice = function(event){
    const playerChoice = event.target.value
    const computerChoice = getRandomChoice()
    const winner = play(playerChoice, computerChoice)
    showWinner(playerChoice, computerChoice, winner)
    addScore(winner)
}

const addScore = function(winner){
if(winner === "you win... im in your closet"){
const playerScore = document.querySelector('#p-score')
playerScore.innerHTML++
}else if(winner === "you lose... nightmare nightmare nightmare💀"){
    const computerScore = document.querySelector('#c-score')
    computerScore.innerHTML++
}
}

const showWinner = function(player, computer, winner){
    const resultDiv = document.querySelector('#winner')
    resultDiv.innerHTML = ''

    const choiceElement = document.createElement('p')
    choiceElement.textContent = "You Chose "+ player+". computer chose "+computer+"."
    resultDiv.appendChild(choiceElement)

    const winnerElement = document.createElement ('h2')
    winnerElement.textContent = winner
    resultDiv.appendChild(winnerElement)
    if(winner === "you win... im in your closet"){
        winnerElement.classList.add('win')
    }else if(winner === "you lose... nightmare nightmare nightmare💀"){
        winnerElement.classList.add('lose')
    }else if(winner === "its a draw... the fog is coming"){
        winnerElement.classList.add('draw')
    }
}

const play = function(player, computer){
    if(player === "rock🪨" && computer === "paper🧻"){
    return "you lose... nightmare nightmare nightmare💀"
    }
    if(player === "rock🪨" && computer === "scissors✂️"){
        return "you win... im in your closet"
        }
        if(player === "paper🧻" && computer === "rock🪨"){
            return "you win... im in your closet"
            }
            if(player === "paper🧻" && computer === "scissors✂️"){
                return "you lose... nightmare nightmare nightmare💀"
                }
                if(player === "scissors✂️" && computer === "paper🧻"){
                    return "you win... im in your closet"
                    }
                    if(player === "scissors✂️" && computer === "rock🪨"){
                        return "you lose... nightmare nightmare nightmare💀"
                        }
                        if(player === computer){
                            return "its a draw... the fog is coming"
                        }
}
const getRandomChoice = function(){
    const choices = ["rock🪨", "paper🧻", "scissors✂️"]
    const choice = choices[Math.floor(Math.random()*choices.length )]
    return choice
}
















