// YOUR CODE HERE
import {computerTurn} from './computer-turn.js';

console.log("dope")

let playerButton = document.querySelector(".button-container");
playerButton.addEventListener("click", event => {

    let turnImage = document.querySelector("#player1 .turn-image");
    let compTurn = document.querySelector("#player2 .turn-image");

    computerTurn();

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
    }, 500);
});
