// YOUR CODE HERE
import {computerTurn} from './computer-turn.js';
import { whoWon, clearWinner } from './game-logic.js';

console.log("dope")

let playerButton = document.querySelector(".button-container");
playerButton.addEventListener("click", event => {

    let turnImage = document.querySelector("#player1 .turn-image");

    clearWinner();

    turnImage.innerHTML = "SHOOT!";
    let player2 = computerTurn();
    // console.log(player2);
    let playerTurn = event.target.id;

    setTimeout(() => {
        whoWon(playerTurn, player2);
    }, 500);


});
