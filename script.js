function getComputerChoice() {
    let computerChoice
    let randInt = Math.floor(Math.random() * 3);
    switch (randInt) {
        case 0: computerChoice = 'Rock'; break;
        case 1: computerChoice = 'Paper'; break;
        case 2: computerChoice = 'Scissor'; break;
    };
    return computerChoice;
};

function playRound(playerSelection, computerSelection) {
    let playersChoice = playerSelection.toLowerCase();
    if (playersChoice == 'rock') {
        if (computerSelection == 'Rock') {
            return 0;
        }
        else if (computerSelection == 'Paper') {
            return 2;
        }
        else {return 1};
    }
    else if (playersChoice == 'paper') {
        if (computerSelection == 'Rock') {
            return 1;
        }
        else if (computerSelection == 'Paper') {
            return 0;
        }
        else {return 2};
    }
    else {
        if (computerChoice == 'Rock') {
            return 2;
        }
        else if (computerChoice == 'Paper') {
            return 1;
        }
        else {return 0};
    };
};

function game() {
    let playerScore = 0
    let computerScore = 0

    for (let i = 0; i < 5; i++) {
        let score = playRound(playerSelection, computerSelection);
        if (score == 1) {
            playerScore++
        }
        else if (score == 2) {
            computerScore++
        }
        else {continue};
     };
     
     if (playerScore > computerScore) {
        console.log('You won, u got ' + playerScore + ' points!')
     }
     else {
        console.log('You lost, u got ' + playerScore + ' points!')
     }
}

const playerSelection = 'Paper';
const computerSelection = getComputerChoice();
game()