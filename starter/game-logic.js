import {computerTurn} from './computer-turn.js';

let playerDiv = document.getElementById("player1");
let computerDiv = document.getElementById("player2");
let turnImage = document.querySelector("#player1 .turn-image");

let winStat = 0;
let winStats = document.getElementById("wins");
function handleWin() {
    winStat++;
    winStats.innerHTML = winStat;
    playerDiv.classList.add("winner");
};
let tieStat = 0;
let tieStats = document.getElementById("ties");
function handleTie() {
    tieStat++;
    tieStats.innerHTML = tieStat;
};
let lossStat = 0;
let lossStats = document.getElementById("losses");
function handleLoss() {
    lossStat++;
    lossStats.innerHTML = lossStat;
    computerDiv.classList.add("winner");
};
export function clearWinner() {
    playerDiv.classList.remove("winner");
    computerDiv.classList.remove("winner");
}


//game logic class?
export function whoWon(playerTurn, player2) {

    if (player2 === 0) {
        if (playerTurn === "rock-button") {
            turnImage.innerHTML = '<img id="player-image" src="./images/rock.png"/>';
            handleTie();
        } else if (playerTurn === "paper-button") {
            turnImage.innerHTML = '<img id="player-image" src="./images/paper.png"/>';
            handleWin();
        } else if (playerTurn === "scissors-button") {
            turnImage.innerHTML = '<img id="player-image" src="./images/scissors.png"/>';
            handleLoss();
        };
    };

    if (player2 === 1) {
        if (playerTurn === "rock-button") {
            turnImage.innerHTML = '<img id="player-image" src="./images/rock.png"/>';
            handleLoss();
        } else if (playerTurn === "paper-button") {
            turnImage.innerHTML = '<img id="player-image" src="./images/paper.png"/>';
            handleTie();
        } else if (playerTurn === "scissors-button") {
            turnImage.innerHTML = '<img id="player-image" src="./images/scissors.png"/>';
            handleWin();
        };
    };

    if (player2 === 2) {
        if (playerTurn === "rock-button") {
            turnImage.innerHTML = '<img id="player-image" src="./images/rock.png"/>';
            handleWin();
        } else if (playerTurn === "paper-button") {
            turnImage.innerHTML = '<img id="player-image" src="./images/paper.png"/>';
            handleLoss();
        } else if (playerTurn === "scissors-button") {
            turnImage.innerHTML = '<img id="player-image" src="./images/scissors.png"/>';
            handleTie();
        };
    };
}

let resetButton = document.querySelector(".game-controls");

resetButton.addEventListener("click", event => {
    clearWinner();
    winStat = 0;
    winStats.innerHTML = winStat;
    tieStat = 0;
    tieStats.innerHTML = tieStat;
    lossStat = 0;
    lossStats.innerHTML = lossStat;
})
