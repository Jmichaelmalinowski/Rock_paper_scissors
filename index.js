


function computerPlay() {
    let arr = ['Rock', 'Paper', 'Scissors'];
    choice = arr[Math.floor(Math.random() * 3)];
    return choice.toLowerCase();
}


function gameRound(playerSelection, computerSelection) {


    if (playerSelection == computerSelection) {
        return "Its a tie";
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return "You Lose, Paper beats Rock";
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return "You WIN, Rock beats Scissors";
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return "You WIN, Paper beats Rock";
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return "You Lose, Scissors beats Paper";
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return "You WIN, Scissors beats Paper";
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return "You Lose, Rock beats Scissors";
    } else {
        return "Invalid Selection"
    }
}

let playerSelection = 'Rock'.toLowerCase();
const computerSelection = computerPlay();

console.log(gameRound(playerSelection, computerSelection));