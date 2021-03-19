import {computerTurn} from './computer-turn.js';

let playerDiv = document.getElementById("player1");
let computerDiv = document.getElementById("player2");

let winStats = document.getElementById("wins");
let tieStats = document.getElementById("ties");
let lossStats = document.getElementById("losses");

//game logic class?
export function whoWon(playerTurn, player2) {
    //if computer = 0, then
        //if player = rock, tie
        //else if player = scissors, lose
        //else if player = paper, win
    if (player2 === 0) {
        if (playerTurn === "rock-button") {
            turnImage.innerHTML = '<img id="player-image" src="./images/rock.png"/>';
            tieStats.innerHTML += 1;
        } else if (playerTurn === "paper-button") {
            turnImage.innerHTML = '<img id="player-image" src="./images/paper.png"/>';
            winStats.innerHTML += 1;
        } else if (playerTurn === "scissors-button") {
            turnImage.innerHTML = '<img id="player-image" src="./images/scissors.png"/>';
            lossStats.innerHTML += 1;
        };
    };
    //if computer = 1, then
        //if player = rock, lose
        //else if player = scissors, win
        //else if player = paper, tie
    if (player2 === 1) {
        if (playerTurn === "rock-button") {
            turnImage.innerHTML = '<img id="player-image" src="./images/rock.png"/>';
            lossStats.innerHTML += 1;
        } else if (playerTurn === "paper-button") {
            turnImage.innerHTML = '<img id="player-image" src="./images/paper.png"/>';
            tieStats.innerHTML += 1;
        } else if (playerTurn === "scissors-button") {
            turnImage.innerHTML = '<img id="player-image" src="./images/scissors.png"/>';
            winStats.innerHTML += 1;
        };
    };
    //if computer = 2, then
        //if player = rock, win
        //else if player = scissors, tie
        //else if player = paper, lose
    if (player2 === 2) {
        if (playerTurn === "rock-button") {
            turnImage.innerHTML = '<img id="player-image" src="./images/rock.png"/>';
            winStats.innerHTML += 1;
        } else if (playerTurn === "paper-button") {
            turnImage.innerHTML = '<img id="player-image" src="./images/paper.png"/>';
            lossStats.innerHTML += 1;
        } else if (playerTurn === "scissors-button") {
            turnImage.innerHTML = '<img id="player-image" src="./images/scissors.png"/>';
            tieStats.innerHTML += 1;
        };
    };
}

        //update game stats spans (ids)
        //Winning player background classlist.add background-color: deepskyblue

    //event listener on reset button
        //set game stats spans to 0
let resetButton = document.querySelector(".game-controls");

resetButton.addEventListener("click", event => {
    winStats.innerHTML = 0;
    tieStats.innerHTML = 0;
    lossStats.innerHTML = 0;
})
