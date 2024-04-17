function playGame() {
    let i = playerScore = computerScore = 0;
    
    while (i < 5) {
        const playerSelection = prompt('Rock, Paper, or Scissors?');
        const computerSelection = getComputerChoice();
        let roundResult = playRound(playerSelection, computerSelection);
        if (roundResult === "w") {
            playerScore++
        } else if (roundResult === "l") {
            computerScore++
        } else {
            continue
        }
        console.log(`Player: ${playerScore} || Computer: ${computerScore}`)
        i++
    }

    if (playerScore > computerScore) {
        console.log(`Congrats! You won ${playerScore} to ${computerScore}!`)
    } else {
        console.log(`Sorry! You lost ${computerScore} to ${playerScore}!`)
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
        console.log(`You tied! ${playerSelection} ties ${computerSelection}!`);
        return;
    } else if (playerSelection === "Rock") {
        if (computerSelection === "Paper") {
            console.log("You lose! Paper covers Rock!");
            return "l";
        } else if (computerSelection === "Scissors") {
            console.log("You win! Rock beats Scissors!");
            return "w";
        }
    } else if (playerSelection === "Paper") {
        if (computerSelection === "Scissors") {
            console.log("You lose! Scissors cuts Paper!");
            return "l";
        } else if (computerSelection === "Rock") {
            console.log("You win! Paper covers Rock!");
            return "w";
        }
    } else if (playerSelection === "Scissors") {
        if (computerSelection === "Rock") {
            console.log("You lose! Rock beats Scissors!");
            return "l";
        } else if (computerSelection === "Paper") {
            console.log("You win! Scissors cuts Paper!");
            return "w";
        }
    } else {
        console.log("Please enter a valid input.")
    }
}

function capitalize(inputStr) {
    return inputStr[0].toUpperCase() + inputStr.slice(1).toLowerCase();
}

playGame()