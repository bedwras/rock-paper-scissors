let computerChoice


function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);

    if(num === 0) {
        computerChoice = "rock"
    }
    
    if(num === 1) {
        computerChoice = "paper"
    }

    if(num === 2) {
        computerChoice = "scissors"
    }return computerChoice
}

