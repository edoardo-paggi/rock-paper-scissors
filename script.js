let humanScore = 0;
let computerScore = 0;

function getComputerChoice() { // number
    // Return 0, 1 or 2
    return Math.floor(Math.random() * 3);
}

function getHumanChoice() { // string
    return prompt("Choose rock, paper or scissors: ");
}

