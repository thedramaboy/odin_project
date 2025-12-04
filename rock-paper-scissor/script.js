function getComputerChoice() {
    const randomNumber = (Math.random()) * 100;
    const result = Math.floor(randomNumber);
    if (result <= 33) {
        return "rock";
    } else if (result > 33 && result <= 66) {
        return "paper";
    } else {
        return "scissor";
    }
}

function getHumanChoice() {
    const answer = prompt("What's your choice for this round?");
    return answer.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(computerChoice, humanChoice) {
    console.log(computerChoice);
    console.log(humanChoice);

    if (computerChoice === "rock" && humanChoice === "scissor") {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
        computerScore++;
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
        computerScore++;
    } else if (computerChoice === "scissor" && humanChoice === "paper") {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
        computerScore++;
    } else if (computerChoice === "scissor" && humanChoice === "rock") {
        console.log(`You won! ${humanChoice} beats ${computerChoice}`)
        humanScore++;
    } else if (computerChoice === "rock" && humanChoice === "paper") {
        console.log(`You won! ${humanChoice} beats ${computerChoice}`)
        humanScore++;
    } else if (computerChoice === "paper" && humanChoice === "scissor") {
        console.log(`You won! ${humanChoice} beats ${computerChoice}`)
        humanScore++;
    } else {
        console.log("Draw");
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(getComputerChoice(), getHumanChoice());
    }
}

playGame();