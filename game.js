const playBtns = document.querySelectorAll(".play-btn");
const output = document.querySelector("h2");
const reset = document.querySelector(".reset-btn");
let playerScore = document.querySelector("#player-score");
let computerScore = document.querySelector("#cpu-score");

playBtns.forEach((button) => {
    button.addEventListener("click", () => {
        if (playerScore.textContent < 5 && computerScore.textContent < 5) {
            playGame(button.id);
        }
    })
})

reset.addEventListener("click", resetGame)

function playGame(playerSelection) {

    const computerSelection = getComputerChoice();
    let roundResult = playRound(playerSelection, computerSelection);
    if (roundResult === "w") {
        playerScore.textContent++;
    } else if (roundResult === "l") {
        computerScore.textContent++;
    } 

    if (playerScore.textContent == 5 || computerScore.textContent == 5) {
        endGame(playerScore, computerScore);
    }
}

function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * 3);
    let choiceArr = ["Rock", "Paper", "Scissors"];
    return choiceArr[randomInt];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = capitalize(playerSelection)
    if (playerSelection === computerSelection) {
        output.textContent = `You tied! ${playerSelection} ties ${computerSelection}!`;
        return;
    } else if (playerSelection === "Rock") {
        if (computerSelection === "Paper") {
            output.textContent = "You lose! Paper covers Rock!";
            return "l";
        } else if (computerSelection === "Scissors") {
            output.textContent = "You win! Rock beats Scissors!";
            return "w";
        }
    } else if (playerSelection === "Paper") {
        if (computerSelection === "Scissors") {
            output.textContent = "You lose! Scissors cuts Paper!";
            return "l";
        } else if (computerSelection === "Rock") {
            output.textContent = "You win! Paper covers Rock!";
            return "w";
        }
    } else if (playerSelection === "Scissors") {
        if (computerSelection === "Rock") {
            output.textContent = "You lose! Rock beats Scissors!";
            return "l";
        } else if (computerSelection === "Paper") {
            output.textContent = "You win! Scissors cuts Paper!";
            return "w";
        }
    } 
}

function capitalize(inputStr) {
    return inputStr[0].toUpperCase() + inputStr.slice(1).toLowerCase();
}

function endGame(playerScore, computerScore) {
    if (playerScore.textContent > computerScore.textContent) {
        output.textContent = `Congrats, you won! Click RESET to play again!`;
    } else {
        output.textContent = `Sorry, you lost! Click RESET to play again!`;
    }
}

function resetGame() {
    output.textContent = "Choose an option to start the game. First to 5.";
    playerScore.textContent = 0;
    computerScore.textContent = 0;
}