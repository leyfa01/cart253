/**
 * Title of Project
 * Leyna Feknous
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let player ={
    x:60,
    y:250,
    size:50,
    speed:4
}
let greenSignal = true;
let timer = 0;
/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(800,500)

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
background(140,100,110);

timer++;
if(timer>120){
    greenSignal = !greenSignal;
    timer = 0;
}
if(greenSignal){
drawSignal(width / 2, 80, 80, color(50, 220, 100), "GO !");
} else {
 drawSignal(width / 2, 80, 80, color(230, 50, 50), "STOP !");   
}

movePlayer(player);
drawPlayer(player);
}

function drawSignal(x,y,size,signalColor, labelText){
    push();
    noStroke();
    fill(signalColor);
    circle(x,y,size);
    
    fill(255);
    textAlign(CENTER,CENTER);
    text(labelText,x,y + size*0.8);
    pop();
}
function movePlayer(player){
    if (keyIsDown(RIGHT_ARROW)) {
        if(!greenSignal){
            player.x = 60;
        } else{
            player.x += player.speed;
        }
    
  }
}
function drawPlayer(player){
    push();
    rectMode(CENTER);
    noStroke();
    fill(100, 200, 255);
    rect(player.x, player.y, player.size, player.size);
    pop();
}