function getComputerChoice() {
    let computerChoice
    let randInt = Math.floor(Math.random() * 3);
    switch (randInt) {
        case 0: computerChoice = 'stein'; 
        break;
        case 1: computerChoice = 'saks'; 
        break;
        case 2: computerChoice = 'papir'; 
        break;
    };
    return computerChoice;
};

function playRound(playerChoice, computerSelection) {
    let result
    let playerSelection = playerChoice.toLowerCase();

    if (playerSelection == computerSelection) {
        result = 'draw'
    }
    else {
        if (playerSelection == 'papir') {
            if (computerSelection == 'stein') {
                result = 'win'
            }
            else {
                result = 'lost'
            }
        }
        else if (playerSelection == 'stein') {
            if (computerSelection == 'papir') {
                result = 'lost'
            }
            else {
                result = 'win'
            }
        }
        else {
            if (computerSelection == 'papir') {
                result = 'win'
            }
            else {
                result = 'lost'
            }
        }
    }
    return result
};

function game(playerSelection) {
    let playerScore = 0
    let computerScore = 0
    for (let i = 0; i < 10; i++) {
        let result = playRound(playerSelection, getComputerChoice())
        if (result == 'win') {
            playerScore++
        }
        else if (result == 'lost') {
            computerScore++
        }
        else {continue}
    }
    
    if (playerScore == computerScore) {
        return ("Det ble uavgjort! " + playerScore + "-" + computerScore)
    }
    else if (playerScore > computerScore) {
        return ("Du vant! " + playerScore + "-" + computerScore)
    }
    else {
        return ("Du tapte! " + playerScore + "-" + computerScore)
    }
}

let playerSelection;
let resultat;
let legalMoves = ['stein','saks','papir']

document.getElementById("submit").onclick = function() {
    playerSelection = document.getElementById("choice").value;
    if (legalMoves.includes(playerSelection.toLowerCase())) {
    resultat = game(playerSelection)
    document.getElementById("result").innerHTML = resultat
    }
    else {
        alert("Skriv inn stein, saks eller papir")
    }
}
