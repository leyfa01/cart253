/**
 * Don't Get Hit!
 * Leyna Feknous
 * 
 * Avoid the falling obstacles by moving your player left and right.
 * If an obstacle hits you, the game is over!
 */

"use strict";
let obstacle1 = undefined;
let obstacle2 = undefined;
let obstacle3 = undefined;

// Variable of the player
let player ={
    x:250,
    y:750,
    size:30,
    speed:5
}
// Track whether the game is over
let gameOver = false;
/**
 * Create the canvas and initialize the obstacles
*/
function setup() {
createCanvas(500,800);
obstacle1 = createObstacle(200, -50, 6);
obstacle2 = createObstacle(20, -150, 5);
obstacle3 = createObstacle(320, -100, 4);
}
// Create and return an obstacle with a given position and speed
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
 * Update the game elements and check for collisions
*/
function draw() {
if (gameOver) {
    background(220, 50, 50);
    drawGameOver();
    return;
  }
background(200, 150, 100);

updateObstacle(obstacle1);
updateObstacle(obstacle2);
updateObstacle(obstacle3);

movePlayer(player);
drawPlayer(player);

// Check if the player collides with an obstacle
// if it does then it's game over
if (
    checkCollision(player, obstacle1) ||
    checkCollision(player, obstacle2) ||
    checkCollision(player, obstacle3)
  ) {
    gameOver = true;
  }

}
// Draw and move an obstacle
function updateObstacle(obstacle){
drawObstacle(obstacle);
moveObstacle(obstacle);
}
// Move the obstacle downward and reset it when it leaves the screen
function moveObstacle(obstacle){
    obstacle.y += obstacle.speed;

  if (obstacle.y > height) {
    obstacle.y = -obstacle.size.height;
  }
}
// Draw the obstacle
function drawObstacle(obstacle){
    push();
    noStroke();
    fill(100,200,300);
    rect(obstacle.x,obstacle.y,obstacle.size.width,obstacle.size.height);
    pop();
}
// Move the player using the left and right arrow keys
function movePlayer(player){
  if (keyIsDown(LEFT_ARROW)) {
    player.x -= player.speed;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    player.x += player.speed;
  }
// Keep the player inside the canvas
  player.x = constrain(player.x, player.size / 2, width - player.size / 2);
}
// Draw the player
function drawPlayer(player){
  push();
  rectMode(CENTER);
  noStroke();
  fill(50, 220, 150);
  rect(player.x, player.y, player.size, player.size);
  pop();
}
// Check if the player collides with an obstacle
function checkCollision(player,obstacle){
    if(
        player.x + player.size > obstacle.x &&
        player.x < obstacle.x + obstacle.size.width &&
        player.y + player.size > obstacle.y &&
        player.y < obstacle.y + obstacle.size.height
    ){
        return true;
    }
    return false;
}
// Display the Game Over message
function drawGameOver(){
    push();
    textSize(22);
    textAlign(CENTER, CENTER);
    fill(255);
    text('GAME OVER, Refresh the page to play again', width / 2, height / 2);
    pop();
}