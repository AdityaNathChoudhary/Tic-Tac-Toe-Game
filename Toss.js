const playerXBox = document.getElementById("Player-X");
const playerOBox = document.getElementById("Player-O");

playerXBox.textContent = sessionStorage.getItem("playerX") || "Player X";
playerOBox.textContent = sessionStorage.getItem("playerO") || "Player O";

function clearGlowState() {
	playerXBox.classList.remove("winner");
	playerOBox.classList.remove("winner");
	playerXBox.classList.remove("hidden-result");
	playerOBox.classList.remove("hidden-result");
	playerXBox.style.display = "inline-block";
	playerOBox.style.display = "inline-block";
}

function runGlowAnimation() {
	clearGlowState();

	const roll = Math.floor(Math.random() * 100) + 1;
	const playerXWins = roll % 2 === 0;

	const glowInterval = setInterval(() => {
		playerXBox.classList.toggle("winner");
		playerOBox.classList.toggle("winner");
	}, 180);

	setTimeout(() => {
		clearInterval(glowInterval);
		clearGlowState();

		if (playerXWins) {
			playerXBox.classList.add("winner");
			playerOBox.classList.add("hidden-result");
            sessionStorage.setItem("tossWinner", "X");
		} else {
			playerOBox.classList.add("winner");
			playerXBox.classList.add("hidden-result");
            sessionStorage.setItem("tossWinner", "O");
		}
	}, 4500);
}

runGlowAnimation();

let a = document.getElementById("startgamebutton");
a.addEventListener("click", function () {
  let gridSize = sessionStorage.getItem("gridSize");
  if (gridSize === "3x3") {
    window.location.href = "Threegrid.html";
    } else if (gridSize === "4x4") {
      window.location.href = "Fourgrid.html";
    } else if (gridSize === "5x5") {
      window.location.href = "Fivegrid.html";
    }
});