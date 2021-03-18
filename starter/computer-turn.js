

//computer turn class
function getRandom() {
    return Math.floor(Math.random() * 3)
};
//rock = 0
//paper = 1
//scissors = 2

export function computerTurn() {
    let compTurnImage = document.getElementById("comp-turn-img");
    let turnText = document.querySelector(".computer-image-name");

    let choice = getRandom();

    console.log(compTurnImage, choice);
    
    if (choice === 0) {
        compTurnImage.innerHTML = '<img id="computer-image" src="./images/paper.png"/>';
        turnText.innerHTML = "<span>Rock</span>";
        return 0;
    } else if (choice === 1) {
        compTurnImage.innerHTML = '<img id="computer-image" src="./images/paper.png"/>';
        turnText.innerHTML = "<span>Paper</span>";
        return 1;
    } else {
        compTurnImage.innerHTML = '<img id="computer-image" src="./images/paper.png"/>';
        turnText.innerHTML = "<span>Scissors</span>";
        return 2;
    };
}
