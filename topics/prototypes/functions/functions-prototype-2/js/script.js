/**
 * Title of Project
 * Leyna Feknous
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";
let obstacle1 = undefined;
let obstacle2 = undefined;
let obstacle3 = undefined;

let player ={
    x:250,
    y:750,
    size:30,
    speed:5
}
/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
createCanvas(500,800);
obstacle1 = createObstacle(200, -50, 6);
obstacle2 = createObstacle(20, -150, 5);
obstacle3 = createObstacle(320, -100, 4);
}
// Functions of the falling obstacle
function createObstacle(xPosition,yPosition,speed){
    let obstacle ={
        x: xPosition,
        y: yPosition,
        size: {
            width:150,
            height:20
        },
        speed: speed
    }
    return obstacle;
}

/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
background(200,150,100);
updateObstacle(obstacle1);
updateObstacle(obstacle2);
updateObstacle(obstacle3);

movePlayer(player);
drawPlayer(player);
}

function updateObstacle(obstacle){
drawObstacle(obstacle);
moveObstacle(obstacle);
}

function moveObstacle(obstacle){
    obstacle.y += obstacle.speed;
}

function drawObstacle(obstacle){
    push();
    noStroke();
    fill(100,200,300);
    rect(obstacle.x,obstacle.y,obstacle.size.width,obstacle.size.height);
    pop();
}

function movePlayer(player){
  if (keyIsDown(LEFT_ARROW)) {
    player.x -= player.speed;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    player.x += player.speed;
  }

  player.x = constrain(player.x, player.size / 2, width - player.size / 2);
}

function drawPlayer(player){
  push();
  rectMode(CENTER);
  noStroke();
  fill(50, 220, 150);
  rect(player.x, player.y, player.size, player.size);
  pop();
}