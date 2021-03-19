import {whoWon} from './game-logic.js';


function getRandom() {
    return Math.floor(Math.random() * 3)
    //rock = 0
    //paper = 1
    //scissors = 2
};

let compTurnImage = document.getElementById("comp-turn-img");
let turnText = document.querySelector(".computer-image-name");

let paperImage = "<img id='computer-image' src='./images/paper.png'/>";
let rockImage = "<img id='computer-image' src='./images/rock.png'/>";
let scissorImage = "<img id='computer-image' src='./images/scissors.png'/>"

export function computerTurn() {

    let choice = getRandom();
    turnText.innerHTML = "SHOOT!";

    setTimeout(() => {
        if (choice === 0) {
            compTurnImage.innerHTML = rockImage;
            turnText.innerHTML = "<span>Rock</span>";
            // console.log(compTurnImage)
            return 0;
        } else if (choice === 1) {
            compTurnImage.innerHTML = paperImage;
            turnText.innerHTML = "<span>Paper</span>";
            // console.log(compTurnImage)
            return 1;
        } else {
            compTurnImage.innerHTML = scissorImage;
            turnText.innerHTML = "<span>Scissors</span>";
            // console.log(compTurnImage)
            return 2;
        };
    }, 500)

}

   // function countdown() {
    //     setTimeout(() => {
    //         compTurnImage.innerHTML = "ROCK";
    //         setTimeout(() => {
    //             compTurnImage.innerHTML = "PAPER";
    //             setTimeout(() => {
    //                 compTurnImage.innerHTML = "SCISSORS";
    //             }, 500)
    //         }, 500)
    //     }, 500);
    // };
