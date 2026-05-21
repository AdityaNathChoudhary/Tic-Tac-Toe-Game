let a = document.getElementById("3x3button");
let b = document.getElementById("4x4button");
let c = document.getElementById("5x5button");
a.addEventListener("click", function () {
    sessionStorage.setItem("gridSize", "3x3");
    window.location.href = "PlayerSelection.html";
});
b.addEventListener("click", function () {
    sessionStorage.setItem("gridSize", "4x4");
    window.location.href = "PlayerSelection.html";
});
c.addEventListener("click", function () {
    sessionStorage.setItem("gridSize", "5x5");
    window.location.href = "PlayerSelection.html";
}); 
let hint = ["Try taking the center box first.", "Corners are stronger than side boxes.", "Block your opponent before attacking.", "If opponent takes center, take a corner.", "Two corners can create pressure.", "Try to create two winning moves at once.", "Blocking is as important as attacking.", "Pay attention to your opponent's patterns.", "Control the center for more options.","Diagonal combinations are easy to miss.","Think about the next 2 turns.","Don’t rush your move.","Side positions are usually weaker.","Create traps for your opponent.","A draw is better than losing."];
let hintText = document.getElementById("hint-text-content");
 function getRandomHint() {
     return hint[Math.floor(Math.random() * hint.length)];
 }
 
 function animateHintSwap(nextHint) {
    hintText.classList.remove("hint-enter-right", "hint-exit-left");
    hintText.classList.add("hint-exit-left");
 
     setTimeout(() => {
         hintText.textContent = nextHint;
         hintText.classList.remove("hint-exit-left");
         hintText.classList.add("hint-enter-right");
 
         setTimeout(() => {
             hintText.classList.remove("hint-enter-right");
         }, 450);
     }, 350);
 }
 
 hintText.textContent = getRandomHint();
 
hintText.classList.add("hint-enter-right");
 
 setInterval(() => {
     animateHintSwap(getRandomHint());
 }, 4000);

