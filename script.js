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
    let result
    let playersChoice = playerSelection.toLowerCase();
    if (playersChoice == 'rock') {
        if (computerSelection == 'Rock') {
            result = 'draw';
        }
        else if (computerSelection == 'Paper') {
            result = 'lost';
        }
        else {result = 'win'};
    }
    else if (playersChoice == 'paper') {
        if (computerSelection == 'Rock') {
            result = 'win';
        }
        else if (computerSelection == 'Paper') {
            result = 'draw';
        }
        else {result = 'lost'};
    }
    else {
        if (computerChoice == 'Rock') {
            result = 'lost';
        }
        else if (computerChoice == 'Paper') {
            result = 'win';
        }
        else {result = 'draw'};
    };
    return (result)
};

function game(playerSelection) {
    let playerScore = 0
    let computerScore = 0
    for (let i = 0; i < 5; i++) {
        let result = playRound(playerSelection, getComputerChoice())
        if (result == 'win') {
            playerScore++
        }
        else if (result == 'lost') {
            computerScore++
        }
        else {continue}
    }
    if (playerScore > computerScore) {
        console.log('Du vant! Du fikk ' + playerScore + ' poeng, mens computeren fikk ' + computerScore + ' poeng')
    }
    else {console.log('Du tapte! Du fikk ' + playerScore + ' poeng, mens computer fikk ' + computerScore + ' poeng')}
}

const playerSelection = 'Paper';
game(playerSelection);