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
movePlayer(player);
drawPlayer(player);
}

function signal(x,y,size,signalColor, text){

}
function movePlayer(player){
    if (keyIsDown(RIGHT_ARROW)) {
    player.x += player.speed;
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