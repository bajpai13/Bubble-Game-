var timer = 60;
var score = 0;
var randnum = 0;

function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function MakeBubble(){
    var clutter="";

for (var i = 1; i < 91; i++) {
    var num = Math.floor((Math.random()*10));
    clutter += `<div id="bubble">${num}</div>`;
}

document.querySelector('#bottom').innerHTML = clutter;
}

function GameTimer(){
    var timer1 = setInterval(function(){
        if (timer>0){
            timer--;
            document.querySelector('#timer').textContent = timer;
        }
        else{
            clearInterval(timer1);
            document.querySelector('#bottom').innerHTML = `<h1>Game Over</h`;
        }
    },1000)
}

function GetNewHit(){
    randnum = Math.floor(Math.random()*10);
    document.querySelector('#hitval').textContent = randnum;
}

document.querySelector("#bottom").addEventListener("click",function(dets){
   var clickedNum = Number(dets.target.textContent);
   if(clickedNum === randnum){
    increaseScore();
    MakeBubble();
    GetNewHit();
    
}
});

GameTimer();
MakeBubble();
GetNewHit();