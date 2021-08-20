/* Game variables */

let userScore = 0;
let computerScore = 0;
const playerScore_span = document.getElementById("playerscore-span")
const compScore_span = document.getElementById("computerscore-span")
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const gameResult = document.getElementById("result-span");

function receiveCompChoice() {
    const compChoice = ["rock","paper","scissors"];
    const randomPick = (Math.floor(Math.random() *3));
    return compChoice[randomPick];
}

function winner (player,comp) {
    userScore++;
    playerScore_span.innerHTML = userScore;
    compScore_span.innerHTML = computerScore;
    gameResult.innerHTML = player + " beats " + comp + ", you are a winner "   
   
}
 
function loser(player,comp) {
    computerScore++;
    playerScore_span.innerHTML = userScore;
    compScore_span.innerHTML = computerScore;
    gameResult.innerHTML = comp + " beats " + player + ", you lose the game " 
}

function draw(player,comp) {
    playerScore_span.innerHTML = userScore;
    compScore_span.innerHTML = computerScore;
    gameResult.innerHTML = comp + " equals " + player + ", it is a draw " 
}

function play(playerChoice) {
    const computerChoice = receiveCompChoice();
    switch(playerChoice + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
        winner(playerChoice,computerChoice);
        break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
        loser(playerChoice,computerChoice);
        break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
        draw(playerChoice,computerChoice);
        break;
    }
}


function general() {

    /* Event listeners that listen for click on the button selected by user */

    rock_div.addEventListener("click", function () {
        play("rock");

    })

    paper_div.addEventListener("click", function () {
        play("paper");
    })

    scissors_div.addEventListener("click", function () {
        play ("scissors");
    })
}

general ();
