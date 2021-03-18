
function getRandom() {
    return Math.floor(Math.random() * 3)
    //rock = 0
    //paper = 1
    //scissors = 2
};

let compTurnImage = document.getElementById("comp-turn-img");
let turnText = document.querySelector(".computer-image-name");

function countdown() {
    setTimeout(() => {
        compTurnImage.innerHTML = "ROCK";
        setTimeout(() => {
            compTurnImage.innerHTML = "PAPER";
            setTimeout(() => {
                compTurnImage.innerHTML = "SCISSORS";
            }, 500)
        }, 500)
    }, 500);
};

export function computerTurn() {

    let choice = getRandom();
    countdown();

    let 

    if (choice === 0) {
        compTurnImage.innerHTML = '<img id="computer-image" src="./images/paper.png"/>';
        turnText.innerHTML = "<span>Rock</span>";
        console.log(compTurnImage)
        return 0;
    } else if (choice === 1) {
        compTurnImage.innerHTML = '<img id="computer-image" src="./images/paper.png"/>';
        turnText.innerHTML = "<span>Paper</span>";
        console.log(compTurnImage)
        return 1;
    } else {
        compTurnImage.innerHTML = '<img id="computer-image" src="./images/paper.png"/>';
        turnText.innerHTML = "<span>Scissors</span>";
        console.log(compTurnImage)
        return 2;
    };

}
