let box = document.querySelectorAll(".boxes");
let player;
let c;
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
let count=0;
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
           winner.hidden = false;
           document.querySelector("#winner-label").hidden=false;
           if(box[i].innerHTML==="0"){
                winnerText.innerHTML=sessionStorage.getItem("AratiO");
            }
            else{
                winnerText.innerHTML=sessionStorage.getItem("AdityaX");
            }
            reset.innerText="Play Again";
             document.querySelector("#winner-label").hidden=false;
        }
        else{
            if(count===25){
                document.querySelector("#game-board").style.display="none";
                winner.hidden = false;
                document.querySelector("#winner-label").hidden=true;
                winnerText.innerHTML="It's a Draw!";
                reset.innerText="Play Again";
            }
        }
    })
}
function checkwinner(){
    if(box[0].innerHTML===box[1].innerHTML && box[1].innerHTML===box[2].innerHTML&&box[2].innerHTML===box[3].innerHTML && box[3].innerHTML===box[4].innerHTML && box[0].innerHTML!==""){
        return true;
    }
    else if(box[5].innerHTML===box[6].innerHTML && box[6].innerHTML===box[7].innerHTML && box[7].innerHTML===box[8].innerHTML && box[8].innerHTML===box[9].innerHTML && box[5].innerHTML!==""){
        return true;
    }
    else if(box[10].innerHTML===box[11].innerHTML && box[11].innerHTML===box[12].innerHTML && box[12].innerHTML===box[13].innerHTML && box[13].innerHTML===box[14].innerHTML && box[10].innerHTML!==""){
        return true;
    }
    else if(box[15].innerHTML===box[16].innerHTML && box[16].innerHTML===box[17].innerHTML && box[17].innerHTML===box[18].innerHTML && box[18].innerHTML===box[19].innerHTML && box[15].innerHTML!==""){
        return true;
    }
    else if(box[20].innerHTML===box[21].innerHTML && box[21].innerHTML===box[22].innerHTML && box[22].innerHTML===box[23].innerHTML && box[23].innerHTML===box[24].innerHTML && box[20].innerHTML!==""){
        return true;
    }
    else if(box[0].innerHTML===box[5].innerHTML && box[5].innerHTML===box[10].innerHTML && box[10].innerHTML===box[15].innerHTML && box[15].innerHTML===box[20].innerHTML && box[0].innerHTML!==""){
        return true;
    }
    else if(box[1].innerHTML===box[6].innerHTML && box[6].innerHTML===box[11].innerHTML && box[11].innerHTML===box[16].innerHTML && box[16].innerHTML===box[21].innerHTML && box[1].innerHTML!==""){
        return true;
    }
    else if(box[2].innerHTML===box[7].innerHTML && box[7].innerHTML===box[12].innerHTML && box[12].innerHTML===box[17].innerHTML && box[17].innerHTML===box[22].innerHTML && box[2].innerHTML!==""){
        return true;
    }
    else if(box[3].innerHTML===box[8].innerHTML && box[8].innerHTML===box[13].innerHTML && box[13].innerHTML===box[18].innerHTML && box[18].innerHTML===box[23].innerHTML && box[3].innerHTML!==""){
        return true;
    }
    else if(box[4].innerHTML===box[9].innerHTML && box[9].innerHTML===box[14].innerHTML && box[14].innerHTML===box[19].innerHTML && box[19].innerHTML===box[24].innerHTML && box[4].innerHTML!==""){
        return true;
    }
    else if(box[0].innerHTML===box[6].innerHTML && box[6].innerHTML===box[12].innerHTML && box[12].innerHTML===box[18].innerHTML && box[18].innerHTML===box[24].innerHTML && box[0].innerHTML!==""){
        return true;
    }
    else if(box[4].innerHTML===box[8].innerHTML && box[8].innerHTML===box[12].innerHTML && box[12].innerHTML===box[16].innerHTML && box[16].innerHTML===box[20].innerHTML && box[4].innerHTML!==""){
        return true;
    }
   return false;
}
reset.addEventListener("click",()=>{
    for(let i=0;i<box.length;i++){
        box[i].innerHTML="";
        box[i].disabled=false;
    }
    player = true;
    count = 0;
    if(c===0){
        player=false;
    }
    else{
        player=true;
    }
    document.querySelector("#game-board").style.display="grid";
    winner.hidden = true;
    winnerText.innerHTML="";
    reset.innerText="Reset Game";
});