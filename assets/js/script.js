/* Game variables */

let userScore = 0;
let computerScore = 0;
const playerScore_span = document.getElementById("playerscore-span")
const compScore_span = document.getElementById("computerscore-span")
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function receiveCompChoice() {
    const compChoice = ["rock","paper","scissors"];
    const randomPick = (Math.floor(Math.random() *3));
    return compChoice[randomPick];
}

function winner () {
    console.log("win")
}
 
function loser() {
    console.log("lose")
}

function draw() {
   console.log("draw")
}

function play(playerChoice) {
    const computerChoice = receiveCompChoice();
    switch(playerChoice + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
        winner();
        break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
        loser();
        break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
        draw();
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
