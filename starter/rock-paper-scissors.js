// YOUR CODE HERE
import {computerTurn} from './computer-turn.js';

console.log("dope")

//event listener on button div
    //event.target.id replaces innerHTML with SHOOT!
    //replace with appropriate img src
    //computer innerHTML is randomly replaced with img and matching text
    //whoWon()


let playerButton = document.querySelector(".button-container");
playerButton.addEventListener("click", event => {

    let turnImage = document.querySelector("#player1 .turn-image");
    let compTurn = document.querySelector("#player2 .turn-image");

    setTimeout(computerTurn, 500);

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
