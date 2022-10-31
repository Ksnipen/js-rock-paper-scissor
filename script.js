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
        result = 'Det ble uavgjort.'
    }
    else {
        if (playerSelection == 'papir') {
            if (computerSelection == 'stein') {
                result = 'Du vant!'
            }
            else {
                result = 'Du tapte...'
            }
        }
        else if (playerSelection == 'stein') {
            if (computerSelection == 'papir') {
                result = 'Du tapte...'
            }
            else {
                result = 'Du vant!'
            }
        }
        else {
            if (computerSelection == 'papir') {
                result = 'Du vant!'
            }
            else {
                result = 'Du tapte...'
            }
        }
    }
    return result
};

function printResult(result) {
    document.getElementById('result').innerHTML = result
}

// function gameOfFive(playerSelection) {
//     let playerScore = 0
//     let computerScore = 0
//     for (let i = 0; i < 5; i++) {
//         let result = playRound(playerSelection, getComputerChoice())
//         if (result == 'win') {
//             playerScore++
//         }
//         else if (result == 'lost') {
//             computerScore++
//         }
//         else {continue}
//     }
    
//     if (playerScore == computerScore) {
//         return ("Det ble uavgjort! " + playerScore + "-" + computerScore)
//     }
//     else if (playerScore > computerScore) {
//         return ("Du vant! " + playerScore + "-" + computerScore)
//     }
//     else {
//         return ("Du tapte! " + playerScore + "-" + computerScore)
//     }
// }
printResult()
document.getElementById('stein').onclick = function() {
    printResult(playRound('stein', getComputerChoice()));
}
document.getElementById('saks').onclick = function() {
    printResult(playRound('saks', getComputerChoice()));
}
document.getElementById('papir').onclick = function() {
    printResult(playRound('papir', getComputerChoice()));
}