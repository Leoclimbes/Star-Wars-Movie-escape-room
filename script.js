const startButton = document.getElementById("start-button");

function startGame() {
    document.querySelector(".Welcome-page").style.display = "none";
    document.querySelector(".qtp1").style.display = "flex";
}

startButton.onclick = startGame;