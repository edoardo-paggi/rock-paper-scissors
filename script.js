let humanScore = 0;
let computerScore = 0;

function getComputerChoice() { // number
    // Return 0, 1 or 2
    return Math.floor(Math.random() * 3);
}

function getHumanChoice() { // string
    return prompt("Choose rock, paper or scissors: ");
}

function playRound(humanChoice, computerChoice) {
    let human = humanChoice.toLowerCase();
    let result = "DRAW";

    if (human === "rock" || human === "r") {
        human = 0;
    } else if (human === "paper" || human === "p") {
        human = 1;
    } else if (human === "scissors" || human === "s") {
        human = 2;
    } else {
        console.log("ERROR! Input string is not valid. Please, enter 'rock', 'paper', 'scissors' or others variations");

        return;
    }

    // rock = 0, paper = 1, scissors = 2
    if (human === 0 && computerChoice === 2) {
        console.log("You WIN! Rock beats Scissors");
        result = "WIN";
    } else if (human === 1 && computerChoice === 0) {
        console.log("You WIN! Paper beats Rock");
        result = "WIN";
    } else if (human === 2 && computerChoice === 1) {
        console.log("You WIN! Scissors beats Paper");
        result = "WIN";
    } else if (human === 0 && computerChoice === 1) {
        console.log("You LOSE! Paper beats Rock");
        result = "LOSE";
    } else if (human === 1 && computerChoice === 2) {
        console.log("You LOSE! Scissors beats Paper");
        result = "LOSE";
    } else if (human === 2 && computerChoice === 0) {
        console.log("You LOSE! Rock beats Scissors");
        result = "LOSE";
    } else {
        console.log("DRAW!");
        result = "DRAW";
    }

    if (result === "WIN") {
        humanScore++;
    } else if (result === "LOSE") {
        computerScore++;
    }
}