let box = document.querySelectorAll(".boxes");
let player;
let c;
let count=0;
let tossWinner = sessionStorage.getItem("tossWinner");
if (tossWinner === "X") {
    player = false;
    c=0;
}
else {
    player = true;
    c=1;
}
let reset=document.querySelector("#reset-button");
let winner=document.querySelector("#winner");
let winnerText=document.querySelector("#winner-text");
for(let i=0;i<box.length;i++){
    box[i].addEventListener("click",()=>{
        count++;
        if(player){
            box[i].innerHTML="0";
            player=false;
        }
        else{
            box[i].innerHTML="X";
            player=true;
        }
        box[i].disabled=true;
        if(checkwinner()){
           document.querySelector("#game-board").style.display="none";
           winner.hidden =false;
            if(box[i].innerHTML==="0"){
                winnerText.innerHTML=sessionStorage.getItem("AratiO");
            }
            else if(box[i].innerHTML==="X"){
                winnerText.innerHTML=sessionStorage.getItem("AdityaX");
            }
            reset.innerText="Play Again";
            document.querySelector("#winner-label").hidden=false;
        }
        else{
            if(count===9){
                document.querySelector("#game-board").style.display="none";
                winner.hidden = false;
                document.querySelector("#winner-label").hidden=true;
                document.getElementById("winner-text").innerHTML="It's a Draw!";
                reset.innerText="Play Again";
            }
        }
    })
}
function checkwinner(){
    if(box[0].innerHTML===box[1].innerHTML && box[1].innerHTML===box[2].innerHTML && box[0].innerHTML!==""){
        return true;
    }
    else if(box[3].innerHTML===box[4].innerHTML && box[4].innerHTML===box[5].innerHTML && box[3].innerHTML!==""){
        return true;
    }
    else if(box[6].innerHTML===box[7].innerHTML && box[7].innerHTML===box[8].innerHTML && box[6].innerHTML!==""){
        return true;
    }
    else if(box[0].innerHTML===box[3].innerHTML && box[3].innerHTML===box[6].innerHTML && box[0].innerHTML!==""){
        return true;
    }
    else if(box[1].innerHTML===box[4].innerHTML && box[4].innerHTML===box[7].innerHTML && box[1].innerHTML!==""){
        return true;
    }
    else if(box[2].innerHTML===box[5].innerHTML && box[5].innerHTML===box[8].innerHTML && box[2].innerHTML!==""){
        return true;
    }
    else if(box[0].innerHTML===box[4].innerHTML && box[4].innerHTML===box[8].innerHTML && box[0].innerHTML!==""){
        return true;
    }
    else if(box[2].innerHTML===box[4].innerHTML && box[4].innerHTML===box[6].innerHTML && box[2].innerHTML!==""){
        return true;
    }
    return false;
}
reset.addEventListener("click",()=>{
    for(let i=0;i<box.length;i++){
        box[i].innerHTML="";
        box[i].disabled=false;
    }
    if(c===0){
        player=false;
    }
    else{
        player=true;
    }
    document.querySelector("#game-board").style.display="grid";
    count=0;
    winner.hidden = true;
    winnerText.innerHTML="";
    reset.innerText="Reset Game";
});