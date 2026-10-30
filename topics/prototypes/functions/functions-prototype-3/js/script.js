/**
 * Red Light, Green Light
 * Leyna Feknous
 *
 * Move the square from left to right using the RIGHT arrow key.
 * Only advance when the signal is GREEN. Moving on RED resets you to the start.
 * Cross the yellow finish line to win!
 */

"use strict";

// Player object
let player = {
  x: 60,
  y: 250,
  size: 50,
  speed: 4,
};
// Signal variables
let greenSignal = true;
let timer = 0;

// Win state tracking
let gameWon = false;
/**
 * Creates the horizontal canvas
 */
function setup() {
  createCanvas(800, 500);
}

/**
 * Handles the win screen, traffic light timer
 * finish line display, and player updates
 */
function draw() {
// If the game is won, clear the screen to green and stop running the rest
  if (gameWon) {
    background(50, 180, 90);
    drawWinScreen();
    return;
  }
  background(140, 100, 110);

// Draw vertical goal line
  push();
  stroke(255, 215, 0);
  strokeWeight(4);
  line(720, 0, 720, height);
  pop();

// Timer that switches signal state every 2 seconds (120 frames)
  timer++;
  if (timer > 120) {
    greenSignal = !greenSignal;
    timer = 0;
  }
//  Draw traffic signal with parameters
  if (greenSignal) {
    drawSignal(width / 2, 80, 80, color(50, 220, 100), "GO !");
  } else {
    drawSignal(width / 2, 80, 80, color(230, 50, 50), "STOP !");
  }
// Move and draw player
  movePlayer(player);
  drawPlayer(player);

// Trigger victory condition
  if (player.x >= 720) {
    gameWon = true;
  }
}

// Draws a customized signal using position, size, color, and label parameters
function drawSignal(x, y, size, signalColor, labelText) {
  push();
  noStroke();
  fill(signalColor);
  circle(x, y, size);

  fill(255);
  textAlign(CENTER, CENTER);
  text(labelText, x, y + size * 0.8);
  pop();
}
// Moves the player to the right and applies the red light penalty
function movePlayer(player) {
  if (keyIsDown(RIGHT_ARROW)) {
    if (!greenSignal) {
    // return to start
      player.x = 60;
    } else {
      player.x += player.speed;
    }
  }
}
// Draws the player square
function drawPlayer(player) {
  push();
  rectMode(CENTER);
  noStroke();
  fill(100, 200, 255);
  rect(player.x, player.y, player.size, player.size);
  pop();
}
// Displays the centered victory screen message
function drawWinScreen() {
  push();
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(32);
  textStyle(BOLD);
  text("YOU WIN !", width / 2, height / 2);
  pop();
}
