// YOUR CODE HERE
console.log("dope")

//event listener on button div
    //event.target.id replaces innerHTML with SHOOT!
    //replace with appropriate img src
    //computer innerHTML is randomly replaced with img and matching text
    //whoWon()

//computer turn class
function getRandom() {
    return Math.floor(Math.random() * 3)
};
//rock = 0
//paper = 1
//scissors = 2

function computerTurn() {
    let compTurnImage = document.getElementById("computer-image");
    let turnText = document.querySelector(".computer-image-name");

    let choice = getRandom();
    if (choice === 0) {
        compTurnImage.setAttribute("src", "./images/rock.png");
        turnText.innerHTML = "<span>Rock</span>";
        return 0;
    } else if (choice === 1) {
        compTurnImage.setAttribute("src", "./images/paper.png");
        turnText.innerHTML = "<span>Paper</span>";
        return 1;
    } else {
        compTurnImage.setAttribute("src", "./images/scissors.png");
        turnText.innerHTML = "<span>Scissors</span>";
        return 2;
    };
}


//game logic class?
function whoWon() {

//if computer = 0, then
    //if player = rock, tie
    //else if player = scissors, lose
    //else if player = paper, win

//if computer = 2, then
    //if player = rock, win
    //else if player = scissors, tie
    //else if player = paper, lose

//if computer = 1, then
    //if player = rock, lose
    //else if player = scissors, win
    //else if player = paper, tie
}

    //update game stats spans (ids)
    //Winning player background classlist.add background-color: deepskyblue

//event listener on reset button
    //set game stats spans to 0
let playerButton = document.querySelector(".button-container");
playerButton.addEventListener("click", event => {

    let turnImage = document.querySelector(".turn-image");
    let compTurn = document.getElementById("computer-image-name");

    turnImage.innerHTML = "SHOOT!";
    compTurn.innerHTML = "SHOOT!";

    let playerTurn = event.target.id;

    setTimeout(() => {
        if (playerTurn === "rock-button") {
            turnImage.innerHTML = '<img id="player-image" src="./images/rock.png"/>';
        } else if (playerTurn === "paper-button") {
            turnImage.innerHTML = '<img id="player-image" src="./images/paper.png"/>';
        } else if (playerTurn === "scissors-button") {
            turnImage.innerHTML = '<img id="player-image" src="./images/scissors.png"/>';
        };
        computerTurn();
    }, 500);
});
