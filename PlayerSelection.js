let tossButton = document.getElementById("toss-button");

tossButton.addEventListener("click", function () {

    let player1 = document.getElementById("player-x-name").value;
    let player2 = document.getElementById("player-o-name").value;

    if (player1 === "" || player2 === "") {
        alert("Please enter names for both players.");
        return;
    }

    sessionStorage.setItem("playerX", player1);
    sessionStorage.setItem("playerO", player2);
    sessionStorage.setItem("AdityaX", player1);
    sessionStorage.setItem("AratiO", player2);
    window.location.href = "Toss.html";
});