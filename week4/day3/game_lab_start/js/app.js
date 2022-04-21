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
}else if(winner === "you lose... nightmare nightmare nightmare:skull:"){
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
    if(winner === "you win... but you still have no maidens","You pulled a swift dodge!" ){
        winnerElement.classList.add('win')
    }else if(winner === "you lose...heathen"){
        winnerElement.classList.add('lose')
    }else if(winner === "its a draw... the fog is coming"){
        winnerElement.classList.add('draw')
    }
}
const play = function(player, computer){
    if(player === "block" && computer === "attack"){
    return "you lose...heathen"
    }
    if(player === "attack" && computer === "block"){
        return "you win... but you still have no maidens"
        }
        if(player === "dodge" && computer === "attack"){
            return "You pulled a swift dodge!"
            }
            if(player === "attack" && computer === "dodge"){
                return "You gotta better your sword skills"
                }
                if(player === "dodge" && computer === "block"){
                    return "nice dodge but dont stop fighting now!"
                    }
                    if(player === "block" && computer === "dodge"){
                        return "Who blocks while your opponent is rolling on the ground?"
                        }
                        if(player === "charge" && computer === "block"){
                            return "you knock your opponent on his ass!"
                            }
                            if(player === "block" && computer === "charge"){
                                return "Annnnd you got sit down"
                                }
                                if(player === "attack" && computer === "charge"){
                                    return "you and your opponent are head on in a battle"
                                    }
                        if(player === computer){
                            return "its a draw... the fog is coming"
                        }
}
const getRandomChoice = function(){
    const choices = ["dodge", "block", "attack", "charge",]
    const choice = choices[Math.floor(Math.random()*choices.length )]
    return choice
}